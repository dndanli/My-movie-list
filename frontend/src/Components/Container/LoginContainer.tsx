import { Link, useNavigate } from "react-router-dom";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { validateInput } from "../../Helpers/formHelpers";

type ContainerProps = {
  className: string;
};

const Container = ({ className }: ContainerProps) => {
  let navigate = useNavigate();
  const [inputType, setInputType] = useState<string>("password");
  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
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
      <form
        className="form-container"
        onSubmit={handleSubmit((data) => {
          if (
            validateInput(data.username) === true &&
            validateInput(data.password) === true
          ) {
            axios
              .post("http://localhost:8000/user/login", {
                data: {
                  username: data?.username,
                  password: data?.password,
                },
              })
              .then((res) => {
                console.log(res.data.success);
                if (res.data.sucess === true) {
                  navigate("/profile");
                }
              })
              .catch((err) => {
                setError(err.response.data.message);
              });
          }
        })}
      >
        <label htmlFor="username">Username</label>

        <input
          {...register("username", { required: true })}
          name="username"
          className={error ? "text-input input-error" : "text-input"}
          type="text"
          placeholder="Username"
        />
        {error ? <p className="error-message">{error}</p> : null}
        <p>{errors.username?.message}</p>

        <label htmlFor={`${inputType}`} className="input-label">
          Password
        </label>
        <div className="password-input-wrapper">
          <input
            {...register("password", { required: true })}
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
        <p>{errors.username?.message}</p>

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
