import React from "react";
import About from "../components/About";
import Projects from "../components/Projects";
import Login from "../components/Login";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <About />
        </li>
        <li>
          <Projects />
        </li>
        <li style={{ float: "right" }}>
          <Login />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
