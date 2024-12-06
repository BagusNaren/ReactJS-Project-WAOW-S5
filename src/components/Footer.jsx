import React from "react";
import "../styles/Footer.css"; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 WAOW. All rights reserved.</p>
        <nav>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;