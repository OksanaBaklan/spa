import React, { useEffect } from "react";

function UserCard(props) {
  const { user, deleteHandler, indexId } = props;

  useEffect(() => {
    console.log("Card Component Mounted");
    return () => {
      console.warn("Card is unmounted");
    };
  }, []);

  if (!user) return <></>;

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title text-warning">{user.name}</h5>
        <h5 className="card-title text-warning">userId: {user.id}</h5>
        {/* <h5 className="card-title text-warning">Index :{indexId}</h5> */}

        <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
        <p className="card-text text-success">{user.company.catchPhrase}</p>
        <button
          className="btn btn-danger"
          onClick={() => deleteHandler(user.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default UserCard;
