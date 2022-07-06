import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";

import Container from "components/container";

import FeaturingCard from "components/featuring-card";
import SimpleLink from "components/simple-link";
import Section from "components/section";

import Heading from "components/heading";

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Guilherme Sousa</title>
      </Head>

      <main className="flex flex-col-reverse md:flex-row w-full md:items-start justify-between gap-x-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold">Guilherme Sousa</h1>
          <div className="text-small sm:text-base mt-2 font-semibold text-stone-400">
            Fullstack Developer @ Mais Esports
          </div>

          <p className="text-small sm:text-base whitespace-pre-line mt-2 text-stone-400 leading-relaxed">
            Gosto de escrever atigos sobre tech, dev e outros assuntos variados.
            Contribuidor open source de traduções e Freelancer nas horas vagas.
          </p>
        </div>
        <div className="mb-8 w-24 h-24 sm:w-32 sm:h-32 md:w-auto md:h-auto order-1 md:order-2 flex items-center justify-center rounded-full ring-4 ring-orange-400 relative overflow-hidden">
          <Image
            src="https://github.com/guilherssousa.png"
            alt="Hi, this is me."
            width={256}
            height={256}
          />
        </div>
      </main>

      <section className="mt-16">
        <Heading title="Em destaque" />
        <FeaturingCard
          title="Dissecando o create-vite: Entendendo como funciona a CLI do Vite"
          description="Vamos entender como a CLI funciona, de forma comentada?"
          href="https://medium.com/@guilherssousa/dissecando-o-create-vite-entendendo-como-funciona-a-cli-do-vite-e6ddfa196029"
          date="9 de Julho de 2022"
        />
      </section>

      <div className="mt-16">
        <Section>
          <Heading title="Sobre mim" />
          <p>
            Meu nome é Guilherme, sou desenvolvedor e amante do audiovisual,
            história e música. Atualmente estou vivendo no Brasil :)
          </p>
          <p>
            Agora estou trabalhando no{" "}
            <SimpleLink href="https://maisesports.com.br">
              Mais Esports
            </SimpleLink>
            , desenvolvendo experiências de coberturas de campeonatos. Mas
            também estou realizo projetos como Freelancer e contribuindo com
            projetos open source de vez em quando.
          </p>

          <p>
            Além disso, escrevo para o{" "}
            <SimpleLink href="https://medium.com/@guilherssousa">
              Medium
            </SimpleLink>
            , onde falo sobre desenvolvimento e outros assuntos relacionados.
            Também escrevo posts sobre diversos assuntos aqui mesmo nesse site,
            você pode conferir alguns desses posts clicando em &quot;Blog&quot;
            lá em cima! &uarr;
          </p>
        </Section>
      </div>
    </Container>
  );
};

export default Home;
