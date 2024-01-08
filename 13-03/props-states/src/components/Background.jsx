import React from "react";

const Background = () => {
  return (
    <div>
      <button
        onClick={() => {
          document.body.style.backgroundColor =
            "#" + Math.floor(Math.random() * 16777215).toString(16);
        }}
      >
        Change background
      </button>
    </div>
  );
};

export default Background;
