import * as React from "react";
import { render, cleanup, fireEvent, waitFor } from "@testing-library/react";
import { Router } from "react-router-dom";
import history from "../../../../routing/history";
import { RegisterFormView } from "../RegisterFormView";

describe("RegiserFormView tests", () => {
  const handleSubmit = jest.fn();
  const handleInputPassword = jest.fn();
  const handleInputName = jest.fn();
  const handleInputPassword2 = jest.fn();

  it("should take a snapshot of <RegisterFormView/>", function () {
    const { asFragment } = render(
      <Router history={history}>
        <RegisterFormView
          handleSubmit={handleSubmit}
          handleInputPassword={handleInputPassword}
          password={"testPassword"}
          username={"testUsername"}
          handleInputName={handleInputName}
          handleInputPassword2={handleInputPassword2}
          password2={"testPassword"}
        />
      </Router>
    );
    const firstRender = asFragment();

    expect(firstRender).toMatchSnapshot();
  });

  it("the register button calls handleSubmit ", function () {
    const { getByLabelText } = render(
      <Router history={history}>
        <RegisterFormView
          handleSubmit={handleSubmit}
          handleInputPassword={handleInputPassword}
          password={"testPassword"}
          username={"testUsername"}
          handleInputName={handleInputName}
          handleInputPassword2={handleInputPassword2}
          password2={"testPassword"}
        />
      </Router>
    );
    expect(handleSubmit).not.toHaveBeenCalled();
    fireEvent.click(getByLabelText("register-button"));
    expect(handleSubmit).toHaveBeenCalled();
  });
});
