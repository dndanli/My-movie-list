import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
type ButtonProps = {
  className: string;
  onClick: any;
};

export const PrevButton = ({ className, onClick }: ButtonProps) => {
  return (
    <div className={className} onClick={onClick}>
      <MdArrowBackIos />
    </div>
  );
};

export const NextButton = ({ className, onClick }: ButtonProps) => {
  return (
    <div className={className} onClick={onClick}>
      <MdArrowForwardIos />
    </div>
  );
};
