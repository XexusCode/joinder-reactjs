import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { IoMdArrowRoundBack } from "react-icons/all";
import history from "../../../routing/history";

interface NavbarEventParams {
  handleDeleteEvent: () => void;
  handleLeaveEvent: (username: string) => void;
  idEvent: string;
  name: string;
  rank: number;
  username: string;
}

export const NavbarEvent = ({
  rank,
  idEvent,
  handleDeleteEvent,
  name,
  handleLeaveEvent,
  username,
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
        <h1>{name}</h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" />
        <Nav>
          <Nav.Link
            onClick={() => {
              handleLeaveEvent(username);
            }}
          >
            Dejar Evento
          </Nav.Link>
          {rank <= 1 ? (
            <Nav.Link onClick={handleDeleteEvent}>Borrar Evento</Nav.Link>
          ) : (
            <span />
          )}

          <Nav.Item
            onClick={() => {
              navigator.clipboard.writeText(idEvent);
              alert("ID COPIADO EN PORTAPAPELES");
            }}
          >
            <span className="pl-3 " style={{ color: "red", fontSize: 18 }}>
              {" "}
              ID EVENTO: {idEvent}
            </span>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
