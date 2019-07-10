import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Auth from "./pages/Auth";
import AddWord from "./pages/AddWord";
import Records from "./pages/Records";
import Games from "./pages/Games";

import MainNavigation from "./components/navigation/MainNavigation"

import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <MainNavigation/>
      <main className="main-content">
        <Switch>
          <Redirect from="/" to="/auth" exact/>
          <Route path="/auth" component={Auth} />
          <Route path="/addWord" component={AddWord} />
          <Route path="/records" component={Records} />
          <Route path="/games" component={Games} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
