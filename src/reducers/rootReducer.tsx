import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { eventReducer } from "./eventReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  event: eventReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
