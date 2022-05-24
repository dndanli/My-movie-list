import { Link } from "react-router-dom";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { validateInput } from "../../Helpers/formHelpers";

type ContainerProps = {
  className: string;
};

const Container = ({ className }: ContainerProps) => {
  const [inputType, setInputType] = useState<string>("password");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

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
        <h2>Sign up</h2>
        <h3>Hey, enter your details to start using MVL.</h3>
      </div>
      <form
        className="form-container"
        onSubmit={handleSubmit((data) => {
          if (
            validateInput(data.username) === true &&
            validateInput(data.password) === true &&
            validateInput(data.email) === true
          ) {
            axios.defaults.withCredentials = true;
            axios
              .post(`http://localhost:8000/user/register`, {
                withCredentials: true,
                data: {
                  username: data?.username,
                  email: data?.email,
                  password: data?.password,
                },
              })
              .then((jwt: any) => {
                console.log(jwt);
              });
            console.log(data);
          } else {
            console.log("data invalid");
          }
        })}
      >
        <label htmlFor="username">Username</label>
        <input
          {...register("username", {
            required: true,
            minLength: {
              value: 3,
              message: "Mininum length is 3.",
            },
          })}
          name="username"
          className="text-input"
          type="text"
          placeholder="Username"
        />
        <p>{errors.username?.message}</p>

        <label htmlFor="email">Email</label>
        <input
          {...register("email", { required: true })}
          name="email"
          className="text-input"
          type="text"
          placeholder="Email"
        />
        <p>{errors.email?.message}</p>
        <label htmlFor={`${inputType}`} className="input-label">
          Password
        </label>
        <div className="password-input-wrapper">
          <input
            {...register("password", {
              required: true,
              minLength: {
                value: 8,
                message: "Mininum length is 8.",
              },
            })}
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
        <p>{errors.password?.message}</p>
        <input
          type="submit"
          value="Create account"
          onClick={() => {
            if (inputType === "text") {
              toggleInput();
            }
          }}
        />
      </form>

      <div className="wrapper">
        <h4>
          Already have an account?{" "}
          <Link to="/login">
            <span>Log in</span>
          </Link>
        </h4>
      </div>
    </div>
  );
};

export default Container;
