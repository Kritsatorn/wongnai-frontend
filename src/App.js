import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
