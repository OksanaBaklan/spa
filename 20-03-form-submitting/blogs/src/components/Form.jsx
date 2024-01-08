import React from "react";

import { useEffect, useState } from "react";

import axios from "axios";
import Post from "./Post";

const Form = () => {
  const [posts, setPosts] = useState({
    title: "",
    message: "",
    author: "",
  });

  const [notification, setNotification] = useState();
  const [details, setDetails] = useState([]);

  async function getPosts() {
    try {
      const response = await axios.get("https://dilshod.onrender.com/posts");
      setDetails(response.data);
      setNotification(null);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    console.log("useEffect hook ....!");
    getPosts();
  }, [notification]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("https://dilshod.onrender.com/posts", posts);
    setPosts({
      title: "",
      message: "",
      author: "",
    });

    // set notification
    setNotification("banana");
  };

  const cancelBtn = () => {
    setPosts({
      title: "",
      message: "",
      author: "",
    });
  };

  const changeHandler = (e) =>
    setPosts({ ...posts, [e.target.name]: e.target.value });

  const updateBtn = async () => {
    //console.log("Check ID: ", _id);
    await axios.patch(`https://dilshod.onrender.com/posts/${posts._id}`, posts);
    console.log("Post id is: ", posts._id);
    setNotification("GET");
    cancelBtn();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="block">
          <label htmlFor="t">Title: </label>
          <input
            type="text"
            id="t"
            name="title"
            required
            value={posts.title}
            onChange={changeHandler}
          />
        </div>

        <div className="block">
          <label htmlFor="m">Message: </label>
          <input
            type="text"
            id="m"
            name="message"
            required
            value={posts.message}
            onChange={changeHandler}
          />
        </div>

        <div className="block">
          <label htmlFor="a">Author: </label>
          <input
            type="text"
            id="a"
            name="author"
            required
            value={posts.author}
            onChange={changeHandler}
          />
        </div>

        <button className="submitbtn">Submit</button>
        <button className="cancelbtn" onClick={cancelBtn}>
          Cancel
        </button>

        <button className="updatebtn" onClick={updateBtn}>
          Update
        </button>
      </form>

      <Post details={details} setPosts={setPosts} getPosts={getPosts} />
    </div>
  );
};

export default Form;
