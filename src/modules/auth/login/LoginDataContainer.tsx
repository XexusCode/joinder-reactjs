import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { startLogin } from "../../../actions/auth";
import { LoginViewForm } from "./LoginViewForm";

export const LoginDataContainer: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (email: string, password: string) => {
    dispatch(startLogin(email, password));
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
