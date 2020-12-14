import { render, cleanup, fireEvent } from "@testing-library/react";
import React from "react";
import { EventObject } from "../../../../models/models";
import { Router } from "react-router-dom";
import history from "../../../../routing/history";
import { EventCard } from "../../../../components/joinder/event/EventCard";

describe("test for EventCard", function () {
  const handleActiveEventMock = jest.fn();
  afterEach(cleanup);

  it("should have a event created", function () {
    const eventtest: EventObject = {
      comments: [],
      endDate: "",
      img: "",
      location: "",
      nmax: 0,
      startDate: "",
      title: "TEST",
      password: "e",
      todos: [],
      userEvents: [],
    };
    const { getByTestId } = render(
      <Router history={history}>
        <EventCard
          event={eventtest}
          handleActiveEvent={handleActiveEventMock}
        />
      </Router>
    );

    fireEvent.click(getByTestId("test-title"));

    expect(getByTestId("test-title")).toHaveTextContent("TEST");
    expect(handleActiveEventMock).toHaveBeenCalled();
  });


});
