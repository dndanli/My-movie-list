import { useNavigate, useSearchParams } from "react-router-dom";

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
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const clickHandlerRedirect = () => {
    if(searchParams.get("query")!==null){
      navigate(`/discover?query=${searchParams.get("query")}`);
    }
    return;
  };
  return (
    <li
      className={className}
      onClick={() => {
        clickHandler();
        clickHandlerRedirect();
      }}
      style={{ backgroundColor: color }}
    >
      <p>{text}</p>
      <p className="count-value">{countValue}</p>
    </li>
  );
};
export default Button;
