import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { EventScreen } from "../modules/home/EventScreen";
import { Routes } from "./routes";
import { ActiveEventScreen } from "../modules/activeEvent/ActiveEventScreen";

export const DashboardRoutes = () => {
  return (
    <>
      <div>
        <Switch>
          <Route exact path={Routes.HOME} component={EventScreen} />
          <Route exact path="/evento/:eventId" component={ActiveEventScreen} />

          <Redirect to={Routes.HOME} />
        </Switch>
      </div>
    </>
  );
};
