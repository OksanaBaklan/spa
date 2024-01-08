import "./App.css";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Contact from "./components/Contact";
import { useState } from "react";
import { UserContext } from "./context/userContext";
import NonContextComponent from "./components/NonContextCompoent";

function App() {
  const [userEmail, setUserEmail] = useState("");
  return (
    <div className="App">
      <UserContext.Provider
        value={{ userEmail: userEmail, setUserEmail: setUserEmail }}
      >
        <Navbar />

        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </UserContext.Provider>

      <NonContextComponent />
    </div>
  );
}

export default App;
