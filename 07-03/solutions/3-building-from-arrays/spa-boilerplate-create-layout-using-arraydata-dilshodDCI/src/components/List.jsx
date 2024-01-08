import React from "react";

const List = () => {
  const navlinkItems = [
    <li className="nav-item">
      <a className="nav-link" href="#">
        Link to google.com
      </a>
    </li>,
    <li className="nav-item">
      <a className="nav-link" href="#">
        Link to facebook.com
      </a>
    </li>,
    <li className="nav-item">
      <a className="nav-link" href="#">
        Link to amazon.com
      </a>
    </li>,
  ]; // only update the value of this array

  return <ul className="nav">{navlinkItems}</ul>;
};

export default List;
