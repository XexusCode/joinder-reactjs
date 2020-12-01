import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { NavbarHome } from "../NavbarHome";

describe("test <NavbarHome/>", function () {
  const handleLogout = jest.fn();

  it("should do things ", function () {
    const { getByText, getByTestId } = render(
      <NavbarHome handleLogout={handleLogout} username={"TestUser"} />
    );
    const title = getByText("TestUser");
    const button = getByText("LOGOUT");

    fireEvent.click(button);

    expect(handleLogout).toHaveBeenCalled();
    expect(title).toHaveTextContent("TestUser");
  });
});
