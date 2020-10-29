import {fetchApi} from "../helpers/fetch";
import {User} from "../interfaces/interfaces";
import {Dispatch} from "react";
import {ReduxAction} from "../redux/ReduxAction";
import {ReduxActionType} from "../redux/ReduxActionType";

export const startRegister = (
  username: string,
  email: string,
  password: string
) => {
  return async (dispatch: Dispatch<ReduxAction<any>>) => {
    const resp = await fetchApi("register", { email, password }, "GET");
    const body = await resp.json();

    if (body.success) {
      localStorage.setItem("token", body.data);
      dispatch(login({ uid: "1234", username: "Jesus2" } as User));
    }
  };
};

export const login = (user: User): ReduxAction<User> => ({
  type: ReduxActionType.AUTH_LOGIN,
  payload: user,
});

export const logout = (): ReduxAction<void> => ({
  type: ReduxActionType.authLogout,
});
