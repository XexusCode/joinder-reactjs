import React, { useState } from "react";
import { NavbarEvent } from "../../components/joinder/ui/NavbarEvent";
import SidebarLeft from "../../components/joinder/ui/SidebarLeft";
import { Col } from "react-bootstrap";
import MapView from "../../components/maps/MapView";
import { fetchApi } from "../../helpers/fetch";
import { deleteEvent } from "../../actions/event";
import { useDispatch } from "react-redux";
import history from "../../routing/history";

export const ActiveEventDataContainer: React.FunctionComponent = () => {
  const [sidebarOpen, onSetSidebarOpen] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleDeleteEvent = () => {
    fetchApi("deleteevent", "GET")
      .then((response) => response.json())
      .then((responseJson) => {
        dispatch(deleteEvent());
        history.goBack();
      })
      .catch((err) => setError(err));
  };

  return (
    <>
      <NavbarEvent handleDeleteEvent={handleDeleteEvent} />

      <Col md={11}>
        <div>
          <MapView />
        </div>
        <SidebarLeft />
      </Col>
      <Col md={10}>
        <div>prueba</div>
      </Col>
    </>
  );
};
