import React from "react";

export interface RouteProps {
    component: React.ComponentType<RouteProps>;
    exact?: boolean;
    path: string;
}
