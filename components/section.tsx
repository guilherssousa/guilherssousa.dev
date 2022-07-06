import React from "react";

interface Props {
  children: React.ReactNode;
}

const Section: React.FC<Props> = ({ children }) => {
  return (
    <section className="mt-6 flex flex-col gap-y-4 leading-relaxed text-lg text-stone-400">
      {children}
    </section>
  );
};

export default Section;
