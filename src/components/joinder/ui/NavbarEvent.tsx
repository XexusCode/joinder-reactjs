import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import SidebarLeft from "./SidebarLeft";
import NavbarToggle from "react-bootstrap/NavbarToggle";

export const NavbarEvent = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        {/*<Navbar.Brand href={Routes.HOME}>{username}</Navbar.Brand>*/}
        <NavbarToggle />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link>LOGOUT</Nav.Link>

            <Nav.Link eventKey={2} href="#home">
              Joinder 0.1
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
