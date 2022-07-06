import React from "react";
import Link from "next/link";

import { type Post } from "contentlayer/generated";

const ArticleCard: React.FC<Post> = ({
  title,
  description,
  date,
  slug,
  readingTime,
}) => {
  const formatedDate = new Date(date).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const formatedReadingTime = readingTime.text.replace("read", "de leitura");

  return (
    <Link href={`/blog/${slug}`} passHref>
      <a>
        <article className="mb-6 hover:brightness-[105%] rounded-xl bg-stone-800/50 p-6">
          <h3 className="text-lg sm:text-xl font-bold text-neutral-300">
            {title}
          </h3>
          <p className="mt-2 text-sm sm:text-base leading-relaxed">
            {description}
          </p>
          <div className="mt-2 text-sm sm:text-base text-neutral-500">
            Publicado em {formatedDate} &bull; {formatedReadingTime}
          </div>
        </article>
      </a>
    </Link>
  );
};

export default ArticleCard;
