import { Link } from "react-router-dom";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useState } from "react";

type ContainerProps = {
  className: string;
};

const Container = ({ className }: ContainerProps) => {
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
      <div className="wrapper">
        <h2>Log in</h2>
        <h3>Hey, welcome back.</h3>
      </div>
      <form className="form-container">
        <label htmlFor="email">Email</label>
        <input
          name="email"
          className="text-input"
          type="text"
          placeholder="Email"
        />

        <label htmlFor={`${inputType}`} className="input-label">
          Password
        </label>
        <div className="password-input-wrapper">
          <input
            type={`${inputType}`}
            name="password"
            className="password-input"
            placeholder="Password"
          />
          <div onClick={toggleInput}>
            {inputType === "password" ? (
              <HiEye className="view" />
            ) : (
              <HiEyeOff className="view" />
            )}
          </div>
        </div>
        <div className="wrapper right">
          <h4>
            <Link to="/recover">
              <span>Forgot password?</span>
            </Link>
          </h4>
        </div>
        <input
          type="submit"
          value="Sign in"
          onClick={() => {
            if (inputType === "text") {
              toggleInput();
            }
          }}
        />
      </form>

      <div className="wrapper">
        <h4>
          Need an account?{" "}
          <Link to="/signup">
            <span>Sign up</span>
          </Link>
        </h4>
      </div>
    </div>
  );
};

export default Container;
