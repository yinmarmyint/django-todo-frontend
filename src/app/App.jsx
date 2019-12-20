import React from "react";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../store/store";
import Todo from "../pages/todos/Todo";

function App() {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={Todo} />
      </Switch>
    </ConnectedRouter>
  );
}

export default App;
