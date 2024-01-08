import React, { useContext, useEffect } from "react";

import UserContext from "../store/user-context";

const Main = () => {
  const ctx = useContext(UserContext);

  // useEffect(() => {
  //   ctx.dispatch({ type: "Nicolea" });
  // }, []);

  return (
    <div>
      <h1>Main</h1>
      <button
        onClick={() => {
          ctx.user ? ctx.setUser(false) : ctx.setUser(true);
        }}
      >
        {ctx.user ? "Logout" : "Login"}
      </button>
      <br /> <br />
      <button onClick={() => ctx.dispatch({ type: "get-name" })}>
        Get random name
      </button>
      <button onClick={() => ctx.dispatch({ type: "Nicolea" })}>
        Press me
      </button>
      <p>{ctx.state}</p>
    </div>
  );
};

export default Main;
