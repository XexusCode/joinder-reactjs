import * as React from "react";
import {fireEvent, render} from "@testing-library/react";
import {LoginViewForm} from "../LoginViewForm";
import {Router} from "react-router-dom";
import history from "../../../../routing/history";

describe("LoginViewForm tests", () => {
  const handleSubmit = jest.fn();
  const handleInputEmail = jest.fn();
  const handleInputPassword = jest.fn();
  jest.mock("sweetalert2", () => ({
    fire: jest.fn(),
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should make a snapshot of LoginViewForm", function () {
    const { asFragment } = render(
      <Router history={history}>
        <LoginViewForm
          handleSubmit={handleSubmit}
          email={"username"}
          handleInputEmail={handleInputEmail}
          handleInputPassword={handleInputPassword}
          password={"password"}
        />
      </Router>
    );
    const firstRender = asFragment();

    expect(firstRender).toMatchSnapshot();
  });

  test("the login button calls handlesubmit", () => {
    module.exports = jest.fn();

    const {getByTestId} = render(
        <Router history={history}>
          <LoginViewForm
              handleSubmit={handleSubmit}
              email={"username"}
              handleInputEmail={() => {
              }}
              handleInputPassword={() => {
              }}
              password={"password"}
          />
        </Router>
    );
    expect(getByTestId("button-submit")).not.toHaveAttribute("disabled");
    expect(handleSubmit).not.toHaveBeenCalled();
    fireEvent.click(getByTestId("button-submit"));
    expect(handleSubmit).toHaveBeenCalled();
  });
});
