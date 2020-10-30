import { ReduxAction } from "../../redux/ReduxAction";
import { ReduxActionType } from "../../redux/ReduxActionType";

const initialState = {
  checking: true,
  uid: null,
};

export const authReducer = (state = initialState, action: ReduxAction<any>) => {
  switch (action.type) {
    case ReduxActionType.AUTH_LOGIN:
      return {
        ...state,
        checking: false,
        ...action.payload,
      };
    case ReduxActionType.authLogout:
      return {
        state: {},
        checking: true,
      };

    default:
      return state;
  }
};
