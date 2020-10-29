import { types } from "../types/types";

const initialState = {
  checking: true,
  uid: null,
};

interface authActionTypes {
  type: string;
  payload: any;
}

export const authReducer = (state = initialState, action: authActionTypes) => {
  switch (action.type) {
    case types.authLogin:
      return {
        ...state,
        checking: false,
        ...action.payload,
      };
    case types.authLogout:
      return {
        state: {},
        checking: true,
      };

    default:
      return state;
  }
};
