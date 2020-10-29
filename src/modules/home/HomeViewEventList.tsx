import React from "react";
import { iEvents } from "../../interfaces/interfaces";
import { EventCard } from "../../components/joinder/event/EventCard";
import { Button } from "react-bootstrap";
import { startAddNewEvent } from "../../actions/event";
import { useDispatch } from "react-redux";

interface iHomeViewEventList {
  events: Array<iEvents>;
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
      {events.map((e: iEvents) => (
        <EventCard key={e.idevent} {...e} />
      ))}
      <Button
        className="buttonjoin"
        onClick={(e) => {
          dispatch(startAddNewEvent(events[0]));
          setModalShowJoin(true);
        }}
      >
        Unierse a evento
      </Button>

      <Button
        variant="secondary"
        className="buttonadd"
        onClick={(e) => {
          dispatch(startAddNewEvent(events[0]));
          setModalShowCreate(true);
        }}
      >
        Crear evento
      </Button>
    </div>
  );
};
