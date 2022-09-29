/* eslint-disable @next/next/no-img-element */
import React from "react";

interface Props {
  src: string;
  alt: string;
}

const Image = ({ alt, src }: Props) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: "-webkit-fill-available",
      }}
      loading="lazy"
    />
  );
};

export default Image;
