import React from "react";

interface Props {
  href: string;
  children: React.ReactNode;
}

const SimpleLink: React.FC<Props> = ({ href, children }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="text-orange-400">
      {children}
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ml-1 inline h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </span>
    </a>
  );
};

export default SimpleLink;
