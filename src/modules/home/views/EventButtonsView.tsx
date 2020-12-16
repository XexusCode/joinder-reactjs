import React from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
interface EventButtonsViewParams {
  setModalShowJoin: (arg: boolean) => void;
  setModalShowCreate: (arg: boolean) => void;
}

export const EventButtonsView = ({
  setModalShowJoin,
  setModalShowCreate,
}: EventButtonsViewParams): JSX.Element => {
  return (
    <Container>
      <Col md={12} xs={6}>
        <Row md={12} xs={6} >
          <Button
            variant="secondary"
            className="buttonadd"
            size="lg"
            onClick={() => {
              setModalShowCreate(true);
            }}
          >
            Crear evento
          </Button>
        </Row>
      </Col >
      <Col md={12} xs={6}>
        <Row md={12} xs={6}>
          <Button
            className="buttonjoin"
            style={{ color: "snow" }}
            variant="secondary"
            size="lg"
            onClick={() => {
              setModalShowJoin(true);
            }}
          >
            Unirse a evento
          </Button>
        </Row>
      </Col>
    </Container>
  );
};
