import React, { useEffect, useState } from "react";
import {
  addComment,
  addTodo,
  deleteEvent,
  deleteTodo,
} from "../home/eventActions";
import Geocode from "react-geocode";
import { useDispatch } from "react-redux";
import history from "../../routing/history";
import { SidebarLeft } from "../../components/joinder/ui/SidebarLeft";
import { useAevent } from "./hooks/useAevent";
import "./ActiveEventStyle.scss";
import { NavbarEvent } from "../../components/joinder/ui/NavbarEvent";
import { ActiveEventInfoView } from "./ActiveEventInfoView";
import { useUser } from "./hooks/useUser";
import { UserEventObject } from "../../models/models";
import { ActiveEventImportantInfoView } from "./ActiveEventImportanInfoView";
import { CommentPage } from "../../components/joinder/event/comments/CommentPage";
import Swal from "sweetalert2";
import { apiCaller } from "../../helpers/apiCaller";

export const ActiveEventDataContainer: () => JSX.Element = () => {
  Geocode.setApiKey("AIzaSyDezLhIcYAe7hrj0P3fF9oa6XAnEiHLEqs");

  const dispatch = useDispatch();
  const aEvent = useAevent();
  const { username } = useUser();
  const [edit, setEdit] = useState(false);
  const [show, setShow] = useState(false);
  const [loading] = useState(false);
  const [message, setMessage] = useState("");
  const yourUser = aEvent.userEvents.find(
    (user: UserEventObject) => user.username === username
  );
  const [latLng, setLatLng] = useState({ lat: 0, lng: 0 });

  const handleDeleteEvent = async () => {
    const respuesta = await apiCaller(
      `events/${aEvent.id}`,
      {},
      "DELETE",
      true
    );
    if (respuesta.success) {
      history.replace("/home");
      dispatch(deleteEvent());
    }
  };

  const handleKickOut = () => {
    console.log("kicked");
  };

  const handleRankUp = () => {
    console.log("rank up");
  };

  useEffect(() => {
    Geocode.fromAddress(aEvent.location).then((response) => {
      const { lat, lng } = response.results[0].geometry.location;
      setLatLng({ lat, lng });
    });
    yourUser.rank < 2 ? setEdit(true) : setEdit(false);
  }, [yourUser.rank]);

  const handleSaveDescription = async (result: string) => {
    const newAEvent = aEvent;
    newAEvent.description = result;
    await apiCaller(`events/${aEvent.id}`, newAEvent, "PATCH", true);
  };

  const handleSaveTodo = async (result: string, id: number) => {
    await apiCaller(
      `events/${aEvent.id}/todo/${id}`,
      { text: result },
      "PATCH",
      true
    );
  };
  const handleAddTodo = async () => {
    const textToAdd = { text: "- Cosas que hacer" };

    const respuesta = await apiCaller(
      `events/${aEvent.id}/todo`,
      textToAdd,
      "POST",
      true
    );
    if (respuesta.success) {
      dispatch(addTodo(respuesta.data));
    }
  };

  const handleDeleteTodo = async () => {
    if (aEvent.todos.length >= 1) {
      const idLastTodo = aEvent.todos[aEvent.todos.length - 1].id;

      const respuesta = await apiCaller(
        `events/${aEvent.id}/todo/${idLastTodo}`,
        {},
        "DELETE",
        true
      );
      if (respuesta.success) {
        dispatch(deleteTodo());
      }
    }
  };
  const handleAddComment = async () => {
    const data = { text: message };
    const respuesta = await apiCaller(
      `events/${aEvent.id}/comment`,
      data,
      "POST",
      true
    );
    if (respuesta.success) {
      dispatch(addComment(respuesta.data));
      Swal.fire("Success", respuesta.message, "success");
    }
  };

  return (
    <>
      <SidebarLeft
        handleKickOut={handleKickOut}
        handleRankUp={handleRankUp}
        users={aEvent.userEvents}
        userRank={yourUser.rank}
      />
      <NavbarEvent
        rank={yourUser.rank}
        name={aEvent.title}
        handleDeleteEvent={handleDeleteEvent}
        idEvent="213213"
      />
      <div className="container">
        <div className="row">
          <div className="col-md-12 "></div>

          <ActiveEventInfoView
            handleSaveValue={handleSaveDescription}
            edit={edit}
            show={show}
            setShow={setShow}
            aEvent={aEvent}
            latLngLocation={latLng}
          />
        </div>
        <div className="row ">
          <div className="col-md-8 pt-5 ">
            <CommentPage
              handleAddComment={handleAddComment}
              message={message}
              setMessage={setMessage}
              loading={loading}
              comments={aEvent.comments}
            />
          </div>
          <div className="col-md-4 p-0 ">
            <ActiveEventImportantInfoView
              edit={edit}
              todos={aEvent.todos}
              handleSaveValue={handleSaveTodo}
              handleAddTodo={handleAddTodo}
              handleDeleteTodo={handleDeleteTodo}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12"></div>
        </div>
      </div>
    </>
  );
};
