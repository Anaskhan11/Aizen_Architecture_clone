import React from "react";
import Slider from "react-slick";

import "../styles/Project.css";

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
          <Slider {...settings} className="projects-carousel">
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
            {/*  */}
            <div className="item">
              <div>
                <img src="/images/resource/project-3.jpg" alt="" />
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
                <img src="/images/resource/project-4.jpg" alt="" />
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
                <img src="/images/resource/project-5.jpg" alt="" />
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
                <img src="/images/resource/project-6.jpg" alt="" />
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
            {/* Add similar items for other projects */}
          </Slider>
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
