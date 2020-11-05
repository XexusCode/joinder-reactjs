import React from "react";
import { Button, Modal } from "react-bootstrap";
import DatePicker from "../date/DatePicker";

interface DataChangeModalParams {
  show: boolean;
  setShow: (arr: boolean) => void;
}

export const DateChangeModal = ({ show, setShow }: DataChangeModalParams) => {
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Cambiar datos de evento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DatePicker setDate={() => {}} date={new Date()} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setShow(false)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
