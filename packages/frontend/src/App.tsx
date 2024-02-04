import type { Component } from "solid-js";
import { Router, Route } from "@solidjs/router";
import { renderRoutes } from "src/utils/router";
import routes from "./routes";

const App: Component = () => {
  return <Router>{renderRoutes(routes)}</Router>;
};

export default App;
