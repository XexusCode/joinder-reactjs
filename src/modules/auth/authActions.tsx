import { UserObjects } from "../../interfaces/interfaces";
import { ReduxAction } from "../../redux/ReduxAction";
import { ReduxActionType } from "../../redux/ReduxActionType";

export const login = (user: UserObjects): ReduxAction<UserObjects> => ({
  type: ReduxActionType.AUTH_LOGIN,
  payload: user,
});

export const logout = (): ReduxAction<void> => ({
  type: ReduxActionType.authLogout,
});
