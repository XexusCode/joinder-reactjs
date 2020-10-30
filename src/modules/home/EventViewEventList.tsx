import React from "react";
import { EventObject } from "../../interfaces/interfaces";
import { EventCard } from "../../components/joinder/event/EventCard";
import { Button } from "react-bootstrap";

interface iHomeViewEventList {
  events: Array<EventObject>;
  setModalShowJoin: (arr: boolean) => void;
  setModalShowCreate: (arr: boolean) => void;
  handleActiveEvent: (event: EventObject) => void;
}

export const EventViewEventList = ({
  events,
  setModalShowJoin,
  setModalShowCreate,
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
      <Button
        className="buttonjoin"
        onClick={() => {
          setModalShowJoin(true);
        }}
      >
        Unierse a evento
      </Button>

      <Button
        variant="secondary"
        className="buttonadd"
        onClick={() => {
          setModalShowCreate(true);
        }}
      >
        Crear evento
      </Button>
    </div>
  );
};
