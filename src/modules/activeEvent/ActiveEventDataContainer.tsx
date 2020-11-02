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

export const ActiveEventDataContainer: React.FunctionComponent = () => {
  const [, setError] = useState("");
  const dispatch = useDispatch();
  const { users, name } = useAevent();
  const { uid } = useUser();
  const [value, setValue] = useState("");
  const [edit, setEdit] = useState(false);

  console.log(value);

  const handleDeleteEvent = () => {
    fetchApi("deleteevent", "GET")
      .then((response) => response.json())
      .then(() => {
        history.goBack();
        dispatch(deleteEvent());
      })
      .catch((err) => setError(err));
  };

  useEffect(() => {
    users.find((user: UserObjects) => user.uid === uid).rank < 2
      ? setEdit(true)
      : setEdit(false);
  }, []);

  return (
    <>
      <NavbarEvent
        name={name}
        handleDeleteEvent={handleDeleteEvent}
        idEvent="213213"
      />
      <SidebarLeft users={users} />

      <Container fluid>
        <Row>
          <ActiveEventInfoView edit={edit} setValue={setValue} value={value} />
          <Col>
            <MapView />
          </Col>
        </Row>

        <Row>
          <Col>
            {/*<Button onClick={handleDeleteEvent}> Borrar evento</Button>*/}
          </Col>
        </Row>
      </Container>
    </>
  );
};
