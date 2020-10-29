import React from "react";
import { EventObject } from "../../interfaces/interfaces";
import { EventCard } from "../../components/joinder/event/EventCard";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

interface iHomeViewEventList {
  events: Array<EventObject>;
  setModalShowJoin: (arr: boolean) => void;
  setModalShowCreate: (arr: boolean) => void;
}

export const HomeViewEventList = ({
  events,
  setModalShowJoin,
  setModalShowCreate,
}: iHomeViewEventList) => {
  const dispatch = useDispatch();
  return (
    <div>
      {events.map((event: EventObject) => (
        <EventCard key={event.idevent} {...event} />
      ))}
      <Button
        className="buttonjoin"
        onClick={(e) => {
          setModalShowJoin(true);
        }}
      >
        Unierse a evento
      </Button>

      <Button
        variant="secondary"
        className="buttonadd"
        onClick={(e) => {
          setModalShowCreate(true);
        }}
      >
        Crear evento
      </Button>
    </div>
  );
};
