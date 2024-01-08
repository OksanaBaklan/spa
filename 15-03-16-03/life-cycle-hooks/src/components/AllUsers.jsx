import React, { useEffect } from "react";
import { useState } from "react";
import UserCard from "./UserCard";

function AllUsers(props) {
  const { count, spinnerHandler } = props;

  // Declaring a state variable to check either we have Count as props or not
  const [gotCountAsProp, setGotCountAsProp] = useState(false);

  // Declaring a state variable to store the response of jsonplaceholder-API request

  const [usersList, setUsersList] = useState([]);

  // Mounting stage
  useEffect(() => {
    spinnerHandler();
    console.log(
      "Rendered all users only once when every the component is mounted first time"
    );

    // When ever there is an empty array as dependency the call back will run only once .. only once when the
    // component is first time MOUNTED

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        setUsersList(json);
        spinnerHandler();
      });

    /* The call back in the return statement will execute when ever this component that
      is AllUser.jsx is unmounted / destroyed from the DOM */
    return () => {
      console.log(
        "This log is coming as soon as we have unmounted this All Users component"
      );
    };
  }, []);

  // Updating Stage

  useEffect(() => {
    console.log("Rendered with Count as dependency element");

    // When ever there is an element in  dependency array the call back will be executed when ever there is a change
    // in the value of the element.
  }, [count]);

  // Endless looop
  useEffect(() => {
    console.log("When there is no dependency array");

    // is there some count? as per our above code
    if (props.count || props.count === 0) setGotCountAsProp(true);

    // When ever there is no dependency array the call back will be executed when ever time when the component rerenders
    // Be carefull it could end up with unlimited loop....
  });

  // Declaring deleteHandler to delete a specific user card. Then we will pass that deleteHandler to child Component
  // UserCard.jsx as props . this function will accept id of the user as parameter.

  const deleteHandler = (passedUserId) => {
    /* console.log(passedUserId) */
    // To remove a specific user from userList array i will use the userId to filter the array
    // secondly i will update the userList state variable with setUserList with new filtered array.

    const filteredArray = usersList.filter((user) => user.id !== passedUserId);
    setUsersList(filteredArray);

    // Another way to do the above steps in online

    /* setUsersList(oldList => [...oldList.filter(user=> user.id !== passedUserId)]) */
  };
  return (
    <div className="all-users">
      {/* Mapping UserList to render user cards */}
      {usersList.map((item, index) => (
        <UserCard
          key={index}
          indexId={index}
          user={item}
          deleteHandler={deleteHandler}
        />
      ))}

      {/* If you dont use the map method then you may need to hardcode all the UserCard component like below  */}

      {/*  <UserCard key={1} indexId={1} user={usersList[0]} deleteHandler={deleteHandler}/>
            <UserCard key={2} indexId={2} user={usersList[1]} deleteHandler={deleteHandler}/>
            <UserCard key={3} indexId={3} user={usersList[2]} deleteHandler={deleteHandler}/>
            <UserCard key={4} indexId={4} user={usersList[3]} deleteHandler={deleteHandler}/>
            <UserCard key={5} indexId={5} user={usersList[4]} deleteHandler={deleteHandler}/>
            <UserCard key={6} indexId={6} user={usersList[5]} deleteHandler={deleteHandler}/>
            <UserCard key={7} indexId={7} user={usersList[6]} deleteHandler={deleteHandler}/> */}
    </div>
  );
}

export default AllUsers;
