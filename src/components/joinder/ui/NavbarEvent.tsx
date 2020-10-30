import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";

interface NavbarEventParams {
  handleDeleteEvent: () => void;
}

export const NavbarEvent = ({ handleDeleteEvent }: NavbarEventParams) => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        {/*<Navbar.Brand href={Routes.HOME}>{username}</Navbar.Brand>*/}
        <NavbarToggle />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" />
          <Nav>
            <Nav.Link onClick={handleDeleteEvent}>Borrar Evento</Nav.Link>

            <Nav.Link>Joinder 0.1</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
