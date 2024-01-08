import React from "react";

const Person = (props) => {
  console.log(props);
  return (
    <div>
      {/* Hi Am a Person component! My name is {props.name}. I am {props.age} years
      old! */}
    </div>
  );
};

export default Person;
