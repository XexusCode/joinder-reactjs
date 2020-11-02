import { useSelector } from "react-redux";
import { RootState } from "../../../redux/rootReducer";

export const useUser = () => {
  return useSelector((state: RootState) => state.auth);
};
