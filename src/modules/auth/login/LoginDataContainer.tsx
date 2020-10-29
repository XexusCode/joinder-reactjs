import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { startLogin } from "../../../actions/auth";
import { LoginViewForm } from "./LoginViewForm";

export const LoginDataContainer: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "email":
        return setEmail(e.target.value);
      case "password":
        return setPassword(e.target.value);

      default:
        return null;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(startLogin(email, password));
  };

  return (
    <div>
      <LoginViewForm
        handleSubmit={handleSubmit}
        email={email}
        handleInputChange={handleInputChange}
        password={password}
      />
    </div>
  );
};
