import React from "react";

const CounterSection = () => {
  return (
    <>
      <div className="counter-section">
        <div className="auto-container">
          <div className="sec-title centered">
            <h2>Interesting Facts</h2>
            <div className="sub-title">
              A summary of our challenges translated into numbers
            </div>
            <div className="separator">
              <span className="dott" />
              <span className="dott" />
              <span className="dott" />
            </div>
          </div>
        </div>
        <div
          className="fact-section"
          style={{ backgroundImage: "url(images/background/2.jpg)" }}
        >
          <div className="auto-container">
            <div className="row clearfix">
              <div className="title-column col-md-6 col-sm-12 col-xs-12">
                <div className="title-inner">
                  <div className="number">15</div>
                  <div className="text">
                    years transforming places and creating plans that improve
                    life
                  </div>
                </div>
              </div>
              <div className="counter-column col-md-6 col-sm-12 col-xs-12">
                <div className="fact-counter">
                  <div className="auto-container">
                    <div className="row clearfix">
                      <div className="column counter-column col-md-6 col-sm-6 col-xs-12">
                        <div className="inner">
                          <div className="count-outer count-box">
                            <span
                              className="count-text"
                              data-speed={2000}
                              data-stop={220}
                            >
                              50
                            </span>
                          </div>
                          <h4 className="counter-title">Certified Engineers</h4>
                        </div>
                      </div>
                      <div className="column counter-column col-md-6 col-sm-6 col-xs-12">
                        <div className="inner">
                          <div className="count-outer count-box">
                            <span
                              className="count-text"
                              data-speed={2000}
                              data-stop={180}
                            >
                              200+
                            </span>
                          </div>
                          <h4 className="counter-title">Happy Clients</h4>
                        </div>
                      </div>
                      <div className="column counter-column col-md-6 col-sm-6 col-xs-12">
                        <div className="inner">
                          <div className="count-outer count-box">
                            <span
                              className="count-text"
                              data-speed={2000}
                              data-stop={600}
                            >
                              5
                            </span>
                          </div>
                          <h4 className="counter-title">Awards Won</h4>
                        </div>
                      </div>
                      <div className="column counter-column col-md-6 col-sm-6 col-xs-12">
                        <div className="inner">
                          <div className="count-outer count-box">
                            <span
                              className="count-text"
                              data-speed={2000}
                              data-stop={260}
                            >
                              330
                            </span>
                          </div>
                          <h4 className="counter-title">Projects Done</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CounterSection;
