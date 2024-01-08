/** @format */

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import { Routes, Route, Outlet } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Users from "./components/Users";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
import { useState } from "react";
import NavBar from "./components/NavBar";
import SingleUser from "./components/SingleUser";
import UsersList from "./components/UsersList";
import Login from "./components/Login";

function App() {
  const [authorized, setAuthorized] = useState(false);
  return (
    <div className="App">
      React-Router-Dom
      <NavBar />
      {/* In Routes component i will define all of the routes
      and their respective components of my Application */}
      <Routes>
        {/*  We will define  our paths and components in side the Route*/}
        <Route path="/users" element={<Users auth={authorized} />}>
          <Route index element={<UsersList />} />
          <Route path="/users/:userId" element={<SingleUser />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />

        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
/* Third Party Component Library reactstrap Installed
<button>Normal Button</button>
<div>
  <Button color='danger'>
    Button From Reactstrap
  </Button>
</div> */
