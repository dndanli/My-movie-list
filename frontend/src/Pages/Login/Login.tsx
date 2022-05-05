import StyledLoginContainer from "../../Components/Container/LoginContainer.style";


type LoginProps = {
  className: string;
};

const Login = ({ className }: LoginProps) => {
  return (
      <div className={className}>
      <StyledLoginContainer  className="login-container"/>
      </div>
  );
};

export default Login;
