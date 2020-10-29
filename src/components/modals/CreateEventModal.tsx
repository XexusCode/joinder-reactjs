import {
  Button,
  Col,
  Container,
  Form,
  Image,
  Modal,
  Row,
} from "react-bootstrap";
import React, { useState } from "react";

import SearchBar from "../maps/SearchBar";
import DatePicker from "../date/DatePicker";
import { imgUpload } from "../../helpers/imgUpload";

interface CreateEventModalParams {
  show: boolean;
  onHide: () => void;
}

export const CreateEventModal = (props: CreateEventModalParams) => {
  const [dateStart, setDateStart] = useState(new Date());
  const [dateEnd, setDateEnd] = useState(new Date());
  const [img, setImg] = useState("http://placeimg.com/120/120/cats");

  const handleChange = async (e: any) => {
    console.log(e.target.files);
    const resp = await imgUpload(e.target.files[0]);
    setImg(resp);
  };
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
                  <DatePicker date={dateStart} setDate={setDateStart} />
                </Col>
                <Col xs={12} md={6}>
                  <Form.Label>Fecha de fin del evento:</Form.Label>
                  <DatePicker date={dateEnd} setDate={setDateEnd} />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Row className="justify-content-md-center pb-2">
                <Col xs={6} md={4}>
                  <Image src={img} roundedCircle />
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
                      onChange={handleChange}
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
            console.log(dateStart, "qweqwe", dateEnd);
          }}
        >
          Join
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
