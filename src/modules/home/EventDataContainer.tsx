import React, { useEffect, useState } from "react";
import { NavbarHome } from "../../components/joinder/ui/NavbarHome";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import Swal from "sweetalert2";
import "./EventStyle.scss";
import { JoinEventModal } from "../../components/modals/JoinEventModal";
import { CreateEventModal } from "../../components/modals/CreateEventModal";
import { EventViewEventList } from "./EventViewEventList";
import { logout } from "../auth/authActions";
import { EventObject } from "../../models/models";
import { fetchApi } from "../../helpers/fetch";
import { addEvent, loadEvents, updateActiveEvent } from "./eventActions";
import { imgUpload } from "../../helpers/imgUpload";
import { useDate } from "./hooks/useDate";
import { EventEmptyList } from "./EventEmptyList";

export const EventDataContainer: React.FC = () => {
  const dispatch = useDispatch();

  const [, setError] = useState("");
  const [modalShowCreate, setModalShowCreate] = useState(false);
  const [modalShowJoin, setModalShowJoin] = useState(false);
  const [img, setImg] = useState("http://placeimg.com/120/120/cats");
  const dates = useDate();
  const { events } = useSelector((state: RootState) => state.event);
  const { username } = useSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    Swal.fire("Sesion Cerrada", "Has cerrado sesion correctamente!", "success");
  };
  const handleActiveEvent = (event: EventObject) => {
    dispatch(updateActiveEvent(event));
  };

  const handleCreateEvent = (event: EventObject) => {
    fetchApi("addevent", "GET")
      .then((response) => response.json())
      .then((responseJson) => {
        dispatch(addEvent(responseJson.data));
        dispatch(
          addEvent(
            (event = {
              idevent: "qew123qwe",
              users: [],
              name: "qweqweqwe",
              nmax: 10,
              location: "qweqwe",
              end_date: "qweqw",
              owner: "jqew",
              start_date: "213",
            })
          )
        );
        dispatch(updateActiveEvent(responseJson.data));
        setModalShowCreate(false);
      })
      .catch((err) => setError(err));
  };
  const handleChangeImg = (e: any) => {
    imgUpload(e.target.files[0]).then((resp) => setImg(resp));
  };

  useEffect(() => {
    fetchApi("loadevents", "GET")
      .then((response) => response.json())
      .then((responseJson) => {
        dispatch(loadEvents(responseJson.data));
      })
      .catch((err) => setError(err));
  }, [dispatch]);

  return (
    <>
      <NavbarHome handleLogout={handleLogout} username={username} />
      {events.length === 0 ? (
        <EventEmptyList />
      ) : (
        <EventViewEventList
          handleActiveEvent={handleActiveEvent}
          events={events}
          setModalShowCreate={setModalShowCreate}
          setModalShowJoin={setModalShowJoin}
        />
      )}

      <JoinEventModal
        show={modalShowJoin}
        onHide={() => setModalShowJoin(false)}
      />
      <CreateEventModal
        handleChange={handleChangeImg}
        img={img}
        dates={dates}
        handleCreateEvent={handleCreateEvent}
        show={modalShowCreate}
        onHide={() => setModalShowCreate(false)}
      />
    </>
  );
};
