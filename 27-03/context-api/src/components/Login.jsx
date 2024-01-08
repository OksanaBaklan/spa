import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

function Login() {
  /*  const {setUserEmail} = props */
  const { setUserEmail } = useContext(UserContext);

  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const loginHandler = () => {
    setUserEmail(email);
    navigate("/dashboard");
  };

  const changeHandler = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div>
      <div>
        <input
          type="email"
          placeholder="Enter Your Email"
          onChange={changeHandler}
          value={email}
        />
      </div>
      <div>
        <input type="password" placeholder="Enter Your Password" />
      </div>
      <div>
        <button onClick={loginHandler}> Login </button>
      </div>
    </div>
  );
}

export default Login;
