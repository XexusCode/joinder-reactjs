import React, { useEffect, useState } from "react";
import { fetchApi } from "../../helpers/fetch";
import { deleteEvent, updateActiveEvent } from "../home/eventActions";
import { useDispatch } from "react-redux";
import history from "../../routing/history";
import { SidebarLeft } from "../../components/joinder/ui/SidebarLeft";
import { useAevent } from "./hooks/useAevent";
import "./ActiveEventStyle.scss";
import { NavbarEvent } from "../../components/joinder/ui/NavbarEvent";
import { ActiveEventInfoView } from "./ActiveEventInfoView";
import { useUser } from "./hooks/useUser";
import { CommentObject, UserObjects } from "../../models/models";
import { ActiveEventImportantInfoView } from "./ActiveEventImportanInfoView";
import { valuePlaceholder } from "./PlaceholderTypes";
import { CommentPage } from "../../components/joinder/event/comments/CommentPage";

export const ActiveEventDataContainer: React.FunctionComponent = () => {
  const [, setError] = useState("");
  const dispatch = useDispatch();
  const aEvent = useAevent();
  const { uid, username } = useUser();
  const [editable, setEditable] = useState(`${valuePlaceholder.DESCRIPTION}`);
  const [edit, setEdit] = useState(false);
  const [show, setShow] = useState(false);
  const [loading] = useState(false);
  const [comments, setComments] = useState<CommentObject[]>([]);
  const [message, setMessage] = useState("");
  const yourUser = aEvent.users.find((user: UserObjects) => user.uid === uid);

  const handleDeleteEvent = () => {
    fetchApi("deleteevent", "GET")
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
    setEditable(result);
    dispatch(updateActiveEvent({ ...aEvent, description: result }));
  };

  const handleSaveTodoList = (result: string, id: number) => {
    aEvent.items.splice(id, 1, { id: id, text: result });
    dispatch(
      updateActiveEvent({
        ...aEvent,
        items: aEvent.items,
      })
    );
  };
  const handleAddTodo = () => {
    let index: number;
    const item = aEvent.items[aEvent.items.length - 1];

    if (item === undefined) {
      index = -1;
    } else {
      index = item.id;
    }

    dispatch(
      updateActiveEvent({
        ...aEvent,
        items: [
          ...aEvent.items,
          { id: index + 1, text: `${valuePlaceholder.OPTION}` },
        ],
      })
    );
  };

  const handleDeleteTodo = () => {
    aEvent.items.splice(-1, 1);

    console.log(aEvent.items);

    dispatch(
      updateActiveEvent({
        ...aEvent,
        items: [...aEvent.items],
      })
    );
  };
  const handleAddComment = () => {
    const comment: CommentObject = {
      name: username,
      message,
      time: Date.now(),
    };
    setComments([comment, ...comments]);
    setMessage("");
  };

  return (
    <>
      <SidebarLeft
        handleKickOut={handleKickOut}
        handleRankUp={handleRankUp}
        users={aEvent.users}
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
            editable={editable}
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
              comments={comments}
            />
          </div>
          <div className="col-md-4 p-0 ">
            <ActiveEventImportantInfoView
              edit={edit}
              items={aEvent.items}
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
