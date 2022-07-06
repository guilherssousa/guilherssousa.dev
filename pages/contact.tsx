import type { NextPage } from "next";
import Head from "next/head";

import Container from "components/container";
import Heading from "components/heading";
import Section from "components/section";

const Contact: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Guilherme Sousa | Contato</title>
      </Head>
      <Section>
        <Heading title="Vamos conversar?" />
        <p>
          Tem uma ideia e gostaria de botar em prática? Quer dar feedbacks sobre
          alguma postagem? Deseja falar sobre Pokemóns? Entre em contato comigo!
        </p>
      </Section>
    </Container>
  );
};

export default Contact;
