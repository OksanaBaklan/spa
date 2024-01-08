import React, { useState } from "react";
import MySpinner from "../images/spinner-solid.svg";
import "./ImgItem.css";

function ImgItem(props) {
  const { imageLink } = props;
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="image-card">
      {/* I wana show the link value here */}
      {/* I want to create a condition in which i will check
      either my image is loaded or not.
      if not loaded i want to render a spinner instead of the imaege
      - But as soon as my image is fully loaded i want to hid the spinner
      and render the image */}

      <img src={MySpinner} style={{ height: 20, width: 20 }} className={(loaded?"hide": "show spinner") + "spinner"} />
      <img
        src={imageLink}
        style={{ width: 200, height: 200 }}
        onLoad={() => setLoaded(true)}
        className={loaded?"show": "hide"}
      />
    </div>
  );
}

export default ImgItem;
