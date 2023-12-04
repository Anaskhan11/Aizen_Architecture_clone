import React from "react";

const NewsSection = () => {
  return (
    <div>
      <section className="news-section">
        <div className="auto-container">
          <div className="sec-title centered">
            <h2>Latest News</h2>
            <div className="sub-title">
              Learn more about design tips and construction trends
            </div>
            <div className="separator" />
          </div>
          <div className="row clearfix">
            <div className="news-block col-md-4 col-sm-6 col-xs-12">
              <div className="inner-box">
                <div className="image">
                  <img src="images/resource/news-thumb-1.jpg" alt="" />
                </div>

                <div className="lower-box">
                  <div className="post-date">
                    <i className="far fa-calendar-alt" /> March 29, 2021
                  </div>
                  <h3>
                    <p>Everything You Need to Know About Minimalist Design</p>
                  </h3>
                  <div className="text">
                    Clean lines, reductive, uncluttered, monochromatic,
                    simplicity, "less is more" these are some of the terms and
                    concepts.
                  </div>
                  <div className="clearfix">
                    <div className="pull-left">
                      <a className="read-more" href="##1">
                        Read More <span className="fa fa-angle-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="news-block col-md-4 col-sm-6 col-xs-12">
              <div className="inner-box">
                <a href="blog-single">
                  <div className="image">
                    <img src="images/resource/news-thumb-2.jpg" alt="" />
                  </div>
                </a>
                <div className="lower-box">
                  <div className="post-date">
                    <i className="far fa-calendar-alt" /> March 22, 2021
                  </div>
                  <h3>
                    <a href="blog-single">
                      Organizing Ideas To Give Your Office The Ultimate Upgrade
                    </a>
                  </h3>
                  <div className="text">
                    Home offices are all the rage right now. Yours could be the
                    headquarters for a small business, questionably relevant
                    papers, or homework central.
                  </div>
                  <div className="clearfix">
                    <div className="pull-left">
                      <a href="blog-single" className="read-more">
                        Read More <span className="fa fa-angle-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*News Block*/}
            <div className="news-block col-md-4 col-sm-6 col-xs-12">
              <div className="inner-box">
                <a href="blog-single">
                  <div className="image">
                    <img src="images/resource/news-thumb-3.jpg" alt="" />
                  </div>
                </a>
                <div className="lower-box">
                  <div className="post-date">
                    <i className="far fa-calendar-alt" /> March 15, 2021
                  </div>
                  <h3>
                    <a href="blog-single">
                      How to Decorate Your Kitchen with Subway Tiles
                    </a>
                  </h3>
                  <div className="text">
                    It doesn't matter what your design aesthetic is or how much
                    space you have, one thing's for sure: Subway tiles are a
                    failsafe.
                  </div>
                  <div className="clearfix">
                    <div className="pull-left">
                      <a href="blog-single" className="read-more">
                        Read More <span className="fa fa-angle-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsSection;
