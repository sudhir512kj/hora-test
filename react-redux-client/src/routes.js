import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./containers/App";
import Tasks from "./containers/Tasks";
import Task from "./containers/Task";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Tasks} />
    <Route path="/:id" component={Task} />
  </Route>
);
