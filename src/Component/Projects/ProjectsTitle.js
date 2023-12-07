import React from "react";
import { Link } from "react-router-dom";

const ProjectsTitle = () => {
  return (
    <>
      <section
        className="page-title"
        style={{ backgroundImage: "url(/images/background/3.jpg)" }}
      >
        <div className="auto-container">
          <h1>Our Projects</h1>
          <ul className="bread-crumb clearfix">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="active">Projects</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default ProjectsTitle;
