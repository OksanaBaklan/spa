import React, { useContext } from "react";

import UserContext from "../store/user-context";

const Login = () => {
  const ctx = useContext(UserContext);

  return ctx.user ? "User is logged in" : "Log in first!";
};

export default Login;
