import React, { useState } from "react";
import { NavbarHome } from "../../components/joinder/ui/NavbarHome";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers/rootReducer";
import Swal from "sweetalert2";
import "./HomeStyle.scss";
import { JoinEventModal } from "../../components/modals/JoinEventModal";
import { CreateEventModal } from "../../components/modals/CreateEventModal";
import { HomeViewEventList } from "./HomeViewEventList";
import { logout } from "../../actions/auth";
import { EventObject } from "../../interfaces/interfaces";
import { fetchApi } from "../../helpers/fetch";
import { addEvent, updateActiveEvent } from "../../actions/event";

export const HomeDataContainer: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const [modalShowCreate, setModalShowCreate] = useState(false);
  const [modalShowJoin, setModalShowJoin] = useState(false);
  const { events } = useSelector((state: RootState) => state.event);
  const { username } = useSelector((state: RootState) => state.auth);
  const handleLogout = () => {
    dispatch(logout());
    Swal.fire("Sesion Cerrada", "Has cerrado sesion correctamente!", "success");
  };

  const handleCreateEvent = async (event: EventObject) => {
    const resp = await fetchApi("addevent", "GET");
    const body = await resp.json();

    if (body.success) {
      dispatch(addEvent(body.data));
      dispatch(updateActiveEvent(body.data));
    }
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
        handleCreateEvent={handleCreateEvent}
        show={modalShowCreate}
        onHide={() => setModalShowCreate(false)}
      />
    </>
  );
};
