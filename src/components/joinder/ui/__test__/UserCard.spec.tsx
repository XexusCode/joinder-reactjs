import { render, fireEvent } from "@testing-library/react";
import React from "react";
import { Router } from "react-router-dom";
import history from "../../../../routing/history";
import { UserEventObject } from "../../../../models/models";
import { UserCard } from "../../event/UserCard";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

describe("<SidebarLeft/>", function () {
  const handleKickOutMock = jest.fn();
  const handleRankUp = jest.fn(() => {});
  const user: UserEventObject = {
    username: "TestUser",
    rank: 1,
    uid: "10",
    color: "red",
  };

  const initState = {
    auth: {
      checking: false,
      uid: 1,
      username: "problemas",
    },
    event: {
      events: [],
      activeEvent: {
        id: 1,
        title: "Test Title",
        description: "Test Description",
        nmax: 3,
        startDate: 203,
        endDate: 232,
        location: "prweqw",
        img: "wewe",
        password: "323",
        userEvents: [
          {
            id: 7,
            username: "TestUser",
            rank: "1",
            color: "gold",
          },
        ],
      },
    },
  };

  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const store = mockStore(initState);

  store.dispatch = jest.fn();

  it("should work ", function () {
    const { getByText, getByTestId } = render(
      <Router history={history}>
        <Provider store={store}>
          <UserCard
            handleKickOut={handleKickOutMock}
            handleRankUp={handleRankUp}
            userRank={0}
            user={user}
          />
        </Provider>
      </Router>
    );
    const username = getByText("TestUser");
    const rankup = getByTestId("test-rankup");
    const rank = getByTestId("test-rank");

    fireEvent.click(rankup); // arreglar

    expect(username).toHaveTextContent("TestUser");
    expect(rank).toHaveAttribute("color", "#00aae4");
  });
});
