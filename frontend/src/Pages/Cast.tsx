type CastProps = {
  className: string;
  castData?: string[];
};

const Cast = ({ className }: CastProps) => {
  return <div className={className}></div>;
};

export default Cast;
