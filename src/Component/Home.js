import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <>
      <div className="page-wrapper">
        {/* Preloader */}
        <div className="preloader" />
        {/* Main Header*/}
        <header className="main-header">
          {/*Header Top*/}
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
          {/*Header-Upper*/}
          <div className="header-upper">
            <div className="auto-container clearfix">
              <div className="pull-left logo-outer">
                <div className="logo">
                  <a href="index">
                    <img
                      src="images/logo.png"
                      alt="Aizen - Architecture "
                      title="Aizen - Architecture Template"
                    />
                  </a>
                </div>
              </div>
              <div className="pull-right upper-right clearfix">
                <nav className="main-menu">
                  <div className="navbar-header">
                    {/* Toggle Button */}
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
                        <a href="home">Home</a>
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
          {/*End Header Upper*/}
          {/*Sticky Header*/}
          <div className="sticky-header">
            <div className="auto-container clearfix">
              {/*Logo*/}
              <div className="logo pull-left">
                <a href="index" className="img-responsive">
                  <img
                    src="images/logo-small.png"
                    alt="Aizen - Architecture Template"
                    title="Aizen - Architecture Template"
                  />
                </a>
              </div>
              {/*Right Col*/}
              <div className="right-col pull-right">
                {/* Main Menu */}
                <nav className="main-menu">
                  <div className="navbar-header">
                    {/* Toggle Button */}
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
                {/* Main Menu End*/}
              </div>
            </div>
          </div>
          {/*End Sticky Header*/}
        </header>
        {/*End Main Header */}
        {/*Main Slider*/}
        <section className="main-slider">
          <div
            className="rev_slider_wrapper fullwidthbanner-container"
            id="rev_slider_one_wrapper"
            data-source="gallery"
          >
            <div
              className="rev_slider fullwidthabanner"
              id="rev_slider_one"
              data-version="5.4.1"
            >
              <ul>
                <li
                  data-description="Slide Description"
                  data-easein="default"
                  data-easeout="default"
                  data-fsmasterspeed={1500}
                  data-fsslotamount={7}
                  data-fstransition="fade"
                  data-hideafterloop={0}
                  data-hideslideonmobile="off"
                  data-index="rs-1687"
                  data-masterspeed="default"
                  data-param1
                  data-param10
                  data-param2
                  data-param3
                  data-param4
                  data-param5
                  data-param6
                  data-param7
                  data-param8
                  data-param9
                  data-rotate={0}
                  data-saveperformance="off"
                  data-slotamount="default"
                  data-thumb="images/main-slider/image-1.jpg"
                  data-title="Slide Title"
                  data-transition="parallaxvertical"
                >
                  <img
                    alt=""
                    className="rev-slidebg"
                    data-bgfit="cover"
                    data-bgparallax={10}
                    data-bgposition="center center"
                    data-bgrepeat="no-repeat"
                    data-no-retina
                    src="images/main-slider/image-1.jpg"
                  />
                  <div
                    className="tp-caption"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingtop="[0,0,0,0]"
                    data-responsive_offset="on"
                    data-type="text"
                    data-height="none"
                    data-width="['650','650','550','420']"
                    data-whitespace="normal"
                    data-hoffset="['15','15','15','15']"
                    data-voffset="['-40','-80','-80','-75']"
                    data-x="['left','left','left','left']"
                    data-y="['middle','middle','middle','middle']"
                    data-textalign="['top','top','top','top']"
                    data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
                  >
                    <h2>We create living, breathing structures that inspire</h2>
                  </div>
                  <div
                    className="tp-caption"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingtop="[0,0,0,0]"
                    data-responsive_offset="on"
                    data-type="text"
                    data-height="none"
                    data-width="['600','650','650','450']"
                    data-whitespace="normal"
                    data-hoffset="['15','15','15','15']"
                    data-voffset="['65','20','15','10']"
                    data-x="['left','left','left','left']"
                    data-y="['middle','middle','middle','middle']"
                    data-textalign="['top','top','top','top']"
                    data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
                  >
                    <div className="text">
                      Together we ensure that each building fulfills their needs
                      and goals, as unique manifestations of brand, mission and
                      values
                    </div>
                  </div>
                  <div
                    className="tp-caption tp-resizeme"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingtop="[0,0,0,0]"
                    data-responsive_offset="on"
                    data-type="text"
                    data-height="none"
                    data-width="['750','750','550','420']"
                    data-whitespace="normal"
                    data-hoffset="['15','15','15','15']"
                    data-voffset="['145','110','100','100']"
                    data-x="['left','left','left','left']"
                    data-y="['middle','middle','middle','middle']"
                    data-textalign="['top','top','top','top']"
                    data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
                  >
                    <a href="about" className="theme-btn btn-style-three">
                      learn more
                    </a>
                  </div>
                </li>
                <li
                  data-description="Slide Description"
                  data-easein="default"
                  data-easeout="default"
                  data-fsmasterspeed={1500}
                  data-fsslotamount={7}
                  data-fstransition="fade"
                  data-hideafterloop={0}
                  data-hideslideonmobile="off"
                  data-index="rs-1688"
                  data-masterspeed="default"
                  data-param1
                  data-param10
                  data-param2
                  data-param3
                  data-param4
                  data-param5
                  data-param6
                  data-param7
                  data-param8
                  data-param9
                  data-rotate={0}
                  data-saveperformance="off"
                  data-slotamount="default"
                  data-thumb="images/main-slider/image-2.jpg"
                  data-title="Slide Title"
                  data-transition="parallaxvertical"
                >
                  <img
                    alt=""
                    className="rev-slidebg"
                    data-bgfit="cover"
                    data-bgparallax={10}
                    data-bgposition="center center"
                    data-bgrepeat="no-repeat"
                    data-no-retina
                    src="images/main-slider/image-2.jpg"
                  />
                  <div
                    className="tp-caption"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingtop="[0,0,0,0]"
                    data-responsive_offset="on"
                    data-type="text"
                    data-height="none"
                    data-width="['750','750','550','420']"
                    data-whitespace="normal"
                    data-hoffset="['15','15','15','15']"
                    data-voffset="['-40','-80','-80','-75']"
                    data-x="['left','left','left','left']"
                    data-y="['middle','middle','middle','middle']"
                    data-textalign="['top','top','top','top']"
                    data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
                  >
                    <h2 className="alternate">
                      We design spaces that uplift the people who experience
                      them
                    </h2>
                  </div>
                  <div
                    className="tp-caption"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingtop="[0,0,0,0]"
                    data-responsive_offset="on"
                    data-type="text"
                    data-height="none"
                    data-width="['600','650','650','450']"
                    data-whitespace="normal"
                    data-hoffset="['15','15','15','15']"
                    data-voffset="['65','20','15','10']"
                    data-x="['left','left','left','left']"
                    data-y="['middle','middle','middle','middle']"
                    data-textalign="['top','top','top','top']"
                    data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
                  >
                    <div className="text alternate">
                      Interiors are the essential settings of life, shaping how
                      people work, play and learn
                    </div>
                  </div>
                  <div
                    className="tp-caption tp-resizeme"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingtop="[0,0,0,0]"
                    data-responsive_offset="on"
                    data-type="text"
                    data-height="none"
                    data-width="['550','550','550','420']"
                    data-whitespace="normal"
                    data-hoffset="['15','15','15','15']"
                    data-voffset="['145','110','100','100']"
                    data-x="['left','left','left','left']"
                    data-y="['middle','middle','middle','middle']"
                    data-textalign="['top','top','top','top']"
                    data-frames='[{"from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"auto:auto;","mask":"x:0;y:0;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
                  >
                    <a href="about" className="theme-btn btn-style-three">
                      learn more
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/*End Main Slider*/}
        {/*About Section*/}
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
                      Building design at its visionary best engages,
                      exhilarates, and inspires. It possesses a quality—almost
                      indescribable—that embodies design ingenuity, connection
                      to place, and, above all, imagination. But today’s
                      architectural monuments aren’t meant only to be admired
                      from afar.
                    </p>
                    <p>
                      Together they conceived an asymmetrical structure clad in
                      a skin of LED-illuminated glass-and-steel bricks, which
                      every evening gives Icelanders a show as dazzling as the
                      northern lights.
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
        {/*End About Section*/}
        {/*Project Section*/}
        <section className="project-section-home">
          <div className="auto-container">
            <div className="sec-title style-two centered">
              <h2>
                Our <span>Projects</span>
              </h2>
              <div className="separator" />
            </div>
            <div className="projects-carousel owl-carousel owl-theme">
              <div className="item">
                <div>
                  <img src="/images/resource/project-1.jpg" alt="img1" />
                </div>
                <div className="info">
                  <h3>
                    <a href="project-single">Aqua Residence</a>
                  </h3>
                  <h4>
                    <a href="project-single">Architecture</a>
                  </h4>
                  <a href="project-single">
                    <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="item">
                <div>
                  <img src="/images/resource/project-2.jpg" alt="img2" />
                </div>
                <div className="info">
                  <h3>
                    <a href="project-single">Box Perspective</a>
                  </h3>
                  <h4>
                    <a href="project-single">Engineering</a>
                  </h4>
                  <a href="project-single">
                    <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="item">
                <div>
                  <img src="/images/resource/project-3.jpg" alt="img3" />
                </div>
                <div className="info">
                  <h3>
                    <a href="project-single">Bricks High</a>
                  </h3>
                  <h4>
                    <a href="project-single">Consulting</a>
                  </h4>
                  <a href="project-single">
                    <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="item">
                <div>
                  <img src="/images/resource/project-4.jpg" alt="img4" />
                </div>
                <div className="info">
                  <h3>
                    <a href="project-single">Rustic Nature</a>
                  </h3>
                  <h4>
                    <a href="project-single">Interior</a>
                  </h4>
                  <a href="project-single">
                    <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="item">
                <div>
                  <img src="/images/resource/project-5.jpg" alt="img5" />
                </div>
                <div className="info">
                  <h3>
                    <a href="project-single">Pool Party</a>
                  </h3>
                  <h4>
                    <a href="project-single">Construction</a>
                  </h4>
                  <a href="project-single">
                    <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="item">
                <div>
                  <img src="/images/resource/project-6.jpg" alt="img6" />
                </div>
                <div className="info">
                  <h3>
                    <a href="project-single">Bar Concept</a>
                  </h3>
                  <h4>
                    <a href="project-single">Interior</a>
                  </h4>
                  <a href="project-single">
                    <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="text-center">
            <a href="project" className="theme-btn btn-style-one">
              more projects
            </a>
          </div>
        </section>
        {/*End Project Section*/}
        {/*Services Section Two*/}
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
                      <img
                        src="../../public/images/services/icon-1.svg"
                        alt=""
                      />
                    </div>
                    <h3>
                      <a href="services-single">Architecture</a>
                    </h3>
                    <div className="text">
                      Provides an opportunity to not only add beauty and
                      structure to the world, but to profoundly improve the
                      conditions for people.
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
                      Across our firm, we employ a diverse range of
                      professionals with a successful record delivering
                      high-quality projects.
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
        {/*End Services Section Two*/}
        {/*Counter Section*/}
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
            style={{
              backgroundImage: "url(../../public/images/background/2.jpg)",
            }}
          >
            <div className="auto-container">
              <div className="row clearfix">
                {/*Title Column*/}
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
                        {/*Column*/}
                        <div className="column counter-column col-md-6 col-sm-6 col-xs-12">
                          <div className="inner">
                            <div className="count-outer count-box">
                              <span
                                className="count-text"
                                data-speed={2000}
                                data-stop={220}
                              >
                                0
                              </span>
                            </div>
                            <h4 className="counter-title">
                              Certified Engineers
                            </h4>
                          </div>
                        </div>
                        {/*Column*/}
                        <div className="column counter-column col-md-6 col-sm-6 col-xs-12">
                          <div className="inner">
                            <div className="count-outer count-box">
                              <span
                                className="count-text"
                                data-speed={2000}
                                data-stop={180}
                              >
                                0
                              </span>
                            </div>
                            <h4 className="counter-title">Happy Clients</h4>
                          </div>
                        </div>
                        {/*Column*/}
                        <div className="column counter-column col-md-6 col-sm-6 col-xs-12">
                          <div className="inner">
                            <div className="count-outer count-box">
                              <span
                                className="count-text"
                                data-speed={2000}
                                data-stop={600}
                              >
                                0
                              </span>
                            </div>
                            <h4 className="counter-title">Awards Won</h4>
                          </div>
                        </div>
                        {/*Column*/}
                        <div className="column counter-column col-md-6 col-sm-6 col-xs-12">
                          <div className="inner">
                            <div className="count-outer count-box">
                              <span
                                className="count-text"
                                data-speed={2000}
                                data-stop={260}
                              >
                                0
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
        {/*End Counter Section*/}
        {/*News Section*/}
        <section className="news-section">
          <div className="auto-container">
            {/*Sec Title*/}
            <div className="sec-title centered">
              <h2>Latest News</h2>
              <div className="sub-title">
                Learn more about design tips and construction trends
              </div>
              <div className="separator" />
            </div>
            <div className="row clearfix">
              {/*News Block*/}
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
                      <a>Everything You Need to Know About Minimalist Design</a>
                    </h3>
                    <div className="text">
                      Clean lines, reductive, uncluttered, monochromatic,
                      simplicity, "less is more" these are some of the terms and
                      concepts.
                    </div>
                    <div className="clearfix">
                      <div className="pull-left">
                        <a className="read-more">
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
                      <img src="images/resource/news-thumb-2.jpg" alt="" />
                    </div>
                  </a>
                  <div className="lower-box">
                    <div className="post-date">
                      <i className="far fa-calendar-alt" /> March 22, 2021
                    </div>
                    <h3>
                      <a href="blog-single">
                        Organizing Ideas To Give Your Office The Ultimate
                        Upgrade
                      </a>
                    </h3>
                    <div className="text">
                      Home offices are all the rage right now. Yours could be
                      the headquarters for a small business, questionably
                      relevant papers, or homework central.
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
                      It doesn't matter what your design aesthetic is or how
                      much space you have, one thing's for sure: Subway tiles
                      are a failsafe.
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
        {/*End News Section*/}
        {/*Testimonial Section*/}
        <section className="clients-section  grey-bg">
          <div className="auto-container">
            <div className="title-box">
              <div className="title">
                Our work is defined by so much more than just recognition
              </div>
              <h2>Trusted by hundreds of clients around the country</h2>
              <div className="separator" />
            </div>
            <div className="sponsors-outer">
              {/*Sponsors Carousel*/}
              <ul className="sponsors-carousel owl-carousel owl-theme">
                <li className="slide-item">
                  <figure className="image-box">
                    <a href="#1">
                      <img src="images/clients/1.jpg" alt="" />
                    </a>
                  </figure>
                </li>
                <li className="slide-item">
                  <figure className="image-box">
                    <a href="#1">
                      <img src="images/clients/2.jpg" alt="" />
                    </a>
                  </figure>
                </li>
                <li className="slide-item">
                  <figure className="image-box">
                    <a href="#1">
                      <img src="images/clients/3.jpg" alt="" />
                    </a>
                  </figure>
                </li>
                <li className="slide-item">
                  <figure className="image-box">
                    <a href="#1">
                      <img src="images/clients/4.jpg" alt="" />
                    </a>
                  </figure>
                </li>
                <li className="slide-item">
                  <figure className="image-box">
                    <a href="#1">
                      <img src="images/clients/5.jpg" alt="" />
                    </a>
                  </figure>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/*End Testimonial Section*/}
        {/*Main Footer*/}
        <footer className="main-footer">
          {/*Widgets Section*/}
          <div className="widgets-section">
            <div className="auto-container">
              <div className="row clearfix">
                <div className="column col-md-12 col-sm-12 col-xs-12">
                  <div className="row clearfix">
                    {/*Footer Column*/}
                    <div className="footer-column col-md-4 col-sm-6 col-xs-12">
                      <div className="footer-widget logo-widget">
                        <div className="logo">
                          <a href="index">
                            <img src="images/footer-logo.png" alt="" />
                          </a>
                        </div>
                        <div className="widget-content">
                          <div className="text">
                            Architecture provides an opportunity to improve the
                            conditions for people, communities, society,
                            businesses and the environment.
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*Footer Column*/}
                    <div className="footer-column col-md-5 col-sm-6 col-xs-12">
                      <div className="footer-widget link-widget">
                        <div className="footer-title">
                          <h2>Contact Details</h2>
                          <div className="separator" />
                        </div>
                        <div className="widget-content">
                          <ul>
                            <li>
                              <span>Email:</span>
                              <a
                                href="/cdn-cgi/l/email-protection"
                                className="__cf_email__"
                                data-cfemail="5c34393030331c3d3526393238392f353b32723f3331"
                              >
                                [email&nbsp;protected]
                              </a>
                            </li>
                            <li>
                              <span>Phone:</span> +1 212-558-2995
                            </li>
                            <li>
                              <span>Address:</span> 525 7th Avenue - Suite 1601,
                              New York, NY 10001
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/*Footer Column*/}
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
          {/*Footer Bottom */}
          <div className="footer-bottom">
            <div className="auto-container">
              <div className="row clearfix">
                <div className="column col-md-6 col-sm-6 col-xs-12">
                  <div className="copyright">
                    Copyright © 2023 Aizen Architecture. All Rights Reserved.
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
                      <a href="faqs">FAQ’s</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
