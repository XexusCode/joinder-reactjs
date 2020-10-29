import React, { useState } from "react";
import { RegisterFormView } from "./RegisterFormView";
import { startRegister } from "../../../actions/auth";
import { useDispatch } from "react-redux";

export const RegisterDataContainer = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const dispatch = useDispatch();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "username":
        return setUsername(e.target.value);
      case "email":
        return setEmail(e.target.value);
      case "password":
        return setPassword(e.target.value);
      case "password2":
        return setPassword2(e.target.value);

      default:
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password === password2) {
      dispatch(startRegister(username, email, password));
    } else {
    }
  };

  return (
    <>
      <RegisterFormView
        username={username}
        handleInputChange={handleInputChange}
        email={email}
        password={password}
        password2={password2}
        handleSubmit={handleSubmit}
      />
    </>
  );
};
