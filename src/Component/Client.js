import React from "react";
import Slider from "react-slick";
import "../styles/Client.css";

const Client = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <section className="clients-section grey-bg">
        <div className="auto-container">
          <div className="title-box">
            <div className="title">
              Our work is defined by so much more than just recognition
            </div>
            <h2>Trusted by hundreds of clients around the country</h2>
            <div className="separator" />
          </div>
          <div className="sponsors-outer">
            <Slider {...settings} className="clients-carousel">
              <div className="slide-item">
                <figure className="image-box">
                  <a href="#1">
                    <img src="images/clients/1.jpg" alt="" />
                  </a>
                </figure>
              </div>
              <div className="slide-item">
                <figure className="image-box">
                  <a href="#1">
                    <img src="images/clients/2.jpg" alt="" />
                  </a>
                </figure>
              </div>
              <div className="slide-item">
                <figure className="image-box">
                  <a href="#1">
                    <img src="images/clients/3.jpg" alt="" />
                  </a>
                </figure>
              </div>
              <div className="slide-item">
                <figure className="image-box">
                  <a href="#1">
                    <img src="images/clients/4.jpg" alt="" />
                  </a>
                </figure>
              </div>
              <div className="slide-item">
                <figure className="image-box">
                  <a href="#1">
                    <img src="images/clients/5.jpg" alt="" />
                  </a>
                </figure>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Client;
