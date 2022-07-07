import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Props {
  name: string;
  imageUrl: string | StaticImageData;
  description: string;
  link: string;
}

const WorkCard: React.FC<Props> = ({ name, imageUrl, description, link }) => {
  return (
    <Link href={link} passHref>
      <a>
        <article className="transition-all hover:brightness-90">
          <div className="aspect-video relative rounded-lg overflow-hidden border border-stone-700">
            <Image
              src={imageUrl}
              alt={name}
              width={384}
              height={216}
              placeholder="blur"
              loading="lazy"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8f5KhHgAG4AJJ/M2wwwAAAABJRU5ErkJggg=="
            />
          </div>

          <div className="mt-4 font-semibold text-xl text-neutral-200">
            {name}
          </div>
          <div className="mt-2">{description}</div>
        </article>
      </a>
    </Link>
  );
};

export default WorkCard;
