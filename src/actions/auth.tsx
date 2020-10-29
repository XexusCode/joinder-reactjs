import { types } from "../types/types";
import { fetchApi } from "../helpers/fetch";
import {
  startAddNewEvent,
  startLoadEvents,
  startLogoutEvents,
  startUpdateEvent,
} from "./event";
import { dispatchAction, iEvents, iUsers } from "../interfaces/interfaces";
import { Dispatch } from "react";

export const startRegister = (
  username: string,
  email: string,
  password: string
) => {
  return async (dispatch: Dispatch<dispatchAction>) => {
    const resp = await fetchApi("register", { email, password }, "GET");
    const body = await resp.json();

    if (body.success) {
      localStorage.setItem("token", body.data);
      dispatch(login({ uid: "1234", username: "Jesus2" }));
    }
  };
};

export const login = (user: any) => ({
  type: types.authLogin,
  payload: user,
});

export const logout = () => ({
  type: types.authLogout,
});
