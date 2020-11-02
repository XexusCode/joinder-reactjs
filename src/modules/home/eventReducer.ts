import { EventObject } from "../../models/models";
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
    start_date: 0,
    end_date: 0,
    location: "",
    img: "",
    users: [],
  },
};

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
        events: state.events.map((event) =>
          event.idevent === action.payload.idevent ? action.payload : event
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
          (event) => event.idevent !== state.activeEvent.idevent
        ),
        activeEvent: {
          users: [],
        },
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
