import { Link } from "react-router-dom";

type LoginProps = {
  className: string;
};

const Login = ({ className }: LoginProps) => {
  return (
    <div className={className}>
      <h1 className="header">Sign In</h1>
      <form className="form-container">
        <div className="input-container">
          <label htmlFor="username" className="input-label">
            Username
          </label>
          <input
            type="text"
            name="username"
            className="user-input"
            placeholder="username"
          />
        </div>

        <div className="input-container">
          <label htmlFor="password" className="input-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="user-input"
            placeholder="password"
          />
        </div>

        <div className="text-wrapper-right">
          <Link to={"/recover-password"}>
            <h3 className="text-small">
              <span>Recover password</span>
            </h3>
          </Link>
        </div>

        <div className="submit-wrapper">
          <input type="submit" value={"Login"} className="submit-btn" />
        </div>

      </form>

      <div className="text-wrapper-center">
        <Link to={"/signup"}>
          <h3 className="text-small">
            Don't have an Account? <span>Sign up</span>
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default Login;
