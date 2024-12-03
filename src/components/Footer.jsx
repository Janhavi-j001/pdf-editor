import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} PDF Editor. All Rights Reserved.</p>
      <ul className="footer-links">
        <li>
          <a href="#privacy-policy">Privacy Policy</a>
        </li>
        <li>
          <a href="#terms-of-service">Terms of Service</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
