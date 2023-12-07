import React from "react";

import "./ProjectSection.css";
import { Link } from "react-router-dom";
const ProjectSection = () => {
  return (
    <>
      <section className="project-section project-page-section">
        <div className="auto-container">
          <div className="mixitup-gallery">
            <div className="filters text-center clearfix">
              <ul className="filter-tabs filter-btns clearfix">
                <li
                  className="active filter"
                  data-role="button"
                  data-filter="all"
                >
                  All
                </li>
                <li
                  className="filter"
                  data-role="button"
                  data-filter=".architecture"
                >
                  Architecture
                </li>
                <li
                  className="filter"
                  data-role="button"
                  data-filter=".consulting"
                >
                  Consulting
                </li>
                <li
                  className="filter"
                  data-role="button"
                  data-filter=".construction"
                >
                  Construction
                </li>
                <li
                  className="filter"
                  data-role="button"
                  data-filter=".engineering"
                >
                  Engineering
                </li>
                <li
                  className="filter"
                  data-role="button"
                  data-filter=".interior"
                >
                  Interior Design
                </li>
                <li
                  className="filter"
                  data-role="button"
                  data-filter=".facility"
                >
                  Facility Optimization
                </li>
              </ul>
            </div>

            {/* Gallery Blocks */}
            <div className="filter-list row clearfix">
              {/* Gallery Block 1 */}
              <div className="gallery-block col-md-4 col-sm-6 col-xs-12">
                <div className="item">
                  <div>
                    <img src="images/projects/project-1.jpg" alt="" />
                  </div>
                  <div className="info">
                    <h3>
                      <Link to="/project-single">Aqua Residence</Link>
                    </h3>
                    <h4>
                      <Link to="/project-single">Architecture</Link>
                    </h4>
                    <Link to="/project-single">
                      <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Gallery Block 2 */}
              <div className="gallery-block col-md-4 col-sm-6 col-xs-12">
                <div className="item">
                  <div>
                    <img src="images/projects/project-2.jpg" alt="" />
                  </div>
                  <div className="info">
                    <h3>
                      <Link to="/project-single">Box Perspective</Link>
                    </h3>
                    <h4>
                      <Link to="/project-single">Engineering</Link>
                    </h4>
                    <Link to="/project-single">
                      <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Gallery Block 3 */}
              <div className="gallery-block col-md-4 col-sm-6 col-xs-12">
                <div className="item">
                  <div>
                    <img src="images/projects/project-3.jpg" alt="" />
                  </div>
                  <div className="info">
                    <h3>
                      <Link to="/project-single">Box Perspective</Link>
                    </h3>
                    <h4>
                      <Link to="/project-single">Engineering</Link>
                    </h4>
                    <Link to="/project-single">
                      <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Gallery Block 4 */}
              <div className="gallery-block col-md-4 col-sm-6 col-xs-12">
                <div className="item">
                  <div>
                    <img src="images/projects/project-4.jpg" alt="" />
                  </div>
                  <div className="info">
                    <h3>
                      <Link to="/project-single">Box Perspective</Link>
                    </h3>
                    <h4>
                      <Link to="/project-single">Engineering</Link>
                    </h4>
                    <Link to="/project-single">
                      <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Gallery Block 5 */}
              <div className="gallery-block col-md-4 col-sm-6 col-xs-12">
                <div className="item">
                  <div>
                    <img src="images/projects/project-5.jpg" alt="" />
                  </div>
                  <div className="info">
                    <h3>
                      <Link to="/project-single">Box Perspective</Link>
                    </h3>
                    <h4>
                      <Link to="/project-single">Engineering</Link>
                    </h4>
                    <Link to="/project-single">
                      <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Gallery Block 6 */}
              <div className="gallery-block col-md-4 col-sm-6 col-xs-12">
                <div className="item">
                  <div>
                    <img src="images/projects/project-6.jpg" alt="" />
                  </div>
                  <div className="info">
                    <h3>
                      <Link to="/project-single">Box Perspective</Link>
                    </h3>
                    <h4>
                      <Link to="/project-single">Engineering</Link>
                    </h4>
                    <Link to="/project-single">
                      <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Repeat the structure for other gallery blocks */}
            </div>
          </div>
        </div>
      </section>
      ;
    </>
  );
};

export default ProjectSection;
