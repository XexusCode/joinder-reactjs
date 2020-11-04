import "../login/AuthStyle.scss";
import React from "react";

interface RegisterParams {
  username: string;
  handleInputName: (username: string) => void;
  handleInputPassword: (password: string) => void;
  handleInputPassword2: (password2: string) => void;
  handleInputEmail: (email: string) => void;
  email: string;
  password: string;
  password2: string;
  handleSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    username: string,
    email: string,
    password: string,
    password2: string
  ) => void;
}

export const RegisterFormView = ({
  username,
  email,
  password,
  password2,
  handleSubmit,
  handleInputEmail,
  handleInputName,
  handleInputPassword,
  handleInputPassword2,
}: RegisterParams) => {
  return (
    <>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            <img
              src="https://i.pinimg.com/originals/46/bf/f2/46bff2a47eea2421c50e52f1200266d5.png"
              id="icon"
              alt="User Icon"
            />
            <h1>Joinder</h1>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(e, username, email, password, password2);
            }}
          >
            <input
              type="text"
              id="name"
              className="fadeIn second"
              name="login"
              value={username}
              onChange={(e) => {
                handleInputName(e.target.value);
              }}
              placeholder="Enter your Username"
            />

            <input
              type="email"
              id="login"
              className="fadeIn second"
              name="login"
              value={email}
              onChange={(e) => {
                handleInputEmail(e.target.value);
              }}
              placeholder="Enter your Email"
            />

            <input
              type="password"
              id="password"
              className="fadeIn third"
              name="login"
              value={password}
              onChange={(e) => {
                handleInputPassword(e.target.value);
              }}
              placeholder="Password"
            />

            <input
              type="password"
              id="password2"
              className="fadeIn third"
              name="login"
              value={password2}
              onChange={(e) => {
                handleInputPassword2(e.target.value);
              }}
              placeholder="Repeat Password"
            />
            <input type="submit" className="fadeIn fourth" value="Register" />
          </form>
        </div>
      </div>
    </>
  );
};
