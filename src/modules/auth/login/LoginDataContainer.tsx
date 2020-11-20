import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { login } from "../authActions";
import { LoginViewForm } from "./LoginViewForm";
import { fetchApi, fetchConToken } from "../../../helpers/fetch";
import { UserAuth } from "../../../models/models";
import Swal from "sweetalert2";

export const LoginDataContainer: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  const [, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (username: string, password: string) => {
    fetchApi("auth/signIn", { username, password }, "POST")
      .then((response) =>
        response.json().then((responsejson) => {
          if (responsejson.success) {
            const user: UserAuth = {
              uid: responsejson.data.uid,
              username: responsejson.data.username,
            };
            Swal.fire("Success", responsejson.message + "\n", "success");
            localStorage.setItem("token", responsejson.data.accesstoken);
            dispatch(login(user));
          } else {
            Swal.fire("ERROR", responsejson.message[0] + "\n", "error");
          }
        })
      )
      .catch((err) => setError(err));
  };

  useEffect(() => {
    fetchConToken("auth/renew", "GET")
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.success) {
          localStorage.setItem("token", responseJson.data.accesstoken);
          dispatch(
            login({
              uid: responseJson.data.uid,
              username: responseJson.data.username,
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
    </div>
  );
};
