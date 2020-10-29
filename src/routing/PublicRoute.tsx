import React from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";

interface RouteProps {
  isAuthenticated: boolean;
  component: React.ComponentType<RouteProps>;
  exact?: boolean;
  path: string;
}

export const PublicRoute: React.FC<RouteProps> = ({
  component,
  isAuthenticated,
  ...rest
}) => {
  const routeComponent = (props: any) =>
    !isAuthenticated ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{ pathname: "/" }} />
    );
  return <Route {...rest} render={routeComponent} />;
};

PublicRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
