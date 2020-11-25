import { ReduxActionType } from "../../redux/ReduxActionType";
import { CommentObject, EventObject, TodoObject } from "../../models/models";

export const loadEvents = (
  events: Array<EventObject>
): { type: ReduxActionType.eventsLoad; payload: Array<EventObject> } => ({
  type: ReduxActionType.eventsLoad,
  payload: events,
});

export const setActiveEvent = (
  event: EventObject
): { type: ReduxActionType.eventSetActive; payload: EventObject } => ({
  type: ReduxActionType.eventSetActive,
  payload: event,
});

export const updateActiveEvent = (
  event: EventObject
): { type: ReduxActionType.eventUpdateActive; payload: EventObject } => ({
  type: ReduxActionType.eventUpdateActive,
  payload: event,
});

export const addEvent = (
  event: EventObject
): { type: ReduxActionType.eventAddNew; payload: EventObject } => ({
  type: ReduxActionType.eventAddNew,
  payload: event,
});

export const deleteEvent = (): { type: ReduxActionType.eventDelete } => ({
  type: ReduxActionType.eventDelete,
});

export const logoutEvents = (): { type: ReduxActionType.eventLogout } => ({
  type: ReduxActionType.eventLogout,
});

export const addComment = (
  comment: CommentObject
): { type: ReduxActionType.addComment; payload: CommentObject } => ({
  type: ReduxActionType.addComment,
  payload: comment,
});

export const addTodo = (
  todo: TodoObject
): { type: ReduxActionType.addTodo; payload: TodoObject } => ({
  type: ReduxActionType.addTodo,
  payload: todo,
});

export const deleteTodo = (): { type: ReduxActionType.deleteTodo } => ({
  type: ReduxActionType.deleteTodo,
});

export const deleteUser = (
  username: string
): { type: ReduxActionType.deleteUser; payload: string } => ({
  type: ReduxActionType.deleteUser,
  payload: username,
});

export const upgradeUser = (): { type: ReduxActionType.upgradeUser } => ({
  type: ReduxActionType.upgradeUser,
});
