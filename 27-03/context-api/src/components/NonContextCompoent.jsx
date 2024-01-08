import React from "react";
/* import { useContext } from "react";
import { UserContext } from "../context/userContext"; */

function NonContextComponent() {
 /*  const { userEmail } = useContext(UserContext); */

 /* It will be an error because This component was not wrapped inside the Context Provider so it 
 will have no access to the values of the Context Provider */

  return (
    <>
      <h3>
        It is Non Context Component that has no access to the USER Context
      </h3>
      {/* <p>Value of Email : {userEmail} </p> */}
    </>
  );
}

export default NonContextComponent;
