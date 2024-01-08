import React, { useRef } from "react";

function Home() {
  const inputUsername = useRef();

  const handleChange = () => {
    console.log(inputUsername.current.value);
  };

  return (
    <>
      <h2>Home Component</h2>
      <input
        type="text"
        name="username"
        ref={inputUsername}
        onChange={handleChange}
      />
    </>
  );
}

export default Home;
