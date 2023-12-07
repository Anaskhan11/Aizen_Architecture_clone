import React from "react";
import { Link } from "react-router-dom";

const ServiceTitlePage = () => {
  return (
    <section
      className="page-title"
      style={{ backgroundImage: "url(images/background/3.jpg)" }}
    >
      <div className="auto-container">
        <h1>Services</h1>
        <ul className="bread-crumb clearfix">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="active">Our services</li>
        </ul>
      </div>
    </section>
  );
};

export default ServiceTitlePage;
