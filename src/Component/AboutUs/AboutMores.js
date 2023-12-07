import React from "react";

const AboutMores = () => {
  return (
    <section className="about-section">
      <div className="auto-container">
        <div className="row clearfix">
          <div className="content-column col-md-6 col-sm-12 col-xs-12">
            <div className="inner-column">
              <div className="sec-title style-two">
                <div className="sub-title">
                  People’s lives are indelibly shaped by architecture
                </div>
                <h2>Creating structures that inspire and serve</h2>
                <div className="separator"></div>
              </div>
              <div className="text">
                <p>
                  We engage at every scale and step of the design and
                  construction process, working with local communities upfront
                  on land use issues, devising efficient delivery methods, and
                  everything in between.
                </p>
                <p>
                  Whether reimagining an existing structure or crafting a new
                  one, our approach realizes a building’s highest value. In the
                  end, each client’s solution is unique to them and responsive
                  to context, program and people.
                </p>
              </div>
            </div>
          </div>

          <div className="image-column col-md-6 col-sm-12 col-xs-12">
            <div className="image">
              <img src="images/resource/about-2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMores;
