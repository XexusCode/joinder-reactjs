import * as React from "react";
import {
  render,
  cleanup,
  fireEvent,
} from "@testing-library/react";
import { Router } from "react-router-dom";
import history from "../../../../routing/history";
import { RegisterFormView } from "../RegisterFormView";
import Swal from "sweetalert2";

describe("RegiserFormView tests", () => {
  afterEach(cleanup);

  const handleSubmit = jest.fn();
  const handleInputPassword = jest.fn();
  const handleInputName = jest.fn();
  const handleInputPassword2 = jest.fn();

  jest.mock("sweetalert2", () => ({
    fire: jest.fn(),
  }));

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

  it("the register button calls handleSubmit ", async function () {
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
    await waitForElement(() => expect(Swal.fire()).toHaveBeenCalledTimes(1));
  });
});
