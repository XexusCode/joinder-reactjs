import React from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";

interface RouteProps {
  isAuthenticated: boolean;
  component: React.ComponentType<RouteProps>;
  exact?: boolean;
  path: string;
}

export const PrivateRoute: React.FC<RouteProps> = ({
  component,
  isAuthenticated,
  ...rest
}) => {
  const routeComponent = (props: any) =>
    isAuthenticated ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{ pathname: "/auth" }} />
    );
  return <Route {...rest} render={routeComponent} />;
};

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
