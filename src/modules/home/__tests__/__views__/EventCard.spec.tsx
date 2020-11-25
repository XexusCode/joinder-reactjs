import { render, cleanup } from "@testing-library/react";
import React from "react";
import { EventObject } from "../../../../models/models";
import { Router } from "react-router-dom";
import history from "../../../../routing/history";
import { EventCard } from "../../../../components/joinder/event/EventCard";

describe("test for EventCard", function () {
  const handleActiveEventMock = jest.fn();
  afterEach(cleanup);

  it("should take a snapshot from the component", function () {
    const eventtest: EventObject = {
      comments: [],
      endDate: "",
      img: "",
      location: "",
      nmax: 0,
      startDate: "",
      title: "TEST",
      todos: [],
      userEvents: [],
    };

    const { asFragment } = render(
      <Router history={history}>
        <EventCard
          event={eventtest}
          handleActiveEvent={handleActiveEventMock}
        />
      </Router>
    );

    expect(asFragment).toMatchSnapshot();
  });
});
