import { render, fireEvent } from "@testing-library/react";
import React from "react";
import { NavbarEvent } from "../NavbarEvent";

describe("test NavBarEvent ", function () {
  const handleDeleteEvent = jest.fn();
  const handleLeaveEvent = jest.fn();

  it("should work ", function () {
    const { getByText } = render(
      <NavbarEvent
        handleDeleteEvent={handleDeleteEvent}
        handleLeaveEvent={handleLeaveEvent}
        idEvent="123"
        name="Test Name"
        rank={0}
        username="UserTest"
        passwordEvent="ewe"
      />
    );
    const textNav = getByText("Test Name");
    const leaveEventButton = getByText("Dejar Evento");

    fireEvent.click(leaveEventButton);

    expect(textNav).toHaveTextContent("Test Name");
  });
});
