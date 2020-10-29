import { types } from "../types/types";
import { iEvents } from "../interfaces/interfaces";

interface iInitialState {
  events: Array<iEvents>;
  activeEvent: iEvents;
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
  action: eventActionTypes
) => {
  switch (action.type) {
    case types.eventsLoad:
      return {
        ...state,
        events: action.payload,
      };

    case types.eventUpdateActive:
      return {
        ...state,
        events: state.events.map((e) =>
          e.idevent === action.payload.idevent ? action.payload : e
        ),
        activeEvent: action.payload,
      };

    case types.eventAddNew:
      return {
        ...state,
        events: [...state.events, action.payload],
      };

    case types.eventDelete:
      console.log(state.activeEvent.idevent);
      return {
        ...state,
        events: state.events.filter(
          (e) => e.idevent !== state.activeEvent.idevent
        ),
        activeEvent: {},
      };

    case types.authLogout:
      return {
        events: [],
        activeEvent: {},
      };

    default:
      return state;
  }
};
