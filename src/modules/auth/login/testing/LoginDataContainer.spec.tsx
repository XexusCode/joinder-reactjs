import * as React from "react";
import { render } from "@testing-library/react";
import { Router } from "react-router-dom";
import history from "../../../../routing/history";
import { LoginDataContainer } from "../LoginDataContainer";
import { Provider } from "react-redux";
import { store } from "../../../../redux/store/store";

describe("LoginDataContainer tests", () => {
  it("should take a snapshot of <LoginDataContainer/>", function () {
    const { asFragment } = render(
      <Provider store={store}>
        <Router history={history}>
          <LoginDataContainer />
        </Router>
      </Provider>
    );
    expect(asFragment).toMatchSnapshot();
  });
});
