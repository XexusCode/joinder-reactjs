import { EventObject } from "../../interfaces/interfaces";
import { ReduxAction } from "../../redux/ReduxAction";
import { ReduxActionType } from "../../redux/ReduxActionType";

interface iInitialState {
  events: Array<EventObject>;
  activeEvent: EventObject;
}

const initialState: iInitialState = {
  events: [],
  activeEvent: {
    idevent: "000",
    nmax: 0,
    name: "",
    owner: "",
    start_date: "",
    end_date: "",
    location: "",
    users: [],
  },
};

interface eventActionTypes {
  type: string;
  payload: any;
}

export const eventReducer = (
  state = initialState,
  action: ReduxAction<any>
) => {
  switch (action.type) {
    case ReduxActionType.eventsLoad:
      return {
        ...state,
        events: action.payload,
      };

    case ReduxActionType.eventUpdateActive:
      return {
        ...state,
        events: state.events.map((e) =>
          e.idevent === action.payload.idevent ? action.payload : e
        ),
        activeEvent: action.payload,
      };

    case ReduxActionType.eventAddNew:
      return {
        ...state,
        events: [...state.events, action.payload],
      };

    case ReduxActionType.eventDelete:
      console.log(state.activeEvent.idevent);
      return {
        ...state,
        events: state.events.filter(
          (e) => e.idevent !== state.activeEvent.idevent
        ),
        activeEvent: {},
      };

    case ReduxActionType.authLogout:
      return {
        events: [],
        activeEvent: {},
      };

    default:
      return state;
  }
};
