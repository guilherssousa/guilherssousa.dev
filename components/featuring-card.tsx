import React from "react";

interface Props {
  title: string;
  description: string;
  date: string;
  href: string;
}

const FeaturingCard: React.FC<Props> = ({ title, description, date, href }) => {
  return (
    <a
      className="mt-6 flex w-full cursor-pointer items-start justify-between gap-x-6 rounded-xl px-8 py-6 ring-4 ring-orange-400 transition-transform hover:transform hover:scale-[101%] hover:ring-orange-500"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-stone-300">{description}</p>

        <div className="mt-2 flex gap-x-4 items-baseline">
          <div className="text-stone-400">{date}</div>
          <span className="font-bold text-orange-400">
            Ler no Medium &rarr;
          </span>
        </div>
      </div>
    </a>
  );
};

export default FeaturingCard;
