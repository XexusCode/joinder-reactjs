import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { HomeScreen } from "../modules/home/HomeScreen";
import { Routes } from "./routes";
import { ActiveEventScreen } from "../modules/activeEvent/ActiveEventScreen";

export const DashboardRoutes = () => {
  return (
    <>
      <div>
        <Switch>
          <Route exact path={Routes.HOME} component={HomeScreen} />
          <Route exact path="/evento/:eventId" component={ActiveEventScreen} />

          <Redirect to={Routes.HOME} />
        </Switch>
      </div>
    </>
  );
};
