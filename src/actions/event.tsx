import { fetchApi } from "../helpers/fetch";
import { types } from "../types/types";
import { dispatchAction, iEvents } from "../interfaces/interfaces";
import { Dispatch } from "react";

export const startLoadEvents = (uid: string) => {
  return async (dispatch: Dispatch<dispatchAction>) => {
    const resp = await fetchApi("loadevents", "GET");
    const body = await resp.json();
    if (body.success) {
      dispatch(loadEvents(body.data));
    }
  };
};

// export const startAddUserEvent = (uid: string, idEvent: string) => {
//   return async (dispatch: any) => {
//     const resp = await fetchApi("adduser", "GET");
//     const body = await resp.json();
//
//     if (body.success) {
//       dispatch(updateActiveEvent(body.data));
//     }
//   };
// };

export const startAddNewEvent = (event: iEvents) => {
  return async (dispatch: Dispatch<dispatchAction>) => {
    const resp = await fetchApi("addevent", "GET");
    const body = await resp.json();

    if (body.success) {
      dispatch(addEvent(body.data));
      dispatch(updateActiveEvent(body.data));
    }
  };
};

export const startDeleteEvent = () => {
  return async (dispatch: Dispatch<dispatchAction>) => {
    const resp = await fetchApi("deleteevent", "GET");
    const body = await resp.json();
    if (body.success) {
      dispatch(deleteEvent());
    }
  };
};

export const startJoinNewEvent = (idEvent: string, uid: string) => {
  return async (dispatch: Dispatch<dispatchAction>) => {
    const resp = await fetchApi("joinevent", "GET");
    const body = await resp.json(); // Usuario añadido a evento (idEvent)

    if (body.success) {
      const event: iEvents = { ...body.data };
      dispatch(addEvent(event));
    }
  };
};

export const startUpdateEvent = (event: iEvents) => {
  return async (dispatch: Dispatch<dispatchAction>) => {
    const resp = await fetchApi("updateevent", "GET");
    const body = await resp.json();

    if (body.success) {
      dispatch(updateActiveEvent(body.data));
    }
  };
};

export const startLogoutEvents = () => {
  return async (dispatch: Dispatch<dispatchAction>) => {
    dispatch(logoutEvents());
  };
};
export const loadEvents = (events: Array<iEvents>) => ({
  type: types.eventsLoad,
  payload: events,
});

export const setActiveEvent = (event: iEvents) => ({
  type: types.eventSetActive,
  payload: event,
});

export const updateActiveEvent = (event: iEvents) => ({
  type: types.eventUpdateActive,
  payload: event,
});

export const addEvent = (event: iEvents) => ({
  type: types.eventAddNew,
  payload: event,
});

export const deleteEvent = () => ({
  type: types.eventDelete,
});

export const logoutEvents = () => ({
  type: types.eventLogout,
});
