import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <h1>This is Header</h1>
      <nav>
        <a href="/Home">Home</a>
        <a href="/component">Component</a>
        <a href="/abuout">About</a>
      </nav>
    </div>
  );
};

export default Header;
