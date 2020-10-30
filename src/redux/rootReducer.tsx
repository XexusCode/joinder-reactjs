import { combineReducers } from "redux";
import { authReducer } from "../modules/auth/authReducer";
import { eventReducer } from "../modules/home/eventReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  event: eventReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
