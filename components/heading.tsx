interface Props {
  title: string;
}

const Heading = ({ title }: Props) => {
  return <h2 className="text-white text-2xl sm:text-3xl font-bold">{title}</h2>;
};

export default Heading;
