import React from "react";

const Services = () => {
  return (
    <>
     
      <section
        className="services-section-two"
        style={{ backgroundImage: "url(/images/background/1.jpg)" }}
      >
        <div className="section-inner">
          <div className="auto-container">
            {/*Sec Title*/}
            <div className="sec-title light centered">
              <h2>Our Services</h2>
              <div className="sub-title">
                a force for activating cities and reenergizing cultures
              </div>
              <div className="separator" />
            </div>
            <div className="row clearfix">
              {/*Services Block Two*/}
              <div className="services-block-two col-md-4 col-sm-6 col-xs-12">
                <div className="inner-box">
                  <div className="icon-box">
                    <img src="../../public/images/services/icon-1.svg" alt="" />
                  </div>
                  <h3>
                    <a href="services-single">Architecture</a>
                  </h3>
                  <div className="text">
                    Provides an opportunity to not only add beauty and structure
                    to the world, but to profoundly improve the conditions for
                    people.
                  </div>
                  <a className="read-more" href="services-single">
                    read more
                    <span className="icon fa fa-angle-double-right" />
                  </a>
                </div>
              </div>
              {/*Services Block Two*/}
              <div className="services-block-two col-md-4 col-sm-6 col-xs-12">
                <div className="inner-box">
                  <div className="icon-box">
                    <img src="/images/services/icon-2.svg" alt="" />
                  </div>
                  <h3>
                    <a href="services-single">Consulting &amp; Planning</a>
                  </h3>
                  <div className="text">
                    Our team’s analytical tools and user engagement activities
                    inspire creativity and collaboration that enhance any
                    project.
                  </div>
                  <a className="read-more" href="services-single">
                    read more
                    <span className="icon fa fa-angle-double-right" />
                  </a>
                </div>
              </div>
              {/*Services Block Two*/}
              <div className="services-block-two col-md-4 col-sm-6 col-xs-12">
                <div className="inner-box">
                  <div className="icon-box">
                    <img src="/images/services/icon-3.svg" alt="" />
                  </div>
                  <h3>
                    <a href="services-single">Construction</a>
                  </h3>
                  <div className="text">
                    Across our firm, we employ a diverse range of professionals
                    with a successful record delivering high-quality projects.
                  </div>
                  <a className="read-more" href="services-single">
                    read more
                    <span className="icon fa fa-angle-double-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
