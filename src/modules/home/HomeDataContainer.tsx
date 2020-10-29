import React, {useState} from "react";
import {NavbarHome} from "../../components/joinder/ui/NavbarHome";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../reducers/rootReducer";

import "./HomeStyle.scss";
import {JoinEventModal} from "../../components/modals/JoinEventModal";
import {CreateEventModal} from "../../components/modals/CreateEventModal";
import {HomeViewEventList} from "./HomeViewEventList";
import {logout} from "../../actions/auth";

export const HomeDataContainer: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const [modalShowCreate, setModalShowCreate] = useState(false);
  const [modalShowJoin, setModalShowJoin] = useState(false);
  const { events } = useSelector((state: RootState) => state.event);
  const { username } = useSelector((state: RootState) => state.auth);
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <>
      <NavbarHome handleLogout={handleLogout} username={username} />

      <HomeViewEventList
        events={events}
        setModalShowCreate={setModalShowCreate}
        setModalShowJoin={setModalShowJoin}
      />

      <JoinEventModal
        show={modalShowJoin}
        onHide={() => setModalShowJoin(false)}
      />
      <CreateEventModal
        show={modalShowCreate}
        onHide={() => setModalShowCreate(false)}
      />
    </>
  );
};
