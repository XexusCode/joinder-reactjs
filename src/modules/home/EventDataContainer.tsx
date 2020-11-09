import React, { useEffect, useState } from "react";
import { NavbarHome } from "../../components/joinder/ui/NavbarHome";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import Swal from "sweetalert2";
import "./EventStyle.scss";
import { JoinEventModalView } from "../../components/modals/JoinEventModalView";
import { CreateEventModalView } from "../../components/modals/CreateEventModalView";
import { EventListView } from "./EventListView";
import { logout } from "../auth/authActions";
import { EventObject, UserObjects } from "../../models/models";
import { fetchApi } from "../../helpers/fetch";
import { loadEvents, updateActiveEvent } from "./eventActions";
import { imgUpload } from "../../helpers/imgUpload";
import { useDate } from "./hooks/useDate";
import { EventEmptyList } from "./EventEmptyList";
import { EventButtonsView } from "./EventButtonsView";
import { useUser } from "../activeEvent/hooks/useUser";

export const EventDataContainer: React.FC = () => {
  const dispatch = useDispatch();

  const [, setError] = useState("");
  const [modalShowCreate, setModalShowCreate] = useState(false);
  const [modalShowJoin, setModalShowJoin] = useState(false);
  const [img, setImg] = useState(
    "https://res.cloudinary.com/dq9ut69am/image/upload/v1604313583/tpaxsiaivnuh3f390u3e.png"
  );
  const [value, setValue] = useState(null);
  const [eventName, setEventName] = useState("");
  const [nmax, setNmax] = useState("1");
  const user: UserObjects = useUser();
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

  const handleSubmitCreateEvent = () => {
    const newEvent: EventObject = {
      end_date: dates.dateEnd.getTime(),
      // idEvent por backend
      location: value,
      name: eventName,
      nmax: parseInt(nmax),
      owner: user.uid,
      start_date: dates.dateStart.getTime(),
      img: img,
      users: [
        {
          username: user.username,
          uid: user.uid,
          rank: user.rank,
          color: user.color,
        },
      ],
    };
    console.log(newEvent);
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
        <EventListView handleActiveEvent={handleActiveEvent} events={events} />
      )}
      <EventButtonsView
        setModalShowCreate={setModalShowCreate}
        setModalShowJoin={setModalShowJoin}
      />
      <JoinEventModalView
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
        value={value}
        nmax={nmax}
        setNmax={setNmax}
      />
    </>
  );
};
