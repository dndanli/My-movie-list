import { useState } from "react";

type ButtonProps = {
  className: string;
  text: string;
  clickedStateValue: boolean;
  clickHandler: any;
};

const Button = ({
  className,
  text,
  clickHandler,
  clickedStateValue,
}: ButtonProps) => {
  const [clicked, setCicked] = useState(clickedStateValue);

  return (
    <li
      className={className}
      style={{
        background:
          clicked === false ? "rgba(219, 48, 86, 0.7)" : "rgba(219, 48, 86, 1)",
      }}
      onClick={() => {
        setCicked(!clicked);
        clickHandler();
      }}
    >
      <p>{text}</p>
    </li>
  );
};
export default Button;
