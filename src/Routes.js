import React from "react";
import App from "./App";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/home" component={App} />
      <Redirect from="/" to="/home" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
