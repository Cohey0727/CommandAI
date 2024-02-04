import { Route, RouteSectionProps } from "@solidjs/router";
import { Component, JSX } from "solid-js";

type ParentRouteProps = {
  children: JSX.Element[];
};

type ChildRouteProps = {};

type Route = {
  path: string;
  component: Component<RouteSectionProps>;
  children?: Route[];
};

const renderRoutes = (routes: Route[]) => {
  return routes.map((route) => {
    const { path, component, children } = route;
    return (
      <Route path={path} component={component}>
        {route.children && renderRoutes(route.children)}
      </Route>
    );
  });
};

export type { Route };
export { renderRoutes };
