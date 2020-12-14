import React, {useEffect, useState} from "react";
import {addComment, addTodo, deleteEvent, deleteTodo, deleteUser, upgradeUser,} from "../home/eventActions";
import Geocode from "react-geocode";
import {useDispatch} from "react-redux";
import history from "../../routing/history";
import {SidebarLeft} from "../../components/joinder/ui/SidebarLeft";
import {useAevent} from "./hooks/useAevent";
import "./ActiveEventStyle.scss";
import {NavbarEvent} from "../../components/joinder/ui/NavbarEvent";
import {ActiveEventInfoView} from "./ActiveEventInfoView";
import {useUser} from "./hooks/useUser";
import {UserEventObject} from "../../models/models";
import {ActiveEventImportantInfoView} from "./ActiveEventImportanInfoView";
import {CommentPage} from "../../components/joinder/event/comments/CommentPage";
import Swal from "sweetalert2";
import {apiCaller} from "../../helpers/apiCaller";
import {useEventModal} from "../../customHooks/useEventModal";
import {Helmet} from "react-helmet";

export const ActiveEventDataContainer: () => JSX.Element = () => {
  Geocode.setApiKey("AIzaSyDezLhIcYAe7hrj0P3fF9oa6XAnEiHLEqs");

  const dispatch = useDispatch();
  const aEvent = useAevent();
  const {username} = useUser();
  const [avariableEdit, setAvariableEdit] = useState(false);
  const [avariableEditAdmin, setAvariableEditAdmin] = useState(false);
  const [loading] = useState(false);
  const [message, setMessage] = useState("");
  const yourUser = aEvent.userEvents.find(
    (user: UserEventObject) => user.username === username
  );
  const [latLng, setLatLng] = useState({ lat: 0, lng: 0 });
  const eventModal = useEventModal(aEvent);

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

  const handleKickOut = async (usernameTarget: string) => {
    const respuesta = await apiCaller(
        `events/${aEvent.id}/userevent/${usernameTarget}`,
        {},
        "DELETE",
        true
    );
    if (respuesta.success) {
      dispatch(deleteUser(usernameTarget));
    }
  };

  const handleRankUp = async (username: string) => {
    const user: UserEventObject = aEvent.userEvents.find(
      (user: UserEventObject) => user.username === username
    );
    if (user.rank > 0) user.rank--;

    const respuesta = await apiCaller(
      `events/${aEvent.id}/userevent/${username}`,
      user,
      "PATCH",
      true
    );
    if (respuesta.success) {
      dispatch(upgradeUser());
    }
  };

  useEffect(() => {
    Geocode.fromAddress(aEvent.location).then((response) => {
      const { lat, lng } = response.results[0].geometry.location;
      setLatLng({ lat, lng });
    });
    yourUser.rank < 2 ? setAvariableEdit(true) : setAvariableEdit(false);
    yourUser.rank === 0 ? setAvariableEditAdmin(true) : setAvariableEditAdmin(false);
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
    const respuesta = await apiCaller(
      `events/${aEvent.id}/comment`,
      { text: message },
      "POST",
      true
    );
    if (respuesta.success) {
      dispatch(addComment(respuesta.data));
      setMessage('')
      Swal.fire("Success", respuesta.message, "success");
    }
  };

  const handleLeaveEvent = async () => {
    const indexOfYourUser = aEvent.userEvents.indexOf(yourUser);
    console.log(indexOfYourUser, "indexofyouruser");
    if (aEvent.userEvents.length <= 1) {
      handleDeleteEvent();
      return;
    }

    if (
      // you are admin and no more admins
      yourUser.rank === 0 &&
      aEvent.userEvents.filter((user: UserEventObject) => user.rank === 0)
        .length <= 1
    ) {
      const indexModerator = aEvent.userEvents.indexOf(
        (user: UserEventObject) => user.rank === 2
      );

      if (indexModerator === -1) {
        const userRandomUsername = aEvent.userEvents.find(
          (user: UserEventObject) => username !== user.username
        ).username;
        handleRankUp(userRandomUsername);
        handleRankUp(userRandomUsername); // rank up other user
      } else {
        handleRankUp(aEvent.userEvents[indexModerator].username); //rank up moderator
      }
    }

    const respuesta = await apiCaller(
      `events/${aEvent.id}/userevent/${username}`,
      {},
      "DELETE",
      true
    );
    if (respuesta.success) {
      history.replace("/home");
      Swal.fire(
        "Success",
        "Te has salido del evento satisfactoriamente",
        "success"
      );
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
        handleLeaveEvent={handleLeaveEvent}
        rank={yourUser.rank}
        editAdmin={avariableEditAdmin}

        name={aEvent.title}
        handleDeleteEvent={handleDeleteEvent}
        idEvent={aEvent.id}
        username={yourUser.username}
        passwordEvent={aEvent.password}
      />
      <div className="container" role="main">
        <div className="row">

          <ActiveEventInfoView
            handleSaveValue={handleSaveDescription}
            edit={avariableEdit}
            editAdmin={avariableEditAdmin}
            eventModal={eventModal}
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
              edit={avariableEdit}
              todos={aEvent.todos}
              handleSaveValue={handleSaveTodo}
              handleAddTodo={handleAddTodo}
              handleDeleteTodo={handleDeleteTodo}
            />
          </div>
        </div>
        <div className="row">
        </div>
      </div>

      <Helmet>
        <meta charSet="utf-8" />
        <title>{aEvent.title} | Joinder</title>
        <meta name="description" content="Información de el evento" />
         />
      </Helmet>
    </>
  );
};
