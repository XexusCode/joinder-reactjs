import React, { useEffect, useState } from "react";
import { fetchConToken } from "../../helpers/fetch";
import {
  addComment,
  deleteEvent,
  updateActiveEvent,
} from "../home/eventActions";
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
import { valuePlaceholder } from "./PlaceholderTypes";
import { CommentPage } from "../../components/joinder/event/comments/CommentPage";
import Swal from "sweetalert2";

export const ActiveEventDataContainer: React.FunctionComponent = () => {
  const [, setError] = useState("");
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

  const handleDeleteEvent = () => {
    fetchConToken(`events/${aEvent.id}`, {}, "DELETE")
      .then((response) => response.json())
      .then(() => {
        history.replace("/home");
        dispatch(deleteEvent());
      })
      .catch((err) => setError(err));
  };

  const handleKickOut = () => {
    console.log("kicked");
  };

  const handleRankUp = () => {
    console.log("rank up");
  };

  useEffect(() => {
    yourUser.rank < 2 ? setEdit(true) : setEdit(false);
  }, [yourUser.rank]);

  const handleSaveDescription = (result: string) => {
    dispatch(updateActiveEvent({ ...aEvent, description: result }));
  };

  const handleSaveTodoList = (result: string, id: number) => {
    aEvent.todos.splice(id, 1, { id: id, text: result });
    dispatch(
      updateActiveEvent({
        ...aEvent,
        todos: aEvent.todos,
      })
    );
  };
  const handleAddTodo = () => {
    let index: number;
    const todo = aEvent.todos[aEvent.todos.length - 1];

    if (todo === undefined) {
      index = -1;
    } else {
      index = todo.id;
    }

    dispatch(
      updateActiveEvent({
        ...aEvent,
        todos: [
          ...aEvent.todos,
          { id: index + 1, text: `${valuePlaceholder.OPTION}` },
        ],
      })
    );
  };

  const handleDeleteTodo = () => {
    aEvent.todos.splice(-1, 1);

    dispatch(
      updateActiveEvent({
        ...aEvent,
        todos: [...aEvent.todos],
      })
    );
  };
  const handleAddComment = () => {
    fetchConToken(`events/${aEvent.id}/comment`, { text: message }, "POST")
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.success) {
          Swal.fire("Success", responseJson.message, "success");
          dispatch(addComment(responseJson.data));
        } else {
          Swal.fire("ERROR", responseJson.message, "error");
        }
      });
    setMessage("");
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
        name={aEvent.name}
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
          />
        </div>
        <div className="row ">
          <div className="col-md-8 pt-5 ">
            <CommentPage
              color={yourUser.color}
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
              handleSaveValue={handleSaveTodoList}
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
