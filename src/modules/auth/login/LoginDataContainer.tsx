import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { login } from "../authActions";
import { LoginViewForm } from "./LoginViewForm";
import { fetchApi } from "../../../helpers/fetch";

export const LoginDataContainer: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (email: string, password: string) => {
    fetchApi("login", { email, password }, "GET")
      .then((response) =>
        response
          .json()
          .then((responsejson) => dispatch(login(responsejson.data)))
      )
      .catch((err) => setError(err));
  };

  return (
    <div>
      <LoginViewForm
        handleSubmit={handleSubmit}
        email={email}
        handleInputEmail={setEmail}
        handleInputPassword={setPassword}
        password={password}
      />
    </div>
  );
};
