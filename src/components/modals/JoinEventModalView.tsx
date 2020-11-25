import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import React from "react";

interface JoinEventModalParams {
  show: boolean;
  onHide: () => void;
  handleJoinEvent: () => void;
  setIdJoinEvent: (idEvent: number) => void;
}
export const JoinEventModalView = (
  props: JoinEventModalParams
): JSX.Element => {
  return (
    <Modal {...props} centered aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Unirse a evento
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row className="justify-content-md-center ">
            <Col xs={12} md={8}>
              <Form>
                <Form.Group controlId="idEvent">
                  <Form.Label>ID DE EL EVENTO</Form.Label>
                  <Form.Control
                    onChange={(e) =>
                      props.setIdJoinEvent(parseInt(e.target.value))
                    }
                    type="text"
                    placeholder="ID EVENTO"
                  />
                  <Form.Text className="text-muted">
                    Introduce el id del evento al que quieras ingresar!
                  </Form.Text>
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row className="justify-content-md-center ">
            <Col xs={12} md={8}>
              <Form>
                <Form.Group controlId="passwordEvent">
                  <Form.Label>Contraseña de el evento</Form.Label>
                  <Form.Control type="email" placeholder="Password" />
                  <Form.Text className="text-muted">
                    Introduce la contraseña de el evento!
                  </Form.Text>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button
          onClick={() => {
            props.handleJoinEvent();
            props.onHide();
          }}
        >
          Join
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
