import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

function FooterChild() {
  const { userEmail } = useContext(UserContext);
  return <h3>FooterChild and Value with out props : {userEmail}</h3>;
}

export default FooterChild;
