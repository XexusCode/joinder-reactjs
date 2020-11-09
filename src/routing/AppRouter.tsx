import React from "react";
import { Router, Redirect, Switch } from "react-router-dom";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";

import { AuthRoute } from "./AuthRoute";
import { Routes } from "./routes";
import { DashboardRoutes } from "./DashboardRoutes";
import history from "./history";
import "bootstrap/dist/css/bootstrap.css";

export const AppRouter: React.FC = () => {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <PublicRoute path={Routes.AUTH} component={AuthRoute} />
          <PrivateRoute path={Routes.HOME} component={DashboardRoutes} />
          <Redirect to={Routes.AUTH_LOGIN} />
        </Switch>
      </div>
    </Router>
  );
};
