import { useSelector } from "react-redux";
import { RootState } from "../../../redux/rootReducer";

export const useUid = () => {
  const { uid } = useSelector((state: RootState) => state.auth);
  return uid;
};
