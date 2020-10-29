import { Button, FormControl, FormGroup, Row } from "react-bootstrap";
import React from "react";

interface IRegister {
  username: string;
  handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void;
  email: string;
  password: string;
  password2: string;
  handleSubmit(e: React.FormEvent<HTMLFormElement>): void;
}

export const RegisterFormView = ({
  username,
  handleInputChange,
  email,
  password,
  password2,
  handleSubmit,
}: IRegister) => {
  return (
    <div className="register">
      <h1>Register</h1>
      <Row>
        <form onSubmit={handleSubmit}>
          <FormGroup controlId="username">
            <label>Username</label>
            <FormControl
              type="text"
              name="username"
              placeholder="Enter your username"
              value={username}
              onChange={handleInputChange}
            />
          </FormGroup>

          <FormGroup controlId="email">
            <label>Email</label>
            <FormControl
              type="text"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleInputChange}
            />
          </FormGroup>

          <FormGroup controlId="password">
            <label> Password </label>
            <FormControl
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={handleInputChange}
            />
          </FormGroup>

          <FormGroup controlId="password2">
            <label> Repeat Password </label>
            <FormControl
              type="password"
              name="password2"
              placeholder="Repeat your password"
              value={password2}
              onChange={handleInputChange}
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
