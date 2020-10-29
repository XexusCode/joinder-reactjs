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

const user: iUsers = {
  username: "",
  color: "",
  rank: "",
  uid: "",
};

const event: iEvents = {
  nmax: 10,
  end_date: "12-12-12",
  location: "Transilvania",
  name: "Evento Aleatorio",
  owner: "234",
  start_date: "11-12-15",
  users: [user],
  idevent: "123",
};
export const startLogin = (email: string, password: string) => {
  return async (dispatch: any) => {
    const resp = await fetchApi("login", { email, password }, "GET");
    const body = await resp.json();
    localStorage.setItem("token", body.data);
    dispatch(login({ uid: "123", username: "Jesus", token: body.data }));
    dispatch(startLoadEvents("221"));
    dispatch(startAddNewEvent(event));
    dispatch(startUpdateEvent(event));
  };
};
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

export const startLogout = () => {
  return async (dispatch: any) => {
    dispatch(logout());
    dispatch(startLogoutEvents());
  };
};

const login = (user: any) => ({
  type: types.authLogin,
  payload: user,
});

export const logout = () => ({
  type: types.authLogout,
});
