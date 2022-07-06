interface Props {
  title: string;
  size?: "normal" | "small";
}

const Heading = ({ title, size = "normal" }: Props) => {
  const sizes = {
    normal: "text-2xl sm:text-3xl",
    small: "text-xl sm:text-2xl",
  };

  const classNameSize = sizes[size];

  return (
    <h2 className={`text-neutral-200 font-bold ${classNameSize}`}>{title}</h2>
  );
};

export default Heading;
