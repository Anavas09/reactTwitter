import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { map } from "lodash";

import pagesRoutes from "./configRouting";

function Routing() {
  return (
    <Router>
      <Switch>
        {map(pagesRoutes, (route, index) => {
          return (
            <Route key={index} path={route.path} exact={route.exact}>
              <route.page />
            </Route>
          )
        })}
        <Route />
      </Switch>
    </Router>
  );
}

export default Routing;