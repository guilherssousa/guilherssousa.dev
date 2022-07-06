import React from "react";

interface Props {
  href: string;
  children: React.ReactNode;
}

const SimpleLink: React.FC<Props> = ({ href, children }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="text-orange-400">
      {children}
    </a>
  );
};

export default SimpleLink;
