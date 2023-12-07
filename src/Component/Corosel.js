import React from "react";
import Slider from "react-slick";

import "../styles/Slider.css";
const Corosel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="main-slider">
      <Slider {...settings}>
        <div className="slick-slide">
          <img
            alt="Slide 1"
            className="slick-image"
            src="images/main-slider/image-1.jpg"
          />
          <div className="slick-caption">
            <div className="caption-inner">
              <h2>We create living, breathing structures that inspire</h2>
              <div className="text">
                Together we ensure that each building fulfills their needs and
                goals, as unique manifestations of brand, mission, and values
              </div>
              <a href="about" className="theme-btn btn-style-three">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="slick-slide">
          <img
            alt="Slide 2"
            className="slick-image"
            src="images/main-slider/image-2.jpg"
          />
          <div className="slick-caption">
            <div className="caption-inner">
              <h2 className="alternate">
                We design spaces that uplift the people who experience them
              </h2>
              <div className="text alternate">
                Interiors are the essential settings of life, shaping how people
                work, play and learn
              </div>
              <a href="about" className="theme-btn btn-style-three">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default Corosel;
