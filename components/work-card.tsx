import React from "react";
import Image from "next/image";

interface Props {
  name: string;
  imageUrl: string;
  description: string;
  link: string;
}

const WorkCard: React.FC<Props> = ({ name, imageUrl, description, link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <article className="transition-all hover:brightness-90">
        <div className="aspect-video relative rounded-lg overflow-hidden border border-stone-700">
          <Image src={imageUrl} alt={name} layout="fill" objectFit="cover" />
        </div>

        <div className="mt-4 font-semibold text-xl text-neutral-200">
          {name}
        </div>
        <div className="mt-2">{description}</div>
      </article>
    </a>
  );
};

export default WorkCard;
