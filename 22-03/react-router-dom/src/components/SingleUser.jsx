import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function SingleUser() {
  const params = useParams();
  const { userId } = params;
  console.log(params);

  const [userDetails, setUserDetails] = useState({});
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((json) => setUserDetails(json));
  }, [userId]);
  return (
    <>
      <h2>{userId} details</h2>
      <h5>
        Name: <i>{userDetails.name}</i>
      </h5>
      <h5>
        Username: <i>{userDetails.username}</i>
      </h5>
      <h5>
        E-mail: <i>{userDetails.email}</i>
      </h5>
      <p>{JSON.stringify(userDetails)}</p>

      <h3>
        <Link to="/users">Go Back to Users List"</Link>
      </h3>
    </>
  );
}

export default SingleUser;
