type ButtonProps = {
  className: string;
  text: string;
  countValue: number | undefined;
  color: string;
  clickHandler: any;
};

const Button = ({
  className,
  text,
  clickHandler,
  countValue,
  color,
}: ButtonProps) => {
  return (
    <li
      className={className}
      onClick={() => {
        clickHandler();
      }}
      style={{ backgroundColor: color }}
    >
      <p>{text}</p>
      <p className="count-value">{countValue}</p>
    </li>
  );
};
export default Button;
