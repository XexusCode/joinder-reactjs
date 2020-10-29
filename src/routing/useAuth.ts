import {useSelector} from "react-redux";
import {RootState} from "../reducers/rootReducer";

export function useAuth() {
    const { uid } = useSelector((state: RootState) => state.auth);
    return {
        isAuthenticated: !!uid,
    }
}
