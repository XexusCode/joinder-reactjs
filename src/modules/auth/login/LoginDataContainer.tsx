import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { login } from "../../../actions/auth";
import { LoginViewForm } from "./LoginViewForm";
import { fetchApi } from "../../../helpers/fetch";

export const LoginDataContainer: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (email: string, password: string) => {
    fetchApi("login", { email, password }, "GET")
      .then((response) => response.json())
      .then((responseJson) => dispatch(login(responseJson.data)))
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
