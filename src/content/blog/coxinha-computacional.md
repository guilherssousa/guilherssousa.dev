---
title: "Legacy: Entendendo Extremidade Computacional (endianness) usando uma Coxinha"
description: "Entenda como um computador ordena dados a partir de um polêmico questionamento brasileiro"
pubDate: 2022-09-06T17:53:30.074Z
---

![Um velho questionamento da internet: Qual é o jeito certo de se comer uma coxinha?](https://i.imgur.com/iAQlgID.png)

Se você gosta de usar redes sociais, você provavelmente já se deparou com a questão: Qual é o jeito certo de se comer uma coxinha? Pelo lado de baixo? Pela ponta? Até os [candidatos ao Prêmio Bom Gourmet 2018 de Melhor Coxinha de Curitiba já opinaram sobre esse assunto.](https://www.otempo.com.br/gastro/polemica-existe-jeito-correto-de-comer-coxinha-1.2212210)

Esse mesmo dilema acontece com outras coisas, como a forma de comer um ovo cozido, como organizar datas corretamente e, não menos importante, isso também acontece em Arquitetura de Computadores.

Então, vamos hoje entender como computadores registram bits usando esse polêmico questionamento brasileiro!

## Origem do termo _Endianness_

O termo **_Endianness_** é inspirado do livro **As Viagens de Gulliver**, onde em uma das histórias, conta que houve uma guerra civil entre os moradores da vila onde os moradores que preferiam quebrar os ovos cozidos pelo lado maior enfrentaram os que preferiam quebrar pelo lado menor.

> Fonte: [Wikipedia](https://pt.wikipedia.org/wiki/Extremidade_%28ordena%C3%A7%C3%A3o%29)

## Peso de Coxinha e Peso Numérico: MSB e LSB

Se eu mostrar uma foto de uma coxinha para alguém e perguntar: "Qual é o lado mais pesado?", quase que certamente a pessoa responderá que o lado mais pesado é a base da coxinha, pois tem mais recheio dentro do que na ponta.

Isso também acontece com números, por exemplo, se eu mostro o número 3.589, podemos observar que o número mais "pesado" é o 3, pois representa três milhares. Logo, o número mais "leve" ou menos pesado é o 9, pois só representa nove unidades.

Quando um computador registra os dados a partir do Byte mais pesado (ou mais significativo), então ele funciona na ordem **_Big-endian_**. Quando ele começa pelo mais leve (ou menos significativo), então ele funciona na ordem **_Little-endian_**.

### Exemplo prático

Vamos agora imaginar dois computadores com boca _(sic)_: Um deles vai comer a coxinha pelo lado maior e o outro pela ponta.

Quando o primeiro computador recebe a coxinha a partir do lado maior, ele é um **_Big-endian_**, porque ele vai registrando a memória (digerindo a coxinha) a partir do MSB (Bit mais significante, ou a parte mais recheada da coxinha).

Agora quando o segundo computador recebe a coxinha a partir da ponta, ele é um **_Little-endian_**, pois ele vai endereçando os dados a partir do LSB (Bit menos significante, ou a ponta da coxinha).

![Tipos de ordenação de bytes. Fonte: Wikipedia](https://i.imgur.com/2CwaU8P.png)

### Outros formas

Existem também outras formas de registrar, usadas por alguns computadores. Por exemplo, existe também o **_middle-endian_**, onde o bit cujo a grandeza é média será escrito primeiro. Uma analogia para essa representação é o formato de datas usado nos Estados Unidos: MM/DD/AAAA. Enquanto no Brasil, usamos o formato **_little-endian_**, onde a ordem é DD/MM/AAAA.

## E qual é o jeito certo de ordenar?

Na realidade, assim como não existe um jeito certo de se comer uma coxinha, também não existe um jeito certo de ordenar os dados. Cada pessoa vai ter sua forma preferida de coxinha, assim como cada computador vai ter seu formato de ordenar esses dados.

Por exemplo, os processadores x86 da Intel, AMD e Z80 são os mais famosos que usam o formato **_little-endian_**, ordenando a partir do byte menos expressivo. Já pelo outro lado, os famosos 6800 e 68000 da Motorola usam o formato **_big-endian_**.

## Conclusão

Enquanto estudava sobre o tópico, acabei achando vídeos muito explicativos e fáceis de entender sobre o assunto, porém em Inglês. Então decidi compilar o meu entendimento sobre o assunto e escrever um artigo em português, apenas alterando a analogia em prol da adaptação local para melhor entendimento. :\)

Eu percebi que é muito mais fácil entender conceitos de computação quando você faz analogias desses conteúdos com problemas do cotidiano. Isso faz você absorver melhor o aprendizado e as vezes até traz uma solução inesperada para um problema.
