import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { IoMdArrowRoundBack } from "react-icons/all";
import history from "../../../routing/history";

interface NavbarEventParams {
  handleDeleteEvent: () => void;
  handleLeaveEvent: (username: string) => void;
  idEvent: string;
  name: string;
  rank: number;
  username: string;
  passwordEvent: string;
  editAdmin:boolean
}

export const NavbarEvent = ({
  rank,
  idEvent,
  handleDeleteEvent,
  name,
  handleLeaveEvent,
  username,
  passwordEvent,
}: NavbarEventParams): JSX.Element => {
  return (
    <Navbar
      role="navigation"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Navbar.Brand>
        <IoMdArrowRoundBack
          onClick={() => {
            history.goBack();
          }}
        />
      </Navbar.Brand>
      <Navbar.Brand>
        <h1 data-testid="test-title">{name}</h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" />
        <Nav>
          <NavDropdown title="Informacion" id="collasible-nav-dropdown">
            <NavDropdown.Item
              onClick={() => {
                navigator.clipboard.writeText(idEvent);
                alert("ID COPIADO EN PORTAPAPELES");
              }}
            >
              ID EVENTO: <span style={{ color: "blue" }}>{idEvent}</span>
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => {
                navigator.clipboard.writeText(passwordEvent);
                alert("PASSWORD COPIADO EN PORTAPAPELES");
              }}
            >
              Password: : <span style={{ color: "blue" }}>{passwordEvent}</span>
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link
            onClick={() => {
              handleLeaveEvent(username);
            }}
          >
            Dejar Evento
          </Nav.Link>
          {rank === 0   ? (
            <Nav.Link onClick={handleDeleteEvent}>Borrar Evento</Nav.Link>
          ) : (
            <span />
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
