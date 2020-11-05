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
import { UserObjects } from "../../models/models";
import { ActiveEventImportantInfoView } from "./ActiveEventImportanInfoView";
import { valuePlaceholder } from "./PlaceholderTypes";

export const ActiveEventDataContainer: React.FunctionComponent = () => {
  const [, setError] = useState("");
  const dispatch = useDispatch();
  const aEvent = useAevent();
  const { uid } = useUser();
  const [editable, setEditable] = useState(`${valuePlaceholder.DESCRIPTION}`);
  const [edit, setEdit] = useState(false);
  const [show, setShow] = useState(false);

  const userRank = aEvent.users.find((user: UserObjects) => user.uid === uid)
    .rank;

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
    userRank < 2 ? setEdit(true) : setEdit(false);
  }, [userRank]);

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

  const handleEditDate = () => {
    // <DatePicker
    //   date={aEvent.start_date}
    //   setDate={(date) => {
    //     dispatch(updateActiveEvent({ ...aEvent, start_date: date.getTime() }));
    //   }}
    // />;
  };

  return (
    <>
      <SidebarLeft
        handleKickOut={handleKickOut}
        handleRankUp={handleRankUp}
        users={aEvent.users}
        userRank={userRank}
      />
      <NavbarEvent
        name={aEvent.name}
        handleDeleteEvent={handleDeleteEvent}
        idEvent="213213"
      />
      <div className="container">
        <div className="row">
          <div className="col-md-12 "></div>

          <ActiveEventInfoView
            handleEditDate={handleEditDate}
            handleSaveValue={handleSaveDescription}
            edit={edit}
            editable={editable}
            show={show}
            setShow={setShow}
            aEvent={aEvent}
          />
        </div>
        <div className="row ">
          <div className="col-md-8"></div>
          <div className="col-md-4 p-0 ">
            <ActiveEventImportantInfoView
              edit={edit}
              items={aEvent.items}
              handleSaveValue={handleSaveTodoList}
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
