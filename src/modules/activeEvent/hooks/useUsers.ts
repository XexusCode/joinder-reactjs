import { useSelector } from "react-redux";
import { RootState } from "../../../redux/rootReducer";

export const useUsers = () => {
  const { activeEvent } = useSelector((state: RootState) => state.event);
  const { users } = activeEvent;
  return users;
};
