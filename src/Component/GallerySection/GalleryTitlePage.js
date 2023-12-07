import React from "react";
import { Link } from "react-router-dom";
const GalleryTitlePage = () => {
  return (
    <section
      className="page-title"
      style={{ backgroundImage: "url(images/background/3.jpg)" }}
    >
      <div className="auto-container">
        <h1>Gallery</h1>
        <ul className="bread-crumb clearfix">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#2">Pages</a>
          </li>
          <li className="active">Gallery</li>
        </ul>
      </div>
    </section>
  );
};

export default GalleryTitlePage;
