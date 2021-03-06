import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import { RouteProps } from "./RouteProps";
import { Routes } from "./routes";

export const PrivateRoute: React.FC<RouteProps> = ({
  component,
  ...rest
}: RouteProps) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Redirect to={{ pathname: Routes.AUTH }} />;
  }
  return (
    <Route
      {...rest}
      render={(props: any) => {
        return React.createElement(component, props);
      }}
    />
  );
};
