import { Button, FormControl, FormGroup, Row } from "react-bootstrap";
import React from "react";

interface RegisterParams {
  username: string;
  handleInputName: (username: string) => void;
  handleInputPassword: (password: string) => void;
  handleInputPassword2: (password2: string) => void;
  handleInputEmail: (email: string) => void;
  email: string;
  password: string;
  password2: string;
  handleSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    username: string,
    email: string,
    password: string,
    password2: string
  ) => void;
}

export const RegisterFormView = ({
  username,
  email,
  password,
  password2,
  handleSubmit,
  handleInputEmail,
  handleInputName,
  handleInputPassword,
  handleInputPassword2,
}: RegisterParams) => {
  return (
    <div className="register">
      <h1>Register</h1>
      <Row>
        <form
          onSubmit={(e) => {
            handleSubmit(e, username, email, password, password2);
          }}
        >
          <FormGroup controlId="username">
            <label>Username</label>
            <FormControl
              type="text"
              name="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => {
                handleInputName(e.target.value);
              }}
            />
          </FormGroup>

          <FormGroup controlId="email">
            <label>Email</label>
            <FormControl
              type="text"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                handleInputEmail(e.target.value);
              }}
            />
          </FormGroup>

          <FormGroup controlId="password">
            <label> Password </label>
            <FormControl
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                handleInputPassword(e.target.value);
              }}
            />
          </FormGroup>

          <FormGroup controlId="password2">
            <label> Repeat Password </label>
            <FormControl
              type="password"
              name="password2"
              placeholder="Repeat your password"
              value={password2}
              onChange={(e) => {
                handleInputPassword2(e.target.value);
              }}
            />
          </FormGroup>

          <Button type="submit">Sign-In</Button>

          <Button className="btn-secondary ml-5 ">Login in</Button>
          <Row className="mb-lg-n5" />
        </form>
      </Row>
    </div>
  );
};
