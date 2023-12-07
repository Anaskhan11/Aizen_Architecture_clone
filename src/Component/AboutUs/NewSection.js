import React from "react";

const NewSection = () => {
  return (
    <section className="news-section-two">
      <div className="auto-container">
        <div className="row clearfix">
          <div className="news-block-two col-md-4 col-sm-6 col-xs-12">
            <div className="inner-box">
              <div className="lower-box">
                <h3>Our Mission</h3>
                <div className="text">
                  <p>
                    We commit to inspiring our people to be the best they can
                    be, empowering them to design a world that prioritizes the
                    human experience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="news-block-two col-md-4 col-sm-6 col-xs-12">
            <div className="inner-box">
              <div className="lower-box">
                <h3>Our Vision</h3>
                <div className="text">
                  <p>
                    We confidently accept our role as a trusted expert partner
                    to our clients, guiding them to business success.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="news-block-two col-md-4 col-sm-6 col-xs-12">
            <div className="inner-box">
              <div className="lower-box">
                <h3>Our Strategies</h3>
                <div className="text">
                  <p>
                    We challenge ourselves to continue to earn our position as
                    industry leaders in hospitality, multi-family residential,
                    and affordable housing design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewSection;
