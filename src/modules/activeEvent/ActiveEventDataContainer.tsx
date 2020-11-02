import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import MapView from "../../components/maps/MapView";
import { fetchApi } from "../../helpers/fetch";
import { deleteEvent } from "../home/eventActions";
import { useDispatch } from "react-redux";
import history from "../../routing/history";
import { SidebarLeft } from "../../components/joinder/ui/SidebarLeft";
import { useAevent } from "./hooks/useAevent";

export const ActiveEventDataContainer: React.FunctionComponent = () => {
  const [, setError] = useState("");
  const dispatch = useDispatch();
  const { users, location } = useAevent();
  console.log(location);

  const handleDeleteEvent = () => {
    fetchApi("deleteevent", "GET")
      .then((response) => response.json())
      .then(() => {
        history.goBack();
        dispatch(deleteEvent());
      })
      .catch((err) => setError(err));
  };
  return (
    <>
      <SidebarLeft users={users} />

      <Container>
        <Col md={1}>
          <div>
            <MapView />
          </div>
        </Col>
        <Col md={10}>
          <div>prueba</div>
        </Col>
        <Row>
          <Col>
            <Button onClick={handleDeleteEvent}> Borrar evento</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
