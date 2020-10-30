import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Routes } from "../../../routing/routes";

interface NavbarParams {
  handleLogout: () => void;
  username: string;
}

export const NavbarHome = ({ handleLogout, username }: NavbarParams) => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href={Routes.HOME}>{username}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" />
          <Nav>
            <Nav.Link onClick={handleLogout}>LOGOUT</Nav.Link>

            <Nav.Link eventKey={2} href="#home">
              Joinder 0.1
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
