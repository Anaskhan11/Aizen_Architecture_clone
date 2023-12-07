import React from "react";
import Slider from "react-slick";

import "./ProjectSingleSection.css";
import { Link } from "react-router-dom";

const ProjectSingleSection = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div>
        <section className="project-single-section">
          <div className="auto-container">
            {/* Project Single Info */}
            <div className="project-single-info">
              {/* Project Picture Slider */}
              <Slider
                {...sliderSettings}
                className="project-pic project-single-slider"
              >
                <div>
                  <img src="/images/projects/project-single-1.jpg" alt="" />
                </div>
                <div>
                  <img src="/images/projects/project-single-2.jpg" alt="" />
                </div>
                <div>
                  <img src="/images/projects/project-single-3.jpg" alt="" />
                </div>
              </Slider>

              {/* Project Info */}
              <div className="project-info">
                <h3>Modern 2 Storey House with Roofdeck & Swimming Pool</h3>
                <ul>
                  <li>
                    <span>Area: </span> 220 m2
                  </li>
                  <li>
                    <span>Built-up Area: </span> 186 m2
                  </li>
                  <li>
                    <span>Stories: </span> 2
                  </li>
                  <li>
                    <span>Rooms: </span> 4
                  </li>
                  <li>
                    <span>Baths: </span> 3
                  </li>
                  <li>
                    <span>Location: </span> Denver, USA
                  </li>
                </ul>
              </div>
            </div>

            <div className="row content">
              <div className="col col-md-12 col-sm-12 col-xs-12">
                <div className="overview">
                  <h2>Project Overview</h2>
                  <p>
                    The house is meant for those who like modern, simple
                    architectural forms. This is a storey house, with just the
                    ground floor. The house was designed to have both day and
                    night zone. Through the windshield, you enter into the
                    living room lobby. The living and the dining room have the
                    view on the garden and the pool for your relaxation. In the
                    night zone, there are three bedrooms, with large glass
                    surfaces, blending them into the exterior. There are also
                    two bathrooms (one with the entrance from the master
                    bedroom, the other from the hallway) and a closet. The
                    built-up area of the house makes for 186 m2.
                  </p>
                  <p>
                    The owners were determined at the outset to preserve the
                    natural setting — in their words, “considering the violence
                    it is about to undergo and has already undergone”. They
                    ruled out lawns and landscaping, decks and patios — the
                    outside is appreciated from the interior. They wanted the
                    house filled with light and sun, especially in winter, when
                    they hoped it might enter “with as much force as possible”.
                  </p>
                </div>
              </div>
            </div>
            <div className="row content">
              <div className="col col-md-6 col-sm-12 col-xs-12">
                <div className="challenge">
                  <h3>Challenge</h3>
                  <p>
                    The home and site itself must be the design. We are
                    interested in a home that blurs the usual
                    residential/commercial design divisions. We imagine the home
                    to be one floor. We are very interested in commercial
                    engineered building materials including poured concrete or
                    steel framing.
                  </p>
                  <ul>
                    <li>
                      <i className="far fa-check-circle" /> Build a house with
                      contemporary design elements and a modernist look
                    </li>
                    <li>
                      <i className="far fa-check-circle" /> Create the house in
                      an undisturbed natural setting
                    </li>
                    <li>
                      <i className="far fa-check-circle" /> Fill the house with
                      light and sun
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col col-md-6 col-sm-12 col-xs-12">
                <div className="challenge">
                  <h3>Solutions</h3>
                  <p>
                    In a woodland setting, this balancing act required special
                    care: on the one hand minimizing the destruction wrought by
                    site preparation; on the other, clearing enough vegetation
                    to flood the interior with light. The house sits cleanly and
                    conspicuously on a ledge on the hillside.
                  </p>
                  <ul>
                    <li>
                      <i className="far fa-check-circle" /> Build a house with
                      contemporary design elements and a modernist look
                    </li>
                    <li>
                      <i className="far fa-check-circle" /> Create the house in
                      an undisturbed natural setting
                    </li>
                    <li>
                      <i className="far fa-check-circle" /> Fill the house with
                      light and sun
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col col-md-12 col-sm-12 col-xs-12">
                <div className="prev-next">
                  <ul>
                    <li>
                      <Link to="/projects">
                        <i className="fas fa-arrow-left" /> Prev Project
                      </Link>
                    </li>
                    <li>
                      <Link to="/projects">
                        Next Project <i className="fas fa-arrow-right" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProjectSingleSection;
