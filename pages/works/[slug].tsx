import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";

import Head from "next/head";
import Link from "next/link";

import { allWorks, type Work } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

import Container from "components/container";
import Section from "components/section";

import Badge from "components/badge";
import SimpleLink from "components/simple-link";

interface Params extends ParsedUrlQuery {
  slug: string;
}

interface Props {
  work: Work;
}

const Work: NextPage<Props> = ({ work }) => {
  const MDXContent = useMDXComponent(work.body.code);

  const title = `${work.name}  | Guilherme Sousa`;

  return (
    <Container>
      <Head>
        <title>{title}</title>
      </Head>
      <Section>
        <div>
          <Link href="/works" passHref>
            <a className="hover:brightness-90">&larr; Voltar</a>
          </Link>
          <div className="mt-3 font-bold text-2xl sm:text-3xl md:text-4xl text-neutral-100 leading-snug">
            {work.name}
          </div>

          <div className="border-t border-stone-700 mt-6"></div>
        </div>
        <MDXContent components={{ Badge, SimpleLink }} />
      </Section>
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allWorks.map((work) => `/works/${work.slug}`);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as Params;

  const work = allWorks.find((work) => work.slug === slug);

  return {
    props: {
      work,
    },
  };
};

export default Work;
