import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
const About = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <section className="about-section-home">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="about-details col-md-12 col-sm-12 col-xs-12">
              <div className="inner-column">
                <div className="sec-title style-two">
                  <div className="sub-title">
                    From undulating skyscrapers to marvelous museums
                  </div>
                  <h2>
                    About <span>RealArc PVT LTD</span>
                  </h2>
                  <div className="separator" />
                </div>
                <div className="text">
                  <p>
                    RealArc Pvt LTD is a leading design and construction company
                    providing Architecture, Interiors, Landscape, Town planning,
                    engineering, construction and Project management under one
                    roof by high professional experts.
                  </p>
                  <h1>Why choose us?</h1>
                  <p>
                    RealArc (Pvt) Ltd are committed to looking beyond challenges
                    by design and build solutions. RealArc has diverse
                    experience of Multi-Storey Buildings; Housing Schemes,
                    Retail, Commercial, Hospitality Projects, Luxury Villas,
                    Farmhouses, Residential Interior Design and Landscape
                    Projects.
                  </p>
                </div>
                <dir>
                  <h2>
                    <Link to="/aboutus">Read More</Link>
                  </h2>
                </dir>
              </div>
            </div>
            <div className="about-details-image col-md-6 col-sm-12 col-xs-12">
              <div className="image">
                <img src="images/resource/about.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
