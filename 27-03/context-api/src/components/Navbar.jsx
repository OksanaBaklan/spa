import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/userContext";

function Navbar() {
  const navStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    listStyle: "none",
  };

  const { userEmail } = useContext(UserContext);

  return (
    <ul style={navStyle}>
      <li>Welcome {userEmail}</li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
}

export default Navbar;
