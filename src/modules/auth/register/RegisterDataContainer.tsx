import React, { useState } from "react";
import { RegisterFormView } from "./RegisterFormView";
import { useDispatch } from "react-redux";
import { login } from "../authActions";
import Swal from "sweetalert2";
import { apiCaller } from "../../../helpers/apiCaller";

export const RegisterDataContainer = (): JSX.Element => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    username: string,
    password: string,
    password2: string
  ) => {
    Swal.fire("Success", "respuesta.message" + "\n", "success");
    if (password === password2) {
      const respuesta = await apiCaller(
        `auth/signUp`,
        { username, password },
        "POST",
        false
      );
      if (respuesta.success) {
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
            login({
              uid: respuesta.data.uid,
              username: respuesta.data.username,
            })
          );
        } else {
          Swal.fire("ERROR", respuesta.message, "error");
        }

        e.preventDefault();
      }
    } else {
      Swal.fire("ERROR", "Las contraseñas no son iguales!", "error");
    }
  };

  return (
    <>
      <RegisterFormView
        username={username}
        handleInputName={setUsername}
        handleInputPassword={setPassword}
        handleInputPassword2={setPassword2}
        password={password}
        password2={password2}
        handleSubmit={handleSubmit}
      />
    </>
  );
};
