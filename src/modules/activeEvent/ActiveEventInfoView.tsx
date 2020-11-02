import React from "react";
import { Col, Row } from "react-bootstrap";
import { EditableForm } from "../../components/joinder/event/EditableForm";

export const ActiveEventInfoView = ({ value, setValue, edit }: any) => {
  return (
    <Col className="info-event text-center">
      <Row>
        <h2>Información de el evento </h2>
      </Row>
      <Row>
        <h5>Localizacion: Castellon</h5>
      </Row>
      <Row>
        <h5>
          Descripcion:{" "}
          <EditableForm edit={edit} setValue={setValue} value={value} />
        </h5>
      </Row>
    </Col>
  );
};
