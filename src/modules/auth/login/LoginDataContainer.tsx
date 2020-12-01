import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { login } from "../authActions";
import { LoginViewForm } from "./LoginViewForm";
import Swal from "sweetalert2";
import { apiCaller } from "../../../helpers/apiCaller";
import { Helmet } from "react-helmet";

export const LoginDataContainer: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (username: string, password: string) => {
    const respuesta = await apiCaller(
      `auth/signIn`,
      { username, password },
      "POST",
      false
    );
    if (respuesta.success) {
      Swal.fire("Success", respuesta.message + "\n", "success");
      localStorage.setItem("token", respuesta.data.accesstoken);
      dispatch(
        login({ uid: respuesta.data.uid, username: respuesta.data.username })
      );
    }
  };

  useEffect(() => {
    apiCaller("auth/renew", {}, "GET", true).then((response) => {
      if (response.success) {
        localStorage.setItem("token", response.data.accesstoken);
        dispatch(
          login({
            uid: response.data.uid,
            username: response.data.username,
          })
        );
      }
    });
  }, [dispatch]);

  return (
    <div>
      <LoginViewForm
        handleSubmit={handleSubmit}
        email={username}
        handleInputEmail={setUsername}
        handleInputPassword={setPassword}
        password={password}
      />

      <Helmet>
        <meta charSet="utf-8" />
        <title>Login | Joinder</title>
        <meta name="description" content="Login del usuario " />
      </Helmet>
    </div>
  );
};
