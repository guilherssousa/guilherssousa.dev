import type { NextPage } from "next";
import Head from "next/head";

import Container from "components/container";
import Heading from "components/heading";
import Section from "components/section";

const Works: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Guilherme Sousa | Trabalhos</title>
      </Head>

      <Section>
        <Heading title="Trabalhos" />
        <p>
          Aqui você poderá ver meus trabalhos de desenvolvimento e contriubições
          open source.
        </p>
      </Section>
    </Container>
  );
};

export default Works;
