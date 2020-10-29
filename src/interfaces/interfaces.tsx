import { types } from "../types/types";

export interface iUsers {
  username: string;
  uid: string;
  color: string;
  rank: string;
}

export interface iEvents {
  idevent: string;
  name: string;
  owner: string;
  start_date: string;
  end_date: string;
  location: string;
  nmax: number;
  users: Array<iUsers>;
}
export interface iDispatch {
  dispatch: (action: iActions) => void;
}

export interface iActions {
  logout: () => void;
}

export interface dispatchAction {
  type: string;
}

export type DispatchType = (args: dispatchAction) => dispatchAction;
