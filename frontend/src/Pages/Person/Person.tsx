type PersonProps = {
  className: string;
};

const Person = ({ className }: PersonProps) => {
  return <div className={className}></div>;
};

export default Person;
