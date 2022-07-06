import type { NextPage } from "next";
import Head from "next/head";

import Container from "components/container";
import Heading from "components/heading";
import Section from "components/section";
import SimpleLink from "components/simple-link";

const Blog: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Guilherme Sousa | Blog</title>
      </Head>
      <Section>
        <Heading title="Blog" />
        <p>
          Aqui você verá posts sobre reflexões pessoais e meus hobbies, como
          música, história e ponderações sobre o meu cotidiano. Se quiser ler
          posts sobre tecnologia, recomendo acessar meu{" "}
          <SimpleLink href="https://medium.com/@guilherssousa">
            Medium
          </SimpleLink>
          .
        </p>
      </Section>
    </Container>
  );
};

export default Blog;
