import React from "react";
import { EventObject } from "../../models/models";
import { EventCard } from "../../components/joinder/event/EventCard";

interface iHomeViewEventList {
  events: Array<EventObject>;
  handleActiveEvent: (event: EventObject) => void;
}

export const EventListView = ({
  events,

  handleActiveEvent,
}: iHomeViewEventList) => {
  return (
    <div>
      {events.map((event: EventObject) => (
        <EventCard
          handleActiveEvent={handleActiveEvent}
          key={event.idevent}
          event={{ ...event }}
        />
      ))}
    </div>
  );
};