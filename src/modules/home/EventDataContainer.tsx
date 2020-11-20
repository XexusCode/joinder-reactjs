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
import { fetchConToken } from "../../helpers/fetch";
import { addEvent, loadEvents, updateActiveEvent } from "./eventActions";
import { imgUpload } from "../../helpers/imgUpload";
import { useDate } from "./hooks/useDate";
import { EventEmptyList } from "./views/EventEmptyList";
import { EventButtonsView } from "./views/EventButtonsView";
import { useUser } from "../activeEvent/hooks/useUser";
import { Eventmapping } from "./mapping/eventmapping";

export const EventDataContainer: React.FC = () => {
  const dispatch = useDispatch();
  const [, setError] = useState("");
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
      const newUserEvent = await Eventmapping.toUserEvent(
        userEvent.uid,
        userEvent.username,
        userEvent.rank,
        userEvent.color
      );

      const { label }: any = locationValue;
      const newEvent = await Eventmapping.toEvent(
        eventName,
        label,
        parseInt(nmax),
        dates.dateStart.getTime().toString(),
        dates.dateEnd.getTime().toString(),
        img,
        [newUserEvent]
      );
      fetchConToken("events", newEvent, "POST")
        .then((response) => response.json())
        .then((responseJson) => {
          {
            if (responseJson.success) {
              Swal.fire("Sucess", responseJson.message, "success");
              dispatch(addEvent(responseJson.data));
            } else {
              Swal.fire("ERROR", responseJson.message, "error");
            }
          }
        })
        .catch((err) => setError(err));
    }
  };

  const handleChangeImg = (e: any) => {
    imgUpload(e.target.files[0]).then((resp) => setImg(resp));
  };

  const handleJoinEvent = () => {
    if (!isNaN(idJoinEvent)) {
      fetchConToken(`events/${idJoinEvent}/userevent`, {}, "POST")
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.success) {
            Swal.fire("Sucess", responseJson.message, "success");
            dispatch(addEvent(responseJson.data));
          } else {
            Swal.fire("ERROR", responseJson.message, "error");
          }
        });
    }
  };

  useEffect(() => {
    console.log("recargado");
    fetchConToken("events", "GET")
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
        <EventListView handleActiveEvent={handleActiveEvent} events={events} />
      )}
      <EventButtonsView
        setModalShowCreate={setModalShowCreate}
        setModalShowJoin={setModalShowJoin}
      />
      <JoinEventModalView
        handleJoinEvent={handleJoinEvent}
        setIdJoinEvent={setIdJoinEvent}
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
        setValue={setValue}
        value={locationValue}
        nmax={nmax}
        setNmax={setNmax}
      />
    </>
  );
};
