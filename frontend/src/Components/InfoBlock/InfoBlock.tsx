type InfoBlockProps = {
  className: string;
  title: string;
  value: string;
};

const InfoBlock = ({ className, title, value }: InfoBlockProps) => {
  return (
    <div className={className}>
      <h2 className="title">{title}</h2>
      <h2 className="value">{value}</h2>
    </div>
  );
};

export default InfoBlock;
