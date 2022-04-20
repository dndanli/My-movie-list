import {Link} from "react-router-dom";

type SignUpProps = {
  className: string;
};
const SignUp = ({ className }: SignUpProps) => {
  return (
    <div className={className}>
      <h1 className="header">Sign Up</h1>

      <form className="form-container">
        <div className="input-container">
          <label htmlFor="username" className="input-label">
            Username
          </label>
          <input type="text" name="username" className="user-input" />
        </div>

        <div className="input-container">
          <label htmlFor="email" className="input-label">
            Email
          </label>
          <input type="text" name="email" placeholder="example@email.com" className="user-input" />
        </div>

        <div className="input-container">
          <label htmlFor="password" className="input-label">
            Password
          </label>
          <input type="password" name="password" className="user-input" />
        </div>
        <div className="submit-wrapper">
          <input type="submit" value={"Create an Account"} className="submit-btn" />
        </div>
      </form>
      <Link to={"/login"}>
        <h3 className="text-small">Already have an account? <span>Sign In</span></h3>
      </Link>
    </div>
  );
};

export default SignUp;
