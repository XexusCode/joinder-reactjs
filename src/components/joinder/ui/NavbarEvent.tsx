import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { IoMdArrowRoundBack } from "react-icons/all";
import history from "../../../routing/history";

interface NavbarEventParams {
  handleDeleteEvent: () => void;
  idEvent: string;
  name: string;
  rank: number;
}

export const NavbarEvent = ({
  rank,
  idEvent,
  handleDeleteEvent,
  name,
}: NavbarEventParams) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>
        <IoMdArrowRoundBack
          onClick={() => {
            history.goBack();
          }}
        />
      </Navbar.Brand>
      <Navbar.Brand>{name}</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" />
        <Nav>
          {rank <= 1 ? (
            <Nav.Link onClick={handleDeleteEvent}>Borrar Evento</Nav.Link>
          ) : (
            <span/>
          )}

          <Nav.Item
            onClick={() => {
              navigator.clipboard.writeText(idEvent);
              alert("ID COPIADO EN PORTAPAPELES");
            }}
          >
            ID EVENTO:{" "}
            <span className="pl-3 " style={{ color: "red", fontSize: 18 }}>
              {idEvent}
            </span>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
