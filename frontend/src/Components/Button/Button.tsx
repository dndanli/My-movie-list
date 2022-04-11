type ButtonProps = {
  className: string;
  text: string;
};

const Button = ({ className, text }: ButtonProps) => {
  return (
    <li className={className}>
      <p>{text}</p>
    </li>
  );
};
export default Button;
