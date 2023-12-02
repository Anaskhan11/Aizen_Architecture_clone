import React from "react";
import TopHeader from "./TopHeader";
const Header = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="preloader" />

        <header className="main-header">
          <TopHeader />
          <div className="header-upper">
            <div className="auto-container clearfix">
              <div className="pull-left logo-outer">
                <div className="logo">
                  <a href="index">
                    <img
                      src="images/logo.png"
                      alt="Aizen - Architecture Template"
                      title="Aizen - Architecture Template"
                    />
                  </a>
                </div>
              </div>
              <div className="pull-right upper-right clearfix">
                <nav className="main-menu">
                  <div className="navbar-header">
                    <button
                      type="button"
                      className="navbar-toggle"
                      data-toggle="collapse"
                      data-target=".navbar-collapse"
                    >
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                  </div>
                  <div className="navbar-collapse collapse clearfix">
                    <ul className="navigation clearfix">
                      <li className="current">
                        <a href="index">Home</a>
                      </li>
                      <li>
                        <a href="about">About Us</a>
                      </li>
                      <li>
                        <a href="services">Services</a>
                      </li>
                      <li>
                        <a href="projects">Projects</a>
                      </li>
                      <li className="dropdown">
                        <a href="#1">Pages</a>
                        <ul>
                          <li>
                            <a href="team">Team</a>
                          </li>
                          <li>
                            <a href="testimonials">Testimonials</a>
                          </li>
                          <li>
                            <a href="faqs">Faqs</a>
                          </li>
                          <li>
                            <a href="gallery">Gallery</a>
                          </li>
                          <li>
                            <a href="error-page">404 page</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="blog">Blog</a>
                      </li>
                      <li>
                        <a href="contact">Contact</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>

          <div className="sticky-header">
            <div className="auto-container clearfix">
              <div className="logo pull-left">
                <a href="index" className="img-responsive">
                  <img
                    src="images/logo-small.png"
                    alt="Aizen - Architecture Template"
                    title="Aizen - Architecture Template"
                  />
                </a>
              </div>
              <div className="right-col pull-right">
                <nav className="main-menu">
                  <div className="navbar-header">
                    <button
                      type="button"
                      className="navbar-toggle"
                      data-toggle="collapse"
                      data-target=".navbar-collapse"
                    >
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                  </div>
                  <div className="navbar-collapse collapse clearfix">
                    <ul className="navigation clearfix">
                      <li className="current">
                        <a href="index">Home</a>
                      </li>
                      <li>
                        <a href="about">About Us</a>
                      </li>
                      <li>
                        <a href="services">Services</a>
                      </li>
                      <li>
                        <a href="projects">Projects</a>
                      </li>
                      <li className="dropdown">
                        <a href="#1">Pages</a>
                        <ul>
                          <li>
                            <a href="team">Team</a>
                          </li>
                          <li>
                            <a href="testimonials">Testimonials</a>
                          </li>
                          <li>
                            <a href="faqs">Faqs</a>
                          </li>
                          <li>
                            <a href="gallery">Gallery</a>
                          </li>
                          <li>
                            <a href="error-page">404 page</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="blog">Blog</a>
                      </li>
                      <li>
                        <a href="contact">Contact</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
