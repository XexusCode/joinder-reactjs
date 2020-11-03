import React from "react";
import { Col, Row } from "react-bootstrap";
import { EditableForm } from "../../components/joinder/event/EditableForm";

export const ActiveEventInfoView = ({ value, setValue, edit }: any) => {
  return (
    <Col className="info-event ">
      <Row>
        <h4>Información de el evento </h4>
      </Row>
      <Row>
        <p>Localizacion: Castellon</p>
      </Row>
      <Row>
        <div>
          Descripcion:{" "}
          <EditableForm edit={edit} setValue={setValue} value={value} />
        </div>
      </Row>
    </Col>
  );
};
