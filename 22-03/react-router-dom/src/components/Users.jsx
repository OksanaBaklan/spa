import React, { useEffect, useState } from "react";
import {Link, Outlet, useNavigate } from "react-router-dom";

function Users(props) {
  const { auth } = props;

  const [userList, setUserList] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUserList(json));
  }, []);

  const navigate = useNavigate();

  return (
    <div>
      <h2>My Users Component</h2>
      {auth ? (
        <>
          <ul>
            {userList.map((user) => (
              <li>
                <Link to={`${user.id}`}>{user.name}</Link>
              </li>
            ))}
          </ul>
          <Outlet />
        </>
      ) : (
        // <Navigate to="/login" />
        navigate("/login")
      )}

      {/* <ul>
        <li>
          <Link to="/users/firstuser">First Product</Link>
        </li>
        <li>
          <Link to="/users/seconduser">Second Product</Link>
        </li>
        <li>
          <Link to="/users/thirduser">Third Product</Link>
        </li>
      </ul> */}

      <Outlet />
      <ul>
        {userList.map((user) => (
          <li>
            <Link to={`/users/${user.id}`}>{user.id}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
