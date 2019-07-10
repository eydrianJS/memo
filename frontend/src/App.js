import React, { useState } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Auth from "./pages/Auth";
import AddWord from "./pages/AddWord";
import Records from "./pages/Records";
import Games from "./pages/Games";
import AuthContext from "./context/auth-context";

import MainNavigation from "./components/navigation/MainNavigation";

import "./App.css";

function App() {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const login = (token, userId, tokenExpiration) => {
    setToken(token);
    setUserId(userId);
  };
  const logout = () => {
    setToken(null);
    setUserId(null);
  };
  return (
    <BrowserRouter>
      <AuthContext.Provider
        value={{ token: token, userId: userId, login: login, logout: logout }}
      >
        <MainNavigation />
        <main className="main-content">
          <Switch>
            <Redirect from="/" to={!token ?"/auth": "/games"} exact />
            {!token && <Route path="/auth" component={Auth} />}
            {token &&<Route path="/addWord" component={AddWord} />}
            <Route path="/records" component={Records} />
            <Route path="/games" component={Games} />
          </Switch>
        </main>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
