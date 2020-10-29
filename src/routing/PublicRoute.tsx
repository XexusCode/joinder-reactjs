import React from "react";
import {Redirect, Route} from "react-router-dom";
import {useAuth} from "./useAuth";
import {RouteProps} from "./RouteProps";
import {Routes} from "./routes";

export const PublicRoute: React.FC<RouteProps> = ({
  component,
  ...rest
}: RouteProps) => {
  const {isAuthenticated} = useAuth();
  if (isAuthenticated) {
    return <Redirect to={{ pathname: Routes.HOME }} />;
  }
  return <Route {...rest} render={(props: any) => {
    return React.createElement(component, props)
  }} />;
};
