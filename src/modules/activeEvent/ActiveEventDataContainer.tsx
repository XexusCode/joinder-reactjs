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
  const { users, name } = useAevent();
  const aevent = useAevent();
  const { uid } = useUser();
  const [editable, setEditable] = useState(`${valuePlaceholder.DESCRIPTION}`);
  const [listOption0, setListOption0] = useState(`${valuePlaceholder.OPTION}`);
  const [listOption1, setListOption1] = useState(`${valuePlaceholder.OPTION}`);
  const [listOption2, setListOption2] = useState(`${valuePlaceholder.OPTION}`);
  const [listOption3, setListOption3] = useState(`${valuePlaceholder.OPTION}`);

  const [edit, setEdit] = useState(false);

  const userRank = users.find((user: UserObjects) => user.uid === uid).rank;

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

  const handleSaveOption0 = (result: string) => {
    setListOption0(result);

    dispatch(
      updateActiveEvent({
        ...aevent,
        items: [result, listOption1, listOption2, listOption3],
      })
    );
  };
  const handleSaveOption1 = (result: string) => {
    setListOption1(result);
    dispatch(
      updateActiveEvent({
        ...aevent,
        items: [listOption0, result, listOption2, listOption3],
      })
    );
  };
  const handleSaveOption2 = (result: string) => {
    setListOption2(result);

    dispatch(
      updateActiveEvent({
        ...aevent,
        items: [listOption0, listOption1, result, listOption3],
      })
    );
  };
  const handleSaveOption3 = (result: string) => {
    setListOption3(result);

    dispatch(
      updateActiveEvent({
        ...aevent,
        items: [listOption0, listOption1, listOption2, result],
      })
    );
  };

  useEffect(() => {
    userRank < 2 ? setEdit(true) : setEdit(false);
  }, []);

  const handleSaveDescription = (result: string) => {
    setEditable(result);
    dispatch(updateActiveEvent({ ...aevent, description: result }));
  };

  return (
    <>
      <SidebarLeft
        handleKickOut={handleKickOut}
        handleRankUp={handleRankUp}
        users={users}
        userRank={userRank}
      />
      <NavbarEvent
        name={name}
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
          />
        </div>
        <div className="row ">
          <div className="col-md-8"></div>
          <div className="col-md-4 p-0 ">
            <ActiveEventImportantInfoView
              edit={edit}
              handleSaveOption0={handleSaveOption0}
              handleSaveOption1={handleSaveOption1}
              handleSaveOption2={handleSaveOption2}
              handleSaveOption3={handleSaveOption3}
              listOption0={listOption0}
              listOption1={listOption1}
              listOption2={listOption2}
              listOption3={listOption3}
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
