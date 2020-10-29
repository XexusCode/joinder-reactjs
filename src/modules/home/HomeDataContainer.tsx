import React, { useState } from "react";
import { NavbarHome } from "../../components/joinder/ui/NavbarHome";
import { iEvents } from "../../interfaces/interfaces";
import { EventCard } from "../../components/joinder/event/EventCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers/rootReducer";
import { startAddNewEvent } from "../../actions/event";
import { startLogout } from "../../actions/auth";
import { Button, Container } from "react-bootstrap";

import "./HomeStyle.scss";
import { JoinEventModal } from "../../components/modals/JoinEventModal";
import { CreateEventModal } from "../../components/modals/CreateEventModal";
import { HomeViewEventList } from "./HomeViewEventList";

export const HomeDataContainer: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const [modalShowCreate, setModalShowCreate] = useState(false);
  const [modalShowJoin, setModalShowJoin] = useState(false);
  const { events } = useSelector((state: RootState) => state.event);
  const { username } = useSelector((state: RootState) => state.auth);
  const handleLogout = () => {
    dispatch(startLogout());
  };
  return (
    <>
      <NavbarHome handleLogout={handleLogout} username={username} />

      <HomeViewEventList
        events={events}
        setModalShowCreate={setModalShowCreate}
        setModalShowJoin={setModalShowJoin}
      />

      <JoinEventModal
        show={modalShowJoin}
        onHide={() => setModalShowJoin(false)}
      />
      <CreateEventModal
        show={modalShowCreate}
        onHide={() => setModalShowCreate(false)}
      />
    </>
  );
};
