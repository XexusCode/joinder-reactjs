import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { fetchApi } from "../../helpers/fetch";
import { deleteEvent } from "../home/eventActions";
import { useDispatch } from "react-redux";
import history from "../../routing/history";
import { SidebarLeft } from "../../components/joinder/ui/SidebarLeft";
import { useAevent } from "./hooks/useAevent";
import "./ActiveEventStyle.scss";
import MapView from "../../components/maps/MapView";
import { NavbarEvent } from "../../components/joinder/ui/NavbarEvent";
import { ActiveEventInfoView } from "./ActiveEventInfoView";
import { useUser } from "./hooks/useUser";
import { UserObjects } from "../../models/models";
import { ActiveEventImportantInfoView } from "./ActiveEventImportanInfoView";

export const ActiveEventDataContainer: React.FunctionComponent = () => {
  const [, setError] = useState("");
  const dispatch = useDispatch();
  const { users, name } = useAevent();
  const { uid } = useUser();
  const [value, setValue] = useState("");
  const [edit, setEdit] = useState(false);

  const userRank = users.find((user: UserObjects) => user.uid === uid).rank;

  console.log(value);

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
  }, []);

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

      <Container fluid>
        {/* Stack the columns on mobile by making one full-width and the other half-width */}
        <Row>
          <Col xs={12} md={8}>
            <ActiveEventInfoView
              value={value}
              setValue={setValue}
              edit={edit}
            />
          </Col>
          <Col xs={6} md={4}>
            <MapView />
          </Col>
        </Row>

        {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
        <Row>
          <Col xs={6} md={4}>
            xs=6 md=4
          </Col>
          <Col xs={6} md={4}>
            xs=6 md=4
          </Col>
          <Col xs={6} md={4}>
            <div>
              <ActiveEventImportantInfoView />
            </div>
          </Col>
        </Row>

        {/* Columns are always 50% wide, on mobile and desktop */}
        <Row>
          <Col xs={6}>xs=6</Col>
          <Col xs={6}>xs=6</Col>
        </Row>
      </Container>
    </>
  );
};
