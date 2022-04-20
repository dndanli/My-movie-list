import { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

type SignUpProps = {
  className: string;
};

const SignUp = ({ className }: SignUpProps) => {
  const [inputType, setInputType] = useState<string>("password");
  const toggleInput = () => {
    if (inputType === "password") {
      setInputType("text");
    } else if (inputType === "text") {
      setInputType("password");
    }
  };
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
          <input
            type="text"
            name="email"
            placeholder="example@email.com"
            className="user-input"
          />
        </div>

        <div className="input-container">
          <label htmlFor={`${inputType}`} className="input-label">
            Password
          </label>
          <div className="password-input-wrapper">
            <input
              type={`${inputType}`}
              name="password"
              className="password-input"
            />
            <div onClick={toggleInput}>
              {inputType === "password" ? (
                <AiFillEyeInvisible className="view-icon" />
              ) : (
                <AiFillEye className="view-icon" />
              )}
            </div>
          </div>
        </div>
        <div className="submit-wrapper">
          <input
            type="submit"
            value={"Create an Account"}
            className="submit-btn"
            onClick={() => {
              if (inputType === "text") {
                toggleInput();
              }
            }}
          />
        </div>
      </form>
      <Link to={"/login"}>
        <h3 className="text-small">
          Already have an account? <span>Sign In</span>
        </h3>
      </Link>
    </div>
  );
};

export default SignUp;
