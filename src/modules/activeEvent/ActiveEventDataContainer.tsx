import React, { useState } from "react";
import { NavbarEvent } from "../../components/joinder/ui/NavbarEvent";
import SidebarLeft from "../../components/joinder/ui/SidebarLeft";
import { Col, Container, Row } from "react-bootstrap";
import MapView from "../../components/maps/MapView";

export const ActiveEventDataContainer: React.FunctionComponent = () => {
  const [sidebarOpen, onSetSidebarOpen] = useState(false);
  return (
    <>
      <NavbarEvent />

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
