import {
  Button,
  Col,
  Container,
  Form,
  Image,
  Modal,
  Row,
} from "react-bootstrap";
import React, from "react";

import SearchBar from "../maps/SearchBar";
import DatePicker from "../date/DatePicker";
import { EventObject } from "../../interfaces/interfaces";

interface CreateEventModalParams {
  show: boolean;
  onHide: () => void;
  handleCreateEvent: (event: EventObject) => void;
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
  img: string;
  dates: {
    dateStart: Date;
    setDateStart: (arg0: Date) => void;
    dateEnd: Date;
    setDateEnd: (arg0: Date) => void;
  };
}

export const CreateEventModal = (props: CreateEventModalParams) => {
  return (
    <Modal {...props} centered aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Crear evento
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Form>
            <Form.Group controlId="formName">
              <Row>
                <Col xs={12} md={5}>
                  <Form.Label>Nombre de el evento:</Form.Label>
                </Col>
                <Col xs={12} md={7}>
                  <Form.Control placeholder="Introduce el nombre de el evento" />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group controlId="formLocation">
              <Row>
                <Col xs={12} md={5}>
                  <Form.Label>Localizacion:</Form.Label>
                </Col>
                <Col xs={12} md={7}>
                  <SearchBar />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group>
              <Row>
                <Col xs={12} md={6}>
                  <Form.Label>Fecha de inicio del evento:</Form.Label>
                  <DatePicker
                    date={props.dates.dateStart}
                    setDate={props.dates.setDateStart}
                  />
                </Col>
                <Col xs={12} md={6}>
                  <Form.Label>Fecha de fin del evento:</Form.Label>
                  <DatePicker
                    date={props.dates.dateEnd}
                    setDate={props.dates.setDateEnd}
                  />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Row className="justify-content-md-center pb-2">
                <Col xs={6} md={4}>
                  <Image src={props.img} roundedCircle />
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={12}>
                  <Form.Group>
                    <Form.File
                      className="position-relative"
                      required
                      name="file"
                      label="File"
                      onChange={props.handleChange}
                      id="formcheck-api-custom"
                      custom
                      feedbackTooltip
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button
          onClick={() => {
            props.handleCreateEvent({
              idevent: "23",
              name: "",
              owner: "string",
              start_date: "string",
              end_date: "string",
              location: "string",
              nmax: 3,
              users: [],
            });
          }}
        >
          JOIN
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
