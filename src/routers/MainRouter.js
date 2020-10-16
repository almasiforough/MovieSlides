import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Movies from "../screens/Movies";

export default function MainRouter() {
  return (
    <Switch>
      <Route path='/movies'>
        <Movies />
      </Route>
      <Route path='/'>
        <Redirect to='/movies' />
      </Route>
    </Switch>
  );
}
