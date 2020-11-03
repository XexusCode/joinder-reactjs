import React from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
interface EventButtonsViewParams {
  setModalShowJoin: (arg: boolean) => void;
  setModalShowCreate: (arg: boolean) => void;
}

export const EventButtonsView = ({
  setModalShowJoin,
  setModalShowCreate,
}: EventButtonsViewParams) => {
  return (
    <Container>
      <Col>
        <Row md={6} xs={12}>
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
      </Col>
      <Col>
        <Row md={6} xs={12}>
          <Button
            className="buttonjoin"
            variant="primary"
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
