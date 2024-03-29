---
title: "Legacy: Mais um portfólio: Faz mal mudar o site toda hora?"
description: "Faz bem ficar mudando seu site pessoal o tempo todo? Um rascunho sobre motivações e o processo de criação deste novo site."
pubDate: 2022-07-06
---

De ontem pra hoje (05 e 06/07) decidi reescrever meu portfólio pessoal. Não é a primeira vez que faço isso, na verdade faço isso com uma frequência que denuncia uma leve ansiedade. Mas, faz mal fazer isso?

## Motivação

Precisamos levar alguns pontos em consideração para fazer isso e esses foram os pontos que me empurraram para refazer meu site pessoal.

### Site Único

Antes deste site, eu tinha dois outros sites que agiam como meu portfólio pessoal.

O https://guilherssousa.dev foi um site que criei apenas para exibir algumas informações básicas sobre mim e meus trabalhos. Foi tudo feito numa única página e construido usando Vite, TypeScript e React.

O htps://blog.guilherssousa.dev foi um site criado para estudar o framework Remix.js, entender seu funcionamento construindo uma aplicação prática e com uso. Além do Remix, também foi usado a API do Blogger como CMS e Tailwind.

A primeira motivação já está aparente com esses dois motivos: Gostaria de unificar os dois mundos, ter um portfólio pessoal com a função de Blog.

O outro motivo é que gostaria de usar alguma ferramenta que eu já tenha mais domínio técnico, assim consigo dar manutenção a longo prazo de uma forma mais fácil. Por isso, o framework escolhido dessa vez foi o Next.js.

### Gerenciando conteúdo

Mais um motivo para isso foi sobre o CMS: No meu blog antigo, eu usava um serviço de terceiros para escrever os posts e fazia tratamento deles no lado do servidor da aplicação. Isso é algo ruim, já que o Blogger não foi projetado para usar a sintaxe de Markdown, o que trazia muitos _edge cases_ para serem lidados.

Por isso, decidi usar uma nova ferramenta que venho criando olhares recentemente: Contentlayer. Ele serve como um SDK que valida e transforma o conteúdo em JSONs com tipagem segura que posso importar pra minha aplicação.

Não pretendo entrar em detalhes sobre a implementação das funções do Contentlayer nesse post, talvez seja interessante fazê-las num post do Medium.

## Construindo o site

Para construção do layout da aplicação, decidi usar meu framework CSS favorito, Tailwind. A construção do site é bastante simples, com alguns detalhes de gradiente no fundo e microanimações realizadas usando a biblioteca _Framer Motion_.

O Layout do site foi baseado em vários outros portfólios pessoais, os quais citarei no final do artigo. Não há nada demais sobre eles.

## Lighthouse

Antes da implementação das animações usando o _Framer Motion_, o site estava atingindo 100 em todas as categorias do Lighthouse! 🎉 É claro que ao adicionar mais funções e consequentemente mais dados no bundle, a aplicação irá pontuar menos nos quesitos de performance do Lighthouse, mas preferi fazer essa trade de desempenho por uma experiência de uso melhor.

A pontuação do Lighthouse não define a qualidade do seu site, leve isso como uma lição de hoje!

## Conclusão

Creio que não faz mal usar seu espaço pessoal para testar tecnologias novas,
assim você tem mais liberdade para experimentar funcionalidades que não teria outras oportunidades para usar.
