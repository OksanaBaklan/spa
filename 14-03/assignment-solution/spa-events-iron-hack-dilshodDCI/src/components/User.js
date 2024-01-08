import React from "react";

const User = ({ bootcampName }) => {
  return (
    <div>
      <h2 style={{ backgroundColor: bootcampName.backColor }}>
        Welcome to {bootcampName.bootcamp}
      </h2>
    </div>
  );
};

export default User;
