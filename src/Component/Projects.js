import React from "react";

const Projects = () => {
  return (
    <>
      <section className="project-section-home">
        <div className="auto-container">
          <div className="sec-title style-two centered">
            <h2>
              Our <span>Projects</span>
            </h2>
            <div className="separator" />
          </div>
          <div className="projects-carousel owl-carousel owl-theme">
            <div className="item">
              <div>
                <img src="images/resource/project-1.jpg" alt="" />
              </div>
              <div className="info">
                <h3>
                  <a href="project-single.html">Aqua Residence</a>
                </h3>
                <h4>
                  <a href="project-single.html">Architecture</a>
                </h4>
                <a href="project-single.html">
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="item">
              <div>
                <img src="images/resource/project-2.jpg" alt="" />
              </div>
              <div className="info">
                <h3>
                  <a href="project-single.html">Box Perspective</a>
                </h3>
                <h4>
                  <a href="project-single.html">Engineering</a>
                </h4>
                <a href="project-single.html">
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="item">
              <div>
                <img src="images/resource/project-3.jpg" alt="" />
              </div>
              <div className="info">
                <h3>
                  <a href="project-single.html">Bricks High</a>
                </h3>
                <h4>
                  <a href="project-single.html">Consulting</a>
                </h4>
                <a href="project-single.html">
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="item">
              <div>
                <img src="images/resource/project-4.jpg" alt="" />
              </div>
              <div className="info">
                <h3>
                  <a href="project-single.html">Rustic Nature</a>
                </h3>
                <h4>
                  <a href="project-single.html">Interior</a>
                </h4>
                <a href="project-single.html">
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="item">
              <div>
                <img src="images/resource/project-5.jpg" alt="" />
              </div>
              <div className="info">
                <h3>
                  <a href="project-single.html">Pool Party</a>
                </h3>
                <h4>
                  <a href="project-single.html">Construction</a>
                </h4>
                <a href="project-single.html">
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="item">
              <div>
                <img src="images/resource/project-6.jpg" alt="" />
              </div>
              <div className="info">
                <h3>
                  <a href="project-single.html">Bar Concept</a>
                </h3>
                <h4>
                  <a href="project-single.html">Interior</a>
                </h4>
                <a href="project-single.html">
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="text-center">
          <a href="projects.html" className="theme-btn btn-style-one">
            more projects
          </a>
        </div>
      </section>
    </>
  );
};

export default Projects;
