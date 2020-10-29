import {ReduxActionType} from "./ReduxActionType";

export interface ReduxAction<T> {
    type: ReduxActionType,
    payload?: T,
}
