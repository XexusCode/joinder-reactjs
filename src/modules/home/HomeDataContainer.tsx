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
import { imgUpload } from "../../helpers/imgUpload";
import { useDate } from "./hooks/useDate";

export const HomeDataContainer: React.FC = () => {
  const dispatch = useDispatch();

  const [error, setError] = useState("");
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

  const handleCreateEvent = async (event: EventObject) => {
    fetchApi("addevent", "GET")
      .then((response) => response.json())
      .then((responseJson) => {
        dispatch(addEvent(responseJson.data));
        dispatch(
          addEvent({
            idevent: "qewqwe",
            users: [],
            name: "qweqweqwe",
            nmax: 10,
            location: "qweqwe",
            end_date: "",
            owner: "jqew",
            start_date: "213",
          })
        );
        dispatch(updateActiveEvent(responseJson.data));
        setModalShowCreate(false);
      })
      .catch((err) => setError(err));
  };
  const handleChange = (e: any) => {
    console.log(e.target.files);
    imgUpload(e.target.files[0]).then((resp) => setImg(resp));
  };

  return (
    <>
      <NavbarHome handleLogout={handleLogout} username={username} />

      <HomeViewEventList
        handleActiveEvent={handleActiveEvent}
        events={events}
        setModalShowCreate={setModalShowCreate}
        setModalShowJoin={setModalShowJoin}
      />

      <JoinEventModal
        show={modalShowJoin}
        onHide={() => setModalShowJoin(false)}
      />
      <CreateEventModal
        handleChange={handleChange}
        img={img}
        dates={dates}
        handleCreateEvent={handleCreateEvent}
        show={modalShowCreate}
        onHide={() => setModalShowCreate(false)}
      />
    </>
  );
};
