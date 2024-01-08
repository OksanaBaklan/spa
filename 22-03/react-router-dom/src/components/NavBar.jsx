import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  const listStyles = {
    listStyle: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };
  return (
    <ul style={listStyles}>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/users">Users</NavLink>
      </li>
      <li>
        <Link to="/about-us">About us</Link>
      </li>
      <li>
        <Link to="/login">Login here</Link>
      </li>
    </ul>
  );
}

export default NavBar;
