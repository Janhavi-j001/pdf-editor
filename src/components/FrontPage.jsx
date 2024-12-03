import React from "react";
import { Link } from "react-router-dom";
import "../styles/FrontPage.css";

const FrontPage = () => {
  return (
    <div className="front-page">
      <header className="front-header">
        <h1>Welcome to PDF Editor</h1>
        <p>Edit, annotate, and manage your PDF documents seamlessly.</p>
        <Link to="/editor" className="edit-pdf-button">
          Edit PDF
        </Link>
      </header>
    </div>
  );
};

export default FrontPage;
