import React, { useState } from "react";
import { RegisterFormView } from "./RegisterFormView";
import { login } from "../../../actions/auth";
import { useDispatch } from "react-redux";
import { fetchApi } from "../../../helpers/fetch";

export const RegisterDataContainer = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    username: string,
    email: string,
    password: string,
    password2: string
  ) => {
    e.preventDefault();

    if (password === password2) {
      fetchApi("register", { username, email, password }, "GET")
        .then((response) => response.json())
        .then((responsejson) => dispatch(login(responsejson.data)))
        .catch((err) => setError(err));
    } else {
      setError("Las contraseñas no son iguales");
    }
  };

  return (
    <>
      <RegisterFormView
        username={username}
        handleInputName={setUsername}
        handleInputEmail={setEmail}
        handleInputPassword={setPassword}
        handleInputPassword2={setPassword2}
        email={email}
        password={password}
        password2={password2}
        handleSubmit={handleSubmit}
      />
    </>
  );
};
