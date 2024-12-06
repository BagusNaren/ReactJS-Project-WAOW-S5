import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>WAOW</h1>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/profile">Profile</a></li>
        <li><a href="/category">Category</a></li>
      </ul>
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        aria-label="Search"
      />
    </nav>
  );
}

export default Navbar;