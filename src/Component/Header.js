import React from "react";

const Header = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="preloader" />

        <header className="main-header">
          <div className="header-top">
            <div className="auto-container">
              <div className="clearfix">
                <div className="top-left">
                  <ul className="clearfix">
                    <li>Welcome to Aizen Architecture Theme</li>
                  </ul>
                </div>
                <div className="top-right clearfix">
                  <ul className="clearfix">
                    <li>
                      Follow us
                      <div className="social-links">
                        <a href="#1">
                          <span className="fab fa-instagram" />
                        </a>
                        <a href="#1">
                          <span className="fab fa-facebook-f" />
                        </a>
                        <a href="#1">
                          <span className="fab fa-linkedin" />
                        </a>
                        <a href="#1">
                          <span className="fab fa-pinterest" />
                        </a>
                        <a href="#1">
                          <span className="fab fa-twitter" />
                        </a>
                        <a href="#1">
                          <span className="fab fa-youtube" />
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="header-upper">
            <div className="auto-container clearfix">
              <div className="pull-left logo-outer">
                <div className="logo">
                  <a href="index.html">
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
                        <a href="index.html">Home</a>
                      </li>
                      <li>
                        <a href="about.html">About Us</a>
                      </li>
                      <li>
                        <a href="services.html">Services</a>
                      </li>
                      <li>
                        <a href="projects.html">Projects</a>
                      </li>
                      <li className="dropdown">
                        <a href="#1">Pages</a>
                        <ul>
                          <li>
                            <a href="team.html">Team</a>
                          </li>
                          <li>
                            <a href="testimonials.html">Testimonials</a>
                          </li>
                          <li>
                            <a href="faqs.html">Faqs</a>
                          </li>
                          <li>
                            <a href="gallery.html">Gallery</a>
                          </li>
                          <li>
                            <a href="error-page.html">404 page</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="blog.html">Blog</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
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
                <a href="index.html" className="img-responsive">
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
                        <a href="index.html">Home</a>
                      </li>
                      <li>
                        <a href="about.html">About Us</a>
                      </li>
                      <li>
                        <a href="services.html">Services</a>
                      </li>
                      <li>
                        <a href="projects.html">Projects</a>
                      </li>
                      <li className="dropdown">
                        <a href="#1">Pages</a>
                        <ul>
                          <li>
                            <a href="team.html">Team</a>
                          </li>
                          <li>
                            <a href="testimonials.html">Testimonials</a>
                          </li>
                          <li>
                            <a href="faqs.html">Faqs</a>
                          </li>
                          <li>
                            <a href="gallery.html">Gallery</a>
                          </li>
                          <li>
                            <a href="error-page.html">404 page</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="blog.html">Blog</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
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
