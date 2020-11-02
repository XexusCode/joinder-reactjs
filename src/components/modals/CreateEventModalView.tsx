import {
  Button,
  Col,
  Container,
  Form,
  Image,
  Modal,
  Row,
} from "react-bootstrap";

import React from "react";
import DatePicker from "../date/DatePicker";
import SearchBar from "../maps/SearchBar";

interface CreateEventModalParams {
  handleSubmitCreateEvent: () => void;
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
  show: boolean;
  onHide: () => void;
  value: any;
  setValue: (value: any) => void;
  eventName: string;
  setEventName: (name: string) => void;
  nmax: string;
  setNmax: (nmax: string) => void;
  img: string;
  dates: {
    dateStart: Date;
    setDateStart: (arg0: Date) => void;
    dateEnd: Date;
    setDateEnd: (arg0: Date) => void;
  };
}

export const CreateEventModalView = (props: CreateEventModalParams) => {
  return (
    <Container>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          props.handleSubmitCreateEvent();
        }}
      >
        <Modal
          {...props}
          centered
          aria-labelledby="contained-modal-title-vcenter"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Crear evento
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="show-grid">
            <Form.Group controlId="formName">
              <Row>
                <Col xs={12} md={5}>
                  <Form.Label>Nombre de el evento:</Form.Label>
                </Col>
                <Col xs={12} md={7}>
                  <Form.Control
                    value={props.eventName}
                    onChange={(e) => props.setEventName(e.target.value)}
                    placeholder="Introduce el nombre de el evento"
                  />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group>
              <Row>
                <Col xs={12} md={5}>
                  <Form.Label>Localizacion:</Form.Label>
                </Col>
                <Col xs={12} md={7}>
                  <SearchBar
                    selectProps={{
                      value: props.value,
                      onChange: props.setValue,
                    }}
                  />
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
            <Form.Group>
              <Row className="pl-3 pr-3">
                <Form.Label>Numero maximo de personas</Form.Label>
                <Form.Control
                  value={props.nmax}
                  onChange={(e) => props.setNmax(e.target.value)}
                  as="select"
                  custom
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </Form.Control>
              </Row>
            </Form.Group>
            <Form.Group>
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
                      label="Selecciona tu imagen"
                      onChange={props.handleChange}
                      id="formcheck-api-custom"
                      custom
                      feedbackTooltip
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
            <Button onClick={props.handleSubmitCreateEvent} type="submit">
              JOIN
            </Button>
          </Modal.Footer>
        </Modal>
      </Form>
    </Container>
  );
};
