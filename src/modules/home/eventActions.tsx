import { fetchApi } from "../../helpers/fetch";
import { Dispatch } from "react";
import { ReduxAction } from "../../redux/ReduxAction";
import { ReduxActionType } from "../../redux/ReduxActionType";
import { EventObject } from "../../interfaces/interfaces";

export const startLoadEvents = (uid: string) => {
  return async (dispatch: Dispatch<ReduxAction<any>>) => {
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

export const startJoinNewEvent = (idEvent: string, uid: string) => {
  return async (dispatch: Dispatch<ReduxAction<any>>) => {
    const resp = await fetchApi("joinevent", "GET");
    const body = await resp.json(); // Usuario añadido a evento (idEvent)

    if (body.success) {
      const event: EventObject = { ...body.data };
      dispatch(addEvent(event));
    }
  };
};

export const startUpdateEvent = (event: EventObject) => {
  return async (dispatch: Dispatch<ReduxAction<any>>) => {
    const resp = await fetchApi("updateevent", "GET");
    const body = await resp.json();

    if (body.success) {
      dispatch(updateActiveEvent(body.data));
    }
  };
};

export const startLogoutEvents = () => {
  return async (dispatch: Dispatch<ReduxAction<any>>) => {
    dispatch(logoutEvents());
  };
};
export const loadEvents = (events: Array<EventObject>) => ({
  type: ReduxActionType.eventsLoad,
  payload: events,
});

export const setActiveEvent = (event: EventObject) => ({
  type: ReduxActionType.eventSetActive,
  payload: event,
});

export const updateActiveEvent = (event: EventObject) => ({
  type: ReduxActionType.eventUpdateActive,
  payload: event,
});

export const addEvent = (event: EventObject) => ({
  type: ReduxActionType.eventAddNew,
  payload: event,
});

export const deleteEvent = () => ({
  type: ReduxActionType.eventDelete,
});

export const logoutEvents = () => ({
  type: ReduxActionType.eventLogout,
});
