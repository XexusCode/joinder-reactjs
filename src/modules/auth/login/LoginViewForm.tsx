import { Button, FormControl, FormGroup, Nav, Row } from "react-bootstrap";
import React from "react";

interface LoginViewFormProps {
  handleSubmit: (email: string, password: string) => void;
  email: string;
  handleInputEmail: (email: string) => void;
  handleInputPassword: (password: string) => void;
  password: string;
}

export const LoginViewForm = ({
  handleSubmit,
  email,
  handleInputEmail,
  handleInputPassword,
  password,
}: LoginViewFormProps) => {
  return (
    <div className="Login">
      <h1>Login Screen</h1>
      <Row>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(email, password);
          }}
        >
          <FormGroup controlId="email">
            <label>Email</label>
            <FormControl
              type="text"
              name="email"
              value={email}
              onChange={(e) => handleInputEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </FormGroup>
          <FormGroup controlId="password">
            <label> Password </label>

            <FormControl
              type="password"
              name="password"
              value={password}
              onChange={(e) => handleInputPassword(e.target.value)}
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
