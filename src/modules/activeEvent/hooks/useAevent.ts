import { useSelector } from "react-redux";
import { RootState } from "../../../redux/rootReducer";

export const useAevent = () => {
  const { activeEvent } = useSelector((state: RootState) => state.event);

  return activeEvent;
};
