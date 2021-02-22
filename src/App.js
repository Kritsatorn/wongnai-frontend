import React from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { SearchContextProvider } from "./context/SearchContext";
function App() {
  return (
    <Switch>
      <Route path="/">
        <SearchContextProvider>
          <HomePage />
        </SearchContextProvider>
      </Route>
    </Switch>
  );
}
export default App;
