import React from "react";

const About = () => {
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
                    About <span>Aizen</span>
                  </h2>
                  <div className="separator" />
                </div>
                <div className="text">
                  <p>
                    Building design at its visionary best engages, exhilarates,
                    and inspires. It possesses a quality—almost
                    indescribable—that embodies design ingenuity, connection to
                    place, and, above all, imagination. But today’s
                    architectural monuments aren’t meant only to be admired from
                    afar.
                  </p>
                  <p>
                    Together they conceived an asymmetrical structure clad in a
                    skin of LED-illuminated glass-and-steel bricks, which every
                    evening gives Icelanders a show as dazzling as the northern
                    lights.
                  </p>
                </div>
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
