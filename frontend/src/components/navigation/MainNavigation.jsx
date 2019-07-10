import React from "react";
import { NavLink } from "react-router-dom";
import './MainNavigation.css';

const MainNavigation = props => (
  <header className="main-navigation">
    <div className="main-navigation__logo">
      <h1>EasyEvent</h1>
    </div>
    <nav className="main-navigation__items">
      <ul>
        <li>
          <NavLink to="/auth">Authenticate</NavLink>
        </li>
        <li>
          <NavLink to="/addWord">AddWord</NavLink>
        </li>
        <li>
          <NavLink to="/records">Records</NavLink>
        </li>
        <li>
          <NavLink to="/games">Game</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default MainNavigation;
