import { EventObject, UserEventObject } from "../../../models/models";

export class EventMapping {
  static async toEvent(
    title: string,
    location: string,
    nmax: number,
    startDate: string,
    endDate: string,
    img: string,
    passwordJoinEvent: string,
    userEvents: Array<UserEventObject>
  ): Promise<EventObject> {
    return {
      title,
      location,
      nmax,
      startDate,
      endDate,
      img,
      password: passwordJoinEvent,
      userEvents,
      comments: [],
      todos: [],
    };
  }
  static async toUserEvent(
    uid: string,
    username: string,
    rank: number,
    color: string
  ): Promise<UserEventObject> {
    return {
      uid,
      username,
      rank,
      color,
    };
  }
  static async toEditEvent(
    title: string,
    location: string,
    nmax: number,
    startDate: string,
    endDate: string,
    img: string,
    event: EventObject
  ): Promise<EventObject> {
    return {
      title,
      location,
      nmax,
      startDate,
      endDate,
      img,
      password: event.password,
      description: event.description,
      userEvents: event.userEvents,
      todos: event.todos,
      comments: event.comments,
      id: event.id,
    };
  }
}
