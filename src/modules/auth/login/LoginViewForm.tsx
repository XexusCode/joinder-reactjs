import { Button, FormControl, FormGroup, Nav, Row } from "react-bootstrap";
import React from "react";

interface Ilogin {
  handleSubmit(e: React.FormEvent<HTMLFormElement>): void;
  email: string;
  handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void;
  password: string;
}

export const LoginViewForm = ({
  handleSubmit,
  email,
  handleInputChange,
  password,
}: Ilogin) => {
  return (
    <div className="Login">
      <h1>Login Screen</h1>
      <Row>
        <form onSubmit={handleSubmit}>
          <FormGroup controlId="email">
            <label>Email</label>
            <FormControl
              type="text"
              name="email"
              value={email}
              onChange={handleInputChange}
              placeholder="Enter your email"
            />
          </FormGroup>
          <FormGroup controlId="password">
            <label> Password </label>

            <FormControl
              type="password"
              name="password"
              value={password}
              onChange={handleInputChange}
              placeholder="Enter your password"
            />
          </FormGroup>
          <Button type="submit">Sign-In</Button>
          <Row className="mb-lg-n5">
            <Nav.Link href="/auth/register">
              ¿Aún no tienes cuenta? Regístrate
            </Nav.Link>
          </Row>
        </form>
      </Row>
    </div>
  );
};
