import { Dispatch } from "react";
import { ReduxAction } from "../../redux/ReduxAction";
import { ReduxActionType } from "../../redux/ReduxActionType";
import { EventObject } from "../../models/models";

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
