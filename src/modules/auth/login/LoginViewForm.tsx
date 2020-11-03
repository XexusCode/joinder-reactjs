import React from "react";
import "./AuthStyle.scss";

interface LoginViewFormProps {
  handleSubmit: (email: string, password: string) => void;
  email: string;
  handleInputEmail: (email: string) => void;
  handleInputPassword: (password: string) => void;
  password: string;
}

export const LoginViewForm = ({
  handleSubmit,
  email,
  handleInputEmail,
  handleInputPassword,
  password,
}: LoginViewFormProps) => {
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
              handleSubmit(email, password);
            }}
          >
            <input
              type="email"
              id="login"
              className="fadeIn second"
              name="login"
              value={email}
              onChange={(e) => handleInputEmail(e.target.value)}
              placeholder="Enter your email"
            />

            <input
              type="password"
              id="password"
              className="fadeIn third"
              name="login"
              value={password}
              onChange={(e) => handleInputPassword(e.target.value)}
              placeholder="Enter your password"
            />
            <input type="submit" className="fadeIn fourth" value="Log In" />
          </form>

          <div id="formFooter">
            <a className="underlineHover" href="#">
              ¿Aún no tienes cuenta? Regístrate
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
