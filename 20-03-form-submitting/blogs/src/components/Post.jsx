import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";

import axios from "axios";

const Post = ({ details, setPosts, getPosts }) => {
  const fillFormForUpdate = (id) => {
    const updatingPost = details.find((detailsobj) => detailsobj._id === id);
    //console.log("Updating post: ", updatingPost);
    setPosts(updatingPost);
  };

  const deleteBtn = async (id) => {
    await axios.delete(`https://dilshod.onrender.com/posts/${id}`);
    getPosts();
  };
  return (
    <div>
      {details?.length !== 0 ? (
        details?.map((obj) => (
          <div className="cards" key={obj._id}>
            <h4>Title: {obj.title}</h4>
            <h4>Message: {obj.message}</h4>
            <h4>Author: {obj.author}</h4>

            <hr />
            <button className="deletebtn" onClick={() => deleteBtn(obj._id)}>
              <FontAwesomeIcon icon={faTrash} />
            </button>

            <button
              className="update-icon"
              onClick={() => fillFormForUpdate(obj._id)} //_id: hdjsdhs6s7d6s7d6
            >
              <FontAwesomeIcon icon={faPen} />
            </button>
          </div>
        ))
      ) : (
        <h3>Loading ...</h3>
      )}
    </div>
  );
};

export default Post;
