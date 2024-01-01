---
title: "Legacy: Como foi o processo de migração do Correio para uma stack diferente"
description: "Privacidade, performance, confiabilidade: Motivações e aprendizados sobre a mudança de stack."
pubDate: "2022-05-23"
---

Esse post foi escrito para o projeto legado do Blog, não se incomode caso sinta diferença na formação dos conteúdos desse post para os outros. Estou sempre tentando melhorar!

Uma ideia que era para estudos e hoje tem 9 mil usuários. Nesse post abordarei a hitória, pensamentos sobre segurança, privacidade, motivações para a migração da aplicação para Netxt.js e abordarei as táticas usadas para garantir integridade dos dados.

Esse artigo será separado em várias partes, você pode pular para onde desejar.

## O que levou ao Correio Anônimo?

No final de 2021, comecei a fazer um projeto de estudos chamado de "correio anônimo" (sim, tudo caixa minúscula.), meramente para entender de vez como funciona a integração do Firebase com vendors de autenticação social como o Google ou o Twitter.

Eu não tinha nenhum tipo de expectativa sobre usuários, apenas fazendo por fazer, sem me dedicar a pequenos detalhes de implementação.

Acontece, que, acabou dando errado, mas de um jeito certo: Subi o projeto na Vercel e fiz um tweet sobre o site, para que a minha bolha social (na época, constituida de no máximo 3 pessoas além de mim) pudesse testar e validar minha ideia.

Porém, retweet vai, retweet vem: Acabou que alguns influencers grandes viram, retuitaram, assim começando uma cadeia de divulgação que totalizou 8 mil usuários até o fim de 2021.

Hoje em dia, o tráfego do site é mínimo comparado ao seu auge, mas mesmo com poucos usuários, ainda tinha algumas preocupações sobre questões importantes numa aplicação desse estilo, como segurança, políticas de privacidade e etc.

## Segurança de dados e privacidade

Desde o começo, garantir a integriade dos dados foi uma preocupação. No projeto, usei o Realtime Database para guardar os dados das mensagens. Caso você já tenha usado esse BD, sabe que ele tem uma ferramenta de regras de segurança para acesso de dados, que é praticamente um arquivo JSON com definições condicionais sobre permissões.

Segurança dos dados nunca foi um problema no Correio, afinal, não existe informação sensível sendo guardada, tanto do remetente, quanto do destinatário. Mas, é importante garantir que apenas as pessoas certas possam ler as suas mensagens, seguindo o Least Privilege Principle, isso foi garantido bem cedo.

Sobre Integridade de dados, já temos um problema: na versão legado do código, quando um usuário envia uma mensagem para um determinado usuário, essa mensagem fica guardada no diretório do nome de usuário do destinatário, como por exemplo:

Alguém deseja enviar uma mensgem para o @sseraphini, quando ela for enviada, ficará guardada no diretório /messages/sseraphini/[algum-id].

Caso o problema não tenha ficado claro, nomes de usuário no Twitter podem ser alterados, assim, os dados não são permanentes e muito menos íntegros sobre as mensagens de usuários.

O @Joaozinho123 pode acabar mudando seu nome de usuário e perdendo todo seu registro de mensagens, enquanto o @guizinohmaisbrabo acabou de criar sua conta e já vê um bando de mensagens.

Então, já adiciono novos itens na lista sobre problemas a resolver:

- Garantir que as mensagens sejam entregues apenas aos usuários certos.

## Performance e DX: Por que Next.js com TypeScript?

> Talvez esse parágrafo pareça ofensivo para os evangelistas...

### 1. A DX de usar o CRA foi muito ruim

A versão original do correio foi feita usando o humilde `create-react-app`, carinhosamente apelidado por mim como _desgraça_.

Mano, pensa numa ferramenta ruim pra dar manutenção a longo prazo. Eu não queria fazer isso, mas não tinha tempo para fazer o projeto.
A real é que o problema nem é total do CRA, mas sim as ferramentas que eu tive que usar que acarretaram em gargalo e alguns outros benefícios do Next.js que vem a calhar para esse caso.

O primeiro deles é sem dúvidas o tempo de inicialização da aplicação, que é muito mais rápido do que o do legado. Antes, para que o projeto pudesse usar o Tailwind para estilizar as páginas, eu estava usando o CRACO, que é um ~~**transformer bisonho**~~ módulo de configuração que sobrescreve o CRA.

tl;dr: O tempo de inicialização da aplicação acaba ficando defasado graças ao uso disso, então preferi dar prioridade ao Tailwind com Next.js, cujo já tenho experiência de uso e sei que é bem mais rápido do que o CRACO.

### 2. API Routes do Next.js

Outra grande motivação pra usar o Next.js foi seu suporte a Serverless functions como rotas de API.

Quando a aplicação insere ou resgata dados do BD, ele usa o SDK do Firebase para isso. Não que o SDK do Firebase não seja problema, mas optei por usar a REST API do Realtime Database pra fazer isso, porque tenho mais controle sobre os dados que passam pelo fluxo de queries.

Para esconder a lógica de como o Realtime Database funciona, eu uso as API Routes do Next.js para validar os inputs, fazer as solicitações e um tratamento de erros mais robusto, evitando grandes problemas como tinham antigamente, já que toda a regra de negócio sobre o envio de dados acabava ficando manipulável no Frontend. Também tem outro motivo, mas vamos abordá-lo no proximo ponto.

### 3. TypeScript

Sobre o **TypeScript**, não tem motivações muito cabulosas sobre o por quê de usá-lo, mas é uma ferramenta que faz com que o projeto seja mais robusto e seguro quando se trata de lidar com os dados de um serviço tão volátil quanto o Realtime Database.

## Usando IDs para usuários

Como já indagado anteriormente, a maior preocupação era sobre usuários não receberem suas mensagens por misspeling ou por terem trocado seus nomes de usuário.
A solução mais plausível foi usar os IDs dos usuários do Twitter para endereçar as mensagens, assim um usuário sempre vai acessar e ter permissão ao seu respectivo endereço.

Como eu poderia trabalhar livremente com a API do Next.js sem ter que me preocupar sobre expor dados sensíveis, pude usar um SDK do Twitter pra fazer uma query e resgatar o ID do usuário pelo seu nome.

Faca e queijo nas mãos, inserir uma mensagem nova já é problema resolvido. Agora, vamos para a dor de cabeça maior, resgatar as mensagens recebidas.

Para que as regras de segurança do Realtime Database sejam garantidas e que as rotas sejam liberadas, é preciso passar um parâmetro de autenticação de usuário para cada requisição. O problema é que esse token fica numa parte bem obscura do retorno do SDK do Firebase Authentication, o que é justificável, já que eu estou usando um método "não-convencional" para resgatar os dados. Mas com esses dados recebidos e tratados, eu posso fazer a query e resgatar os dados.

No geral, só tive um problema com esse rolê todo: A Vercel filtra os Headers que são recebidos pelos middlewares da API, então tive que passar a informação sensível via Query Params **(NUNCA FAÇA ISSO!!)**.

## Processo de Migração e desenvolvimento de ferramentas

Já temos uma nova estrutura de dados, agora precisamos migrar os dados atuais para esse novo formato. Para isso, eu desenvolvi uma série de scripts que fizeram a validação, filtragem e transformação dos dados para esse novo esquema.

### Primeiro passo: Filtragem de usuários e mensagens

Para facilitar o processo de migração, meu primeiro passo foi filtrar toda a base de dados baseados em algumas condições que dizem a respeito sobre a veracidade dos dados, por assim dizer. Os critérios para que os dados não sejam ignorados são:

- O nome do usuário tem que ser um nome válido no Twitter
- As mensagens do usuário não podem ter mais de 800 caracteres

Com esses quesitos, consegui filtrar uma quantidade boa de dados gerados automaticamente por alguém que, em algum momento, decidiu estressar o banco de dados e fazer XSS. ~~(hehe)~~

### Segundo passo: Guardar IDs de usuários

O segundo passo consiste em pegar os usuários restantes da filtragem e separá-los em grupos de 100 nomes de usuário. Cada grupo é uma lista comum de nomes, que depois serão usados para resgatar os IDs dos usuários por lotes de dados na API do Twitter.

Com os dados retornados da API, essa etapa retorna um JSON de chave-valor [nome de usuário]: ID.

### Terceiro passo: Juntar incidências de usuários

Agora que temos mensagens filtradas e os nomes corretos dos usuários, um passo a mais é juntar as mensagens de cada usuário.

Vamos dizer que o @sseraphini tenha recebido 90 mensagens, mas só 73 delas chegaram pra ele, porque, quando as outras 17 mensagens foram enviadas, o remetente acabou errando a digitação e escreveu Sseraphini. (sim, até agora, o correio sofria com problemas de case-sensitive)

Esse passo consiste em simplesmente normalizar os nomes de usuários das duas bases, resgatar todas as mensagens que coincídem com uma lista de incidências de nomes de usuário, e assimilá-los ao ID correspondente ao usuário.

Com isso, todas as mensagens destinadas ao mesmo usuário que não apareciam por causa de caixa alta ou um @ no começo do nome estão resolvidos.

Dados já transformados, foi possivel fazer a migração com sucesso.

## Considerações finais

Ainda tenho alguns pequenos detalhes de implementação para resolver por aqui. Até lá, talvez esses problemas gerem um artigo legal. Mas por enquanto, darei adeus ao artigo, esperando que tudo dê certo.

Até outro post!
