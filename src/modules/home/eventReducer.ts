import { EventObject } from "../../models/models";
import { ReduxAction } from "../../redux/ReduxAction";
import { ReduxActionType } from "../../redux/ReduxActionType";

interface InitialStateEventParams {
  events: Array<EventObject>;
  activeEvent: EventObject;
}

const initialState: InitialStateEventParams = {
  events: [],
  activeEvent: {
    id: "000",
    nmax: 0,
    title: "",
    startDate: "0",
    endDate: "0",
    location: "",
    img: "",
    userEvents: [],
    todos: [{ id: 0, text: "e" }],
    comments: [],
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
          event.id === action.payload.idevent ? action.payload : event
        ),
        activeEvent: action.payload,
      };

    case ReduxActionType.eventAddNew:
      return {
        ...state,
        events: [...state.events, action.payload],
      };

    case ReduxActionType.eventDelete:
      return {
        ...state,
        events: state.events.filter(
          (event) => event.id !== state.activeEvent.id
        ),
        activeEvent: {
          userEvents: [],
        },
      };

    case ReduxActionType.authLogout:
      return {
        events: [],
        activeEvent: {},
      };
    case ReduxActionType.addComment:
      return {
        ...state,
        activeEvent: {
          ...state.activeEvent,
          comments: [action.payload, ...state.activeEvent.comments],
        },
      };
    case ReduxActionType.addTodo:
      return {
        ...state,
        activeEvent: {
          ...state.activeEvent,
          todos: [...state.activeEvent.todos, action.payload],
        },
      };

    case ReduxActionType.deleteTodo:
      state.activeEvent.todos.pop();
      return {
        ...state,
        activeEvent: {
          ...state.activeEvent,
          todos: [...state.activeEvent.todos],
        },
      };
    default:
      return state;
  }
};
