import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";

export function useAuth() {
  const { uid } = useSelector((state: RootState) => state.auth);
  return {
    isAuthenticated: !!uid,
  };
}
