import { useState } from "react";

const User = ({ data }) => {
  const [user, setUser] = useState(data);

  const updateUser = () => {
    setUser({ ...data, fname: "Bob", age: 7, street: "berlin" });
  };

  return (
    <div>
      <h1>User</h1>
      <h2>First name: {user.fname}</h2>
      <h2>Last name: {user.lname}</h2>
      <h2>Age: {user.age}</h2>
      <h2>Country: {user.country}</h2>
      <h2>Street: {user.street}</h2>
      <button onClick={updateUser}>Update user</button>
    </div>
  );
};

export default User;
