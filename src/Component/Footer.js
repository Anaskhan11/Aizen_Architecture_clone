import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="main-footer">
        <div className="widgets-section">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="column col-md-12 col-sm-12 col-xs-12">
                <div className="row clearfix">
                  <div className="footer-column col-md-4 col-sm-6 col-xs-12">
                    <div className="footer-widget logo-widget">
                      <div className="logo">
                        <Link to="/">
                          <img src="images/logos.png" alt="" />
                        </Link>
                      </div>
                      <h2 className="realarc">RealArc PVT LTD</h2>
                      <div className="widget-content">
                        <div className="text">
                          Architecture provides an opportunity to improve the
                          conditions for people, communities, society,
                          businesses and the environment.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="footer-column col-md-5 col-sm-6 col-xs-12">
                    <div className="footer-widget link-widget">
                      <div className="footer-title">
                        <h2>Contact Details</h2>
                        <div className="separator" />
                      </div>
                      <div className="widget-content">
                        <ul>
                          <li>
                            <span>Email:</span>{" "}
                            <a
                              href="#2"
                              className="__cf_email__"
                              data-cfemail="5c34393030331c3d3526393238392f353b32723f3331"
                            >
                              info.realarc@gmail.com
                            </a>
                          </li>
                          <li>
                            <span>Phone:</span> 0312-9358285
                          </li>
                          <li>
                            <span>Address:</span> Bismillah Plaza, Jail Road
                            Opposite Mardan Medical Complex, Mardan
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="footer-column col-md-3 col-sm-6 col-xs-12">
                    <div className="footer-widget logo-widget">
                      <div className="footer-title">
                        <h2>Follow Us</h2>
                        <div className="separator" />
                      </div>
                      <div className="widget-content">
                        <ul className="social-icon-two">
                          <li>
                            <a href="#1">
                              <span className="fab fa-instagram" />
                            </a>
                          </li>
                          <li>
                            <a href="#1">
                              <span className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#1">
                              <span className="fab fa-linkedin" />
                            </a>
                          </li>
                          <li>
                            <a href="#1">
                              <span className="fab fa-pinterest" />
                            </a>
                          </li>
                          <li>
                            <a href="#1">
                              <span className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#1">
                              <span className="fab fa-youtube" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Footer Bottom*/}
        <div className="footer-bottom">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="column col-md-6 col-sm-6 col-xs-12">
                <div className="copyright">
                  Copyright © 2023 RealArc PVT LTD. All Rights Reserved.
                </div>
              </div>
              <div className="column col-md-6 col-sm-6 col-xs-12">
                <ul className="foter-nav">
                  <li>
                    <a href="#1">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#1">Conditions &amp; Terms</a>
                  </li>
                  <li>
                    <a href="faqs.html">FAQ’s</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
