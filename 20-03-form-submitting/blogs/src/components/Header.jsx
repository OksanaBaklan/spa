import React from "react";
import { MubashersHeader, Paragraph } from "./Header.style";

function Header() {
  return (
    <div>
      <MubashersHeader>Create a new post: </MubashersHeader>
      <p>CRUD - Create (POST), Read (GET), Update (PATCH), Delete (DELETE)</p>

      <Paragraph myColor="red">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
      </Paragraph>

      <Paragraph myColor="blue">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Paragraph>
    </div>
  );
}

export default Header;
