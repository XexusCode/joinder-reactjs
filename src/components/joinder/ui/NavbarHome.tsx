import React from "react";
import { Nav, Navbar } from "react-bootstrap";

interface NavbarParams {
  handleLogout: () => void;
  username: string;
}

export const NavbarHome = ({
  handleLogout,
  username,
}: NavbarParams): JSX.Element => {
  return (
    <div>
      <Navbar
        role="navigation"
        bg="dark"
        variant="dark"
        collapseOnSelect
        expand="lg"
      >
        <Navbar.Brand>
          <h1>{username}</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" />
          <Nav>
            <Nav.Link style={{ color: "white" }} onClick={handleLogout}>
              LOGOUT
            </Nav.Link>

            <Nav.Link style={{ color: "white" }} eventKey={2} href="#home">
              Joinder 0.1
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
