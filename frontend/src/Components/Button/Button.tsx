import { useState } from "react";

type ButtonProps = {
  className: string;
  text: string;
};

const Button = ({ className, text }: ButtonProps) => {
  const [clicked, setCicked] = useState(false);

  return (
    <li
      className={className}
      style={{
        background:
          clicked === false ? "rgba(219, 48, 86, 0.7)" : "rgba(219, 48, 86, 1)",
      }}
      onClick={() => {
        setCicked(!clicked);
      }}
    >
      <p>{text}</p>
    </li>
  );
};
export default Button;
