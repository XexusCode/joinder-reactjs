import React, { useState } from "react";
import { RegisterFormView } from "./RegisterFormView";
import { useDispatch } from "react-redux";
import { fetchApi } from "../../../helpers/fetch";
import { login } from "../authActions";
import Swal from "sweetalert2";

export const RegisterDataContainer = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [, setError] = useState("");

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    username: string,
    password: string,
    password2: string
  ) => {
    if (password === password2) {
      fetchApi("auth/signUp", { username, password }, "POST")
        .then((response) =>
          response.json().then((responsejson) => {
            if (responsejson.success) {
              Swal.fire("Success", responsejson.message + " ", "success");
              fetchApi("auth/signIn", { username, password }, "POST").then(
                (response) =>
                  response.json().then((responsejson) => {
                    if (responsejson.success) {
                      localStorage.setItem(
                        "token",
                        responsejson.data.accesstoken
                      );
                      dispatch(
                        login({
                          uid: responsejson.data.uid,
                          username: responsejson.data.username,
                        })
                      );
                    }
                  })
              );
            } else {
              Swal.fire("Error", responsejson.message[0] + "\n", "error");
            }
          })
        )
        .catch((err) => setError(err));
    } else {
      Swal.fire("Error", "Las contraseñas deben ser iguales!", "error");
    }
    e.preventDefault();
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
