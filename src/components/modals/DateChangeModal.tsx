import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  Modal,
  Row,
} from "react-bootstrap";
import DatePicker from "../date/DatePicker";
import SearchBar from "../maps/SearchBar";

interface DataChangeModalParams {
  eventModal: any;
  onHide: () => void;
}

export const DateChangeModal = ({
  eventModal,
  onHide,
}: DataChangeModalParams) => {
  return (
    <Container>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          eventModal.handleSubmitCreateEvent();
        }}
      >
        <Modal
          show={eventModal.show}
          onHide={onHide}
          centered
          aria-labelledby="contained-modal-title-vcenter"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Modificación de el evento
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="show-grid">
            <Form.Group controlId="formName">
              <Row>
                <Col xs={12} md={5}>
                  <Form.Label> Nuevo nombre para el evento:</Form.Label>
                </Col>
                <Col xs={12} md={7}>
                  <Form.Control
                    value={eventModal.eventName}
                    onChange={(e) => eventModal.setEventName(e.target.value)}
                    placeholder="Introduce el nuevo nombre de el evento"
                  />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group>
              <Row>
                <Col xs={12} md={5}>
                  <Form.Label>Nueva localizacion:</Form.Label>
                </Col>
                <Col xs={12} md={7}>
                  <SearchBar
                    selectProps={{
                      value: eventModal.value,
                      onChange: eventModal.setLocationValue,
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
                    date={eventModal.dates.dateStart}
                    setDate={eventModal.dates.setDateStart}
                  />
                </Col>
                <Col xs={12} md={6}>
                  <Form.Label>Fecha de fin del evento:</Form.Label>
                  <DatePicker
                    date={eventModal.dates.dateEnd}
                    setDate={eventModal.dates.setDateEnd}
                    minDate={eventModal.dates.dateStart.getTime()}
                  />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group>
              <Row className="pl-3 pr-3">
                <Form.Label>Numero maximo de personas</Form.Label>
                <Form.Control
                  value={eventModal.nmax}
                  onChange={(e) => eventModal.setNmax(e.target.value)}
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
                  <Image src={eventModal.img} roundedCircle />
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
                      onChange={eventModal.handleChangeImg}
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
            <Button onClick={onHide}>Close</Button>
            <Button
              onClick={() => {
                eventModal.handleEditEvent();
                onHide();
              }}
              type="submit"
            >
              Editar Evento
            </Button>
          </Modal.Footer>
        </Modal>
      </Form>
    </Container>
  );
};
