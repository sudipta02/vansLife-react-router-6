import React from "react";
import { NavLink, Link } from "react-router-dom";
import loginImageUrl from "../assets/images/avatar-icon.png";

export default function Header() {
  return (
    <header>
      <Link className="site-logo" to="/">
        #VanLife
      </Link>
      <nav>
        <NavLink
          to="/host"
          className={({ isActive }) => (isActive ? "main-nav-link" : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "main-nav-link" : null)}
        >
          About
        </NavLink>
        <NavLink
          to="/vans"
          className={({ isActive }) => (isActive ? "main-nav-link" : null)}
        >
          Vans
        </NavLink>
        <Link to="login" className="login-link">
          <img src={loginImageUrl} className="login-icon" />
        </Link>
      </nav>
    </header>
  );
}
