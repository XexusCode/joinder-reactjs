import React from "react";
import { Col, Row } from "react-bootstrap";

export const ActiveEventImportantInfoView = () => {
  return (
    <Col className="info-event ">
      <Row>
        <h2>Cosas importantes </h2>
      </Row>
      <Row>Localizacion: Castellon</Row>
      <Row>
        <h5>Descripcion: </h5>
      </Row>
    </Col>
  );
};
