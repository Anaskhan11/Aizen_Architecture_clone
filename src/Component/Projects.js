import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
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
          <OwlCarousel className="projects-carousel">
            <div className="item">
              <div>
                <img src="/images/resource/project-1.jpg" alt="" />
              </div>
              <div className="info">
                <h3>
                  <a href="project">Aqua Residence</a>
                </h3>
                <h4>
                  <a href="project">Architecture</a>
                </h4>
                <a href="project">
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="item">
              <div>
                <img src="/images/resource/project-2.jpg" alt="" />
              </div>
              <div className="info">
                <h3>
                  <a href="project">Box Perspective</a>
                </h3>
                <h4>
                  <a href="project">Engineering</a>
                </h4>
                <a href="project">
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="item">
              <div>
                <img src="/images/resource/project-3.jpg" alt="" />
              </div>
              <div className="info">
                <h3>
                  <a href="project">Bricks High</a>
                </h3>
                <h4>
                  <a href="project">Consulting</a>
                </h4>
                <a href="project">
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="item">
              <div>
                <img src="/images/resource/project-4.jpg" alt="" />
              </div>
              <div className="info">
                <h3>
                  <a href="project">Rustic Nature</a>
                </h3>
                <h4>
                  <a href="project">Interior</a>
                </h4>
                <a href="project">
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="item">
              <div>
                <img src="/images/resource/project-5.jpg" alt="" />
              </div>
              <div className="info">
                <h3>
                  <a href="project">Pool Party</a>
                </h3>
                <h4>
                  <a href="project">Construction</a>
                </h4>
                <a href="project">
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="item">
              <div>
                <img src="/images/resource/project-6.jpg" alt="" />
              </div>
              <div className="info">
                <h3>
                  <a href="project">Bar Concept</a>
                </h3>
                <h4>
                  <a href="project">Interior</a>
                </h4>
                <a href="project">
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
          </OwlCarousel>
        </div>
        <br />
        <div className="text-center">
          <a href="projects" className="theme-btn btn-style-one">
            more projects
          </a>
        </div>
      </section>
    </>
  );
};

export default Projects;
