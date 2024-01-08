import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  const listStyling = {
    listStyle: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };
  const linkStyling = {
    padding:"10px",
    border:"2px solid blue"
  }
  return (
    <ul style={listStyling}>
      <li>
        <Link style= {linkStyling} to="/">Home</Link>
      </li>
      <li>
        <Link style= {linkStyling} to="/one">Child One</Link>
      </li>
      <li>
        <Link style= {linkStyling}  to="/two">Child Two</Link>
      </li>
      <li>
        <Link style= {linkStyling}  to="/last">Last Child</Link>
      </li>
    </ul>
  );
}

export default NavBar;
