import { useSelector } from "react-redux";
import { RootState } from "../../../redux/rootReducer";
import { UserEventObject } from "../../../models/models";

export const useUser = (): UserEventObject => {
  return useSelector((state: RootState) => state.auth);
};
