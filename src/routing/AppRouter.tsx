import React from "react";
import {BrowserRouter as Router, Redirect, Switch} from "react-router-dom";
import {PublicRoute} from "./PublicRoute";
import {PrivateRoute} from "./PrivateRoute";

import {AuthRoute} from "./AuthRoute";
import {Routes} from "./routes";
import {DashboardRoutes} from "./DashboardRoutes";

export const AppRouter: React.FC = () => {
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path={Routes.AUTH}
            component={AuthRoute}
          />
          <PrivateRoute
            path={Routes.HOME}
            component={DashboardRoutes}
          />
          <Redirect to={Routes.AUTH_LOGIN} />
        </Switch>
      </div>
    </Router>
  );
};
