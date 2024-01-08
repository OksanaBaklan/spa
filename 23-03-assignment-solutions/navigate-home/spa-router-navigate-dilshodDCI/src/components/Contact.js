import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Contact</h1>
      <button onClick={() => navigate("/home")}>Submit</button>
    </>
  );
};

export default Contact;
