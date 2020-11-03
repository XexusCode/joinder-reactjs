import React from "react";
import { Nav, Navbar } from "react-bootstrap";

interface NavbarEventParams {
  handleDeleteEvent: () => void;
  idEvent: string;
  name: string;
}

export const NavbarEvent = ({
  idEvent,
  handleDeleteEvent,
  name,
}: NavbarEventParams) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>{name}</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" />
        <Nav>
          <Nav.Link onClick={handleDeleteEvent}>Borrar Evento</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            ID EVENTO:{" "}
            <span className="pl-3 " style={{ color: "red", fontSize: 18 }}>
              {idEvent}
            </span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
