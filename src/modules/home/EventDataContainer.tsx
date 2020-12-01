import React, { useEffect, useState } from "react";
import { NavbarHome } from "../../components/joinder/ui/NavbarHome";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import Swal from "sweetalert2";
import "./EventStyle.scss";
import { JoinEventModalView } from "../../components/modals/JoinEventModalView";
import { CreateEventModalView } from "../../components/modals/CreateEventModalView";
import { EventListView } from "./views/EventListView";
import { logout } from "../auth/authActions";
import { EventObject, UserEventObject } from "../../models/models";
import { addEvent, loadEvents, updateActiveEvent } from "./eventActions";
import { imgUpload } from "../../helpers/imgUpload";
import { useDate } from "./hooks/useDate";
import { EventEmptyList } from "./views/EventEmptyList";
import { EventButtonsView } from "./views/EventButtonsView";
import { useUser } from "../activeEvent/hooks/useUser";
import { apiCaller } from "../../helpers/apiCaller";
import { EventMapping } from "./mapping/EventMapping";
import { Helmet } from "react-helmet";

export const EventDataContainer: React.FC = () => {
  const dispatch = useDispatch();
  const [modalShowCreate, setModalShowCreate] = useState(false);
  const [modalShowJoin, setModalShowJoin] = useState(false);
  const [img, setImg] = useState(
    "https://res.cloudinary.com/dq9ut69am/image/upload/v1604313583/tpaxsiaivnuh3f390u3e.png"
  );
  const [locationValue, setValue] = useState(null);
  const [eventName, setEventName] = useState("");
  const [nmax, setNmax] = useState("1");
  const userEvent: UserEventObject = useUser();
  const dates = useDate();
  const { events } = useSelector((state: RootState) => state.event);
  const { username } = useSelector((state: RootState) => state.auth);
  const [idJoinEvent, setIdJoinEvent] = useState(0);
  const [passwordJoinEvent, setPasswordJoinEvent] = useState("");

  const handleLogout = () => {
    localStorage.clear();
    dispatch(logout());
    Swal.fire("Sesion Cerrada", "Has cerrado sesion correctamente!", "success");
  };
  const handleActiveEvent = (event: EventObject) => {
    dispatch(updateActiveEvent(event));
  };

  const handleSubmitCreateEvent = async () => {
    if (locationValue == null) {
      Swal.fire("ERROR", "La localización debe ser un lugar valido!", "error");
    } else {
      const newUserEvent = await EventMapping.toUserEvent(
        userEvent.uid,
        userEvent.username,
        userEvent.rank,
        userEvent.color
      );

      const { label }: any = locationValue;
      const newEvent = await EventMapping.toEvent(
        eventName,
        label,
        parseInt(nmax),
        dates.dateStart.getTime().toString(),
        dates.dateEnd.getTime().toString(),
        img,
        passwordJoinEvent,
        [newUserEvent]
      );

      const respuesta = await apiCaller(`events/`, newEvent, "POST", true);
      if (respuesta.success) {
        dispatch(addEvent(respuesta.data));
        Swal.fire("Success", respuesta.message, "success");
      }
    }
  };

  const handleChangeImg = (e: any) => {
    imgUpload(e.target.files[0]).then((resp) => setImg(resp));
  };

  const handleJoinEvent = async () => {
    if (!isNaN(idJoinEvent)) {
      const respuesta = await apiCaller(
        `events/${idJoinEvent}/userevent`,
        { password: passwordJoinEvent },
        "POST",
        true
      );
      if (respuesta.success) {
        dispatch(addEvent(respuesta.data));
        Swal.fire("Sucess", respuesta.message, "success");
      }
    }
  };

  useEffect(() => {
    apiCaller(`events`, {}, "GET", true).then((respuesta) => {
      if (respuesta.success) {
        dispatch(loadEvents(respuesta.data));
      }
    });
  }, [dispatch]);

  return (
    <div role="main">
      <NavbarHome handleLogout={handleLogout} username={username} />
      {events.length === 0 ? (
        <EventEmptyList />
      ) : (
        <EventListView handleActiveEvent={handleActiveEvent} events={events} />
      )}
      <EventButtonsView
        setModalShowCreate={setModalShowCreate}
        setModalShowJoin={setModalShowJoin}
      />
      <JoinEventModalView
        handleJoinEvent={handleJoinEvent}
        setIdJoinEvent={setIdJoinEvent}
        setPasswordJoinEvent={setPasswordJoinEvent}
        show={modalShowJoin}
        onHide={() => setModalShowJoin(false)}
      />
      <CreateEventModalView
        handleSubmitCreateEvent={handleSubmitCreateEvent}
        handleChange={handleChangeImg}
        img={img}
        dates={dates}
        show={modalShowCreate}
        onHide={() => setModalShowCreate(false)}
        eventName={eventName}
        setEventName={setEventName}
        setLocationValue={setValue}
        value={locationValue}
        nmax={nmax}
        setNmax={setNmax}
      />

      <Helmet>
        <meta charSet="utf-8" />
        <title>{username} | Joinder</title>
        <meta name="description" content="Home del usuario" />
      </Helmet>
    </div>
  );
};
