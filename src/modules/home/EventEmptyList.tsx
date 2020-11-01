import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export const EventEmptyList: React.FunctionComponent = () => {
  return (
    <>
      <Container className="noevent ">
        <Row>
          <Col>
            <h1>Crea un evento o unete a uno</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};
