import React, { useState, useMemo } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { allPosts, type Post } from "contentlayer/generated";

import Container from "components/container";
import Heading from "components/heading";
import Section from "components/section";
import SimpleLink from "components/simple-link";

import ArticleCard from "components/article-card";

interface Props {
  posts: Post[];
}

const Blog: NextPage<Props> = ({ posts }) => {
  const [search, setSearch] = useState("");

  const filteredPosts = useMemo(
    () =>
      posts.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase())
      ),
    [search, posts]
  );

  const displayPosts = search.length > 3 ? filteredPosts : posts;

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

        <div className="mt-4 w-full h-12 px-4 bg-stone-800 rounded-xl flex items-center">
          <input
            type="text"
            placeholder="Pesquise um post"
            className="bg-transparent w-full outline-none border-0 text-stone-400 placeholder:text-stone-500"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <div className="mt-4">
          {displayPosts.length > 0 ? (
            displayPosts.map((post) => {
              return <ArticleCard key={post.slug} {...post} />;
            })
          ) : (
            <p>Nenhum post encontrado.</p>
          )}
        </div>
      </Section>
    </Container>
  );
};

export async function getStaticProps() {
  const sortByDate = (a: string, b: string) =>
    new Date(b).getTime() - new Date(a).getTime();

  return {
    props: {
      posts: allPosts
        .sort((a, b) => sortByDate(a.date, b.date))
        .map((post) => ({
          title: post.title,
          description: post.description,
          date: post.date,
          slug: post.slug,
          readingTime: post.readingTime,
        })),
    },
  };
}

export default Blog;
