import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

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
        <Nav className="mr-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
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
