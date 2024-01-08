import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

function UsersList() {
  
    const [userList, setUserList] = useState([]);
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => setUserList(json));
    }, []);
    return (
      <div>
        <h2>My Users List Component</h2>
        <ul>
          {userList.map((user) => (
            <li>
              <Link to={`/users/${user.id}`}>{user.id}</Link>
            </li>
          ))}
        </ul>
      </div>)
}

export default UsersList
