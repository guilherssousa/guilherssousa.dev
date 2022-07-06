import { defineDocumentType, makeSource } from "contentlayer/source-files";
import readingTime from "reading-time";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "./posts/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "Título do Post",
      required: true,
    },
    description: {
      type: "string",
      description: "Descrição do Post",
      required: true,
    },
    date: {
      type: "date",
      description: "Data do Post",
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) =>
        post._raw.sourceFileName
          // hello-world.mdx => hello-world
          .replace(/\.mdx$/, ""),
    },
    readingTime: {
      type: "json",
      resolve: (post) => readingTime(post.body.raw),
    },
  },
}));

export const Work = defineDocumentType(() => ({
  name: "Work",
  filePathPattern: "./works/**/*.mdx",
  contentType: "mdx",
  fields: {
    name: {
      type: "string",
      description: "Nome do Trabalho",
      required: true,
    },
    description: {
      type: "string",
      description: "Descrição do Trabalho",
      required: true,
    },
    imageUrl: {
      type: "string",
      description: "URL da Imagem do trabalho",
      required: true,
    },
    link: {
      type: "string",
      description: "URL do trabalho",
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) =>
        post._raw.sourceFileName
          // hello-world.mdx => hello-world
          .replace(/\.mdx$/, ""),
    },
    readingTime: {
      type: "json",
      resolve: (post) => readingTime(post.body.raw),
    },
  },
}));

export default makeSource({
  contentDirPath: "data",
  documentTypes: [Post, Work],
});
