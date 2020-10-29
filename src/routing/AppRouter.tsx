import React from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";

import { AuthRoute } from "./AuthRoute";
import { Routes } from "./routes";
import { HomeScreen } from "../modules/home/HomeScreen";
import { useSelector } from "react-redux";
import { RootState } from "../reducers/rootReducer";
import { DashboardRoutes } from "./DashboardRoutes";

export const AppRouter: React.FC = () => {
  const { uid } = useSelector((state: RootState) => state.auth);

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path={Routes.AUTH}
            isAuthenticated={!!uid}
            component={AuthRoute}
          />
          <PrivateRoute
            isAuthenticated={!!uid}
            path={Routes.HOME}
            component={DashboardRoutes}
          />
          <Redirect to={Routes.AUTH_LOGIN} />
        </Switch>
      </div>
    </Router>
  );
};
