import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";

import Head from "next/head";

import { allPosts, type Post } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

import Container from "components/container";
import Section from "components/section";

interface Params extends ParsedUrlQuery {
  slug: string;
}

interface Props {
  post: Post;
}

const Post: NextPage<Props> = ({ post }) => {
  const MDXContent = useMDXComponent(post.body.code);

  const formatedDate = new Date(post.date).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const formatedReadingTime = post.readingTime.text.replace(
    "read",
    "de leitura"
  );

  return (
    <Container>
      <Head>
        <title>{post.title} | Guilherme Sousa</title>
      </Head>
      <Section>
        <div>
          <div className="font-bold text-2xl sm:text-3xl md:text-4xl text-neutral-100 leading-snug">
            {post.title}
          </div>
          <div className="mt-2 text-sm sm:text-base text-stone-500">
            Publicado em {formatedDate} &bull; {formatedReadingTime}
          </div>
          <div className="mt-4">{post.description}</div>

          <div className="border-t border-stone-700 mt-6"></div>
        </div>
        <div className="prose md:prose-lg prose-invert">
          <MDXContent />
        </div>
      </Section>
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allPosts.map((post) => `/blog/${post.slug}`);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as Params;

  const post = allPosts.find((post) => post.slug === slug);

  return {
    props: {
      post,
    },
  };
};

export default Post;
