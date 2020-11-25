import { EventObject, UserEventObject } from "../../../models/models";

export class Eventmapping {
  static async toEvent(
    title: string,
    location: string,
    nmax: number,
    startDate: string,
    endDate: string,
    img: string,
    userEvents: Array<UserEventObject>
  ): Promise<EventObject> {
    const event: EventObject = {
      title,
      location,
      nmax,
      startDate,
      endDate,
      img,
      userEvents,
      comments: [],
      todos: [],
    };

    return event;
  }
  static async toUserEvent(
    uid: string,
    username: string,
    rank: number,
    color: string
  ): Promise<UserEventObject> {
    const userEvent: UserEventObject = {
      uid,
      username,
      rank,
      color,
    };

    return userEvent;
  }
  static async toEditEvent(
    title: string,
    location: string,
    nmax: number,
    startDate: string,
    endDate: string,
    img: string,
    event: EventObject
  ) {
    const editadedEvent: EventObject = {
      title,
      location,
      nmax,
      startDate,
      endDate,
      img,
      description: event.description,
      userEvents: event.userEvents,
      todos: event.todos,
      comments: event.comments,
      id: event.id,
    };
    return editadedEvent;
  }
}
