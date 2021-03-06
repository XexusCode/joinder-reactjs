import { UserAuth } from "../../models/models";
import { ReduxAction } from "../../redux/ReduxAction";
import { ReduxActionType } from "../../redux/ReduxActionType";

export const login = (user: UserAuth): ReduxAction<UserAuth> => ({
  type: ReduxActionType.AUTH_LOGIN,
  payload: user,
});

export const logout = (): ReduxAction<void> => ({
  type: ReduxActionType.authLogout,
});
