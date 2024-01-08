import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [username, setUsername] = useState("YOU NAME");

  return (
    <nav id="navbar">
      <ul>
        <a href="#">
          <li>Home</li>
        </a>
        <a href="#">
          <li>Contact</li>
        </a>
        <a href="#">
          <li>About</li>
        </a>
      </ul>

      <div className="nav-details">
        <p
          className="nav-username"
          onClick={() => {
            setUsername("Dilshod");
          }}
        >
          {" "}
          {username}{" "}
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
