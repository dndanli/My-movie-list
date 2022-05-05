import StyledContainer from "../../Components/Container/SignUpContainer.style";

type SignUpProps = {
  className: string;
};

const SignUp = ({ className }: SignUpProps) => {
  return <div className={className}>

    <StyledContainer className="sign-up-container"/>
    </div>;
};

export default SignUp;
