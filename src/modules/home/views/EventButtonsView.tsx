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
      <Col>
        <Row md={12} xs={11}>
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
        <Row md={12} xs={1}>
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
