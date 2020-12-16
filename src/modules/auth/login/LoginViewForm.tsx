import React from "react";
import "./AuthStyle.scss";
import { Link } from "react-router-dom";
import { Routes } from "../../../routing/routes";

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
}: LoginViewFormProps): JSX.Element => {
  return (
    <>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            <img
              src="https://i.gyazo.com/2c0032f42403c7a98928d6fdbea5bd71.png"
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
              data-testid="text-name"
              type="text"
              id="login"
              className="fadeIn second"
              name="login"
              value={email}
              onChange={(e) => handleInputEmail(e.target.value)}
              placeholder="Introduce tu nombre de usuario"
            />

            <input
              data-testid="text-password"
              type="password"
              id="password"
              className="fadeIn third"
              name="login"
              value={password}
              onChange={(e) => handleInputPassword(e.target.value)}
              placeholder="Introduce tu contraseña"
            />
            <input
              data-testid="button-submit"
              type="submit"
              className="fadeIn fourth"
              value="Log In"
            />
          </form>

          <div id="formFooter">
            <Link to={Routes.AUTH_REGISTER}>
              {" "}
              ¿Aún no tienes cuenta? Regístrate{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
