import React from "react";
import { Link } from "react-router-dom";
const PageTitle = () => {
  return (
    <section
      className="page-title"
      style={{ backgroundImage: "url(images/background/2.jpg)" }}
    >
      <div className="auto-container">
        <h1>About Us</h1>
        <ul className="bread-crumb clearfix">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="active">About Us</li>
        </ul>
      </div>
    </section>
  );
};

export default PageTitle;
