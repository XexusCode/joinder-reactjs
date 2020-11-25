import React from "react";

import { EventObject } from "../../../models/models";
import { EventCard } from "../../../components/joinder/event/EventCard";

interface HomeViewEventListParams {
  events: Array<EventObject>;
  handleActiveEvent: (event: EventObject) => void;
}

export const EventListView = ({
  events,
  handleActiveEvent,
}: HomeViewEventListParams): JSX.Element => {
  return (
    <div className=" container-fluid ">
      {events.map((event: EventObject) => (
        <EventCard
          handleActiveEvent={handleActiveEvent}
          key={event.id}
          event={event}
        />
      ))}
    </div>
  );
};
