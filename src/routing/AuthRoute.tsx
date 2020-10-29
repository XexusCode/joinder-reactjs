import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { LoginScreen } from "../modules/auth/login/LoginScreen";
import { RegisterScreen } from "../modules/auth/register/RegisterScreen";
import { Routes } from "./routes";

export const AuthRoute: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route path={Routes.AUTH_LOGIN} component={LoginScreen} />
        <Route path={Routes.AUTH_REGISTER} component={RegisterScreen} />

        <Route path={Routes.AUTH_REGISTER} component={RegisterScreen} />

        <Redirect to={Routes.AUTH_LOGIN} />
      </Switch>
    </div>
  );
};
