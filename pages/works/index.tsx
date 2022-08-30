import type { NextPage } from "next";
import Head from "next/head";

import { allWorks, type Work } from ".contentlayer/generated";

import Container from "components/container";
import Heading from "components/heading";
import Section from "components/section";

import WorkCard from "components/work-card";
import SimpleLink from "components/simple-link";

interface Props {
  works: {
    current: Work[];
    past: Work[];
    collaborations: Work[];
  };
}

const Works: NextPage<Props> = ({ works }) => {
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
          <Heading size="small" title="Colaborações" />

          <div className="grid sm:grid-cols-2 mt-6 gap-y-6 gap-x-4">
            {works.collaborations.map((work) => (
              <WorkCard key={work.name} {...work} />
            ))}
          </div>

          <div className="border-t border-stone-700 my-8"></div>
          <Heading size="small" title="Em manutenção" />

          <div className="grid sm:grid-cols-2 mt-6 gap-y-6 gap-x-4">
            {works.current.map((work) => (
              <WorkCard key={work.name} {...work} />
            ))}
          </div>

          <div className="border-t border-stone-700 my-8"></div>
          <Heading size="small" title="Trabalhos antigos" />

          <div className="grid sm:grid-cols-2 mt-6 gap-y-6 gap-x-4">
            {works.past.map((work) => (
              <WorkCard key={work.name} {...work} />
            ))}
          </div>

          <div className="border-t border-stone-700 my-8"></div>
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

export const getStaticProps = async () => {
  const mapToProps = (work: Work) => ({
    name: work.name,
    imageUrl: work.imageUrl,
    description: work.description,
    link: `/works/${work.slug}`,
  });

  function filterAndMapToProp(status: string) {
    return allWorks.filter((work) => work.status === status).map(mapToProps);
  }

  return {
    props: {
      works: {
        current: filterAndMapToProp("current"),
        past: filterAndMapToProp("past"),
        collaborations: filterAndMapToProp("collaboration"),
      },
    },
  };
};

export default Works;
