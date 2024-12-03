import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>PDF Editor</h1>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <NavLink
              to="/upload"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Upload
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/viewer"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Viewer
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/editor"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Editor
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/save"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Save
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
