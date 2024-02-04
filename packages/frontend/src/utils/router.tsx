import { Route, RouteSectionProps } from "@solidjs/router";
import { Component } from "solid-js";

type Route = {
  path: string;
  component: Component<RouteSectionProps>;
  children?: Route[];
};

const renderRoutes = (routes: Route[]) => {
  return routes.map((route) => {
    const { path, component, children } = route;
    return (
      <>
        <Route path={path} component={component} />
        {children && (
          <Route path={path} component={component}>
            {renderRoutes(children)}
          </Route>
        )}
      </>
    );
  });
};

export type { Route };
export { renderRoutes };
