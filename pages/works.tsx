import type { NextPage } from "next";
import Head from "next/head";

import Container from "components/container";
import Heading from "components/heading";
import Section from "components/section";

import WorkCard from "components/work-card";
import SimpleLink from "components/simple-link";

const works = {
  current: [
    {
      name: "Correio Anônimo",
      imageUrl: "/correio.png",
      description:
        "Envie mensagens de forma anônima para suas pessoas queridas usando seus nomes de usuário do Twitter.",
      link: "https://correioanonimo.com.br",
    },
    {
      name: "Hookpedia",
      imageUrl: "/hookpedia.png",
      description:
        "Um repositório de Hooks do React, feito pela comunidade lusófona.",
      link: "https://hookpedia.now.sh",
    },
    {
      name: "Guilherme Sousa",
      imageUrl: "/portfolio.png",
      description: "Este site que você está acessando!",
      link: "https://guilherssousa.dev",
    },
  ],
  past: [
    {
      name: "Dramaland",
      imageUrl: "/dramaland.png",
      description:
        "Um portal de notícias, resenhas e opinião do mundo da dramaturgia coreana.",
      link: "https://dramaland.now.sh",
    },
    {
      name: "p44blo",
      imageUrl: "/p44blo.png",
      description: "Ruan 'p44blo' Dias é um editor de vídeos de Blumenau/SC.",
      link: "https://ruanpdias.com",
    },
  ],
};

const Works: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Trabalhos | Guilherme Sousa</title>
      </Head>

      <Section>
        <Heading title="Trabalhos" />
        <p>
          Aqui você poderá ver meus trabalhos de desenvolvimento e contriubições
          open source.
        </p>

        <div className="mt-6">
          <Heading size="small" title="Em manutenção" />

          <div className="grid sm:grid-cols-2 mt-6 gap-y-6 gap-x-4">
            {works.current.map((work) => (
              <WorkCard key={work.name} {...work} />
            ))}
          </div>

          <div className="border-t border-stone-700 mt-8 mb-6"></div>
          <Heading size="small" title="Trabalhos antigos" />
          <div className="grid sm:grid-cols-2 mt-6 gap-y-6 gap-x-4">
            {works.past.map((work) => (
              <WorkCard key={work.name} {...work} />
            ))}
          </div>

          <div className="border-t border-stone-700 mt-8 mb-6"></div>
          <Heading size="small" title="Open Source" />

          <p className="mt-2">
            Tenho contribuido com documentações open source recentemente,
            ajudando a traduzí-las para Português do Brasil e também trabalhando
            em melhorias no seu idioma original, facilitando a leitura e
            entendimento para milhares de desenvolvedores.
          </p>

          <p className="mt-2">Alguns dos projetos que contribuí:</p>

          <ul className="mt-2">
            <li>
              <SimpleLink href="https://swr.vercel.app/pt-BR">
                vercel/swr-site
              </SimpleLink>
            </li>
            <li>
              <SimpleLink href="https://pnpm.io/pt/motivation">
                pnpm/pnpm
              </SimpleLink>
            </li>
            <li>
              <SimpleLink href="https://www.electronjs.org/pt/docs/latest">
                electron/electron
              </SimpleLink>
            </li>
          </ul>
        </div>
      </Section>
    </Container>
  );
};

export default Works;
