import React, { useState } from "react";
import "../styles/Testmonial.css";

import { Card } from "react-bootstrap";
const Testomonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {src:"../clients/1.jpg"},
    "image2.jpg",
    "image3.jpg",
   
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  return (
    <>
      <section className="clients-section  grey-bg">
        <div className="auto-container">
          <div className="title-box">
            <div className="title">
              Our work is defined by so much more than just recognition
            </div>
            <h2>Trusted by hundreds of clients around the country</h2>
            <div className="separator" />
          </div>
          <div className="small-image-card-slider-container">
            <button className="slider-btn prev" onClick={prevSlide}>
              ❮
            </button>
            <div className="slider">
              {images.map((imageUrl, index) => (
                <Card
                  key={index}
                  className={`small-image-slider-card ${
                    index === currentIndex ? "active" : ""
                  }`}
                >
                  <Card.Img
                    variant="top"
                    src={imageUrl}
                    alt={`Image ${index + 1}`}
                  />
                </Card>
              ))}
            </div>
            <button className="slider-btn next" onClick={nextSlide}>
              ❯
            </button>
          </div>

          {/* <div className="sponsors-outer">
            <ul className="sponsors-carousel owl-carousel owl-theme">
              <li className="slide-item">
                <figure className="image-box">
                  <a href="#1">
                    <img src={img1} alt="img1" />
                  </a>
                </figure>
              </li>
              <li className="slide-item">
                <figure className="image-box">
                  <a href="#1">
                    <img src="../clients/2.jpg" alt="img2" />
                  </a>
                </figure>
              </li>
              <li className="slide-item">
                <figure className="image-box">
                  <a href="#1">
                    <img src="../clients/3.jpg" alt="" />
                  </a>
                </figure>
              </li>
              <li className="slide-item">
                <figure className="image-box">
                  <a href="#1">
                    <img src="../clients/4.jpg" alt="" />
                  </a>
                </figure>
              </li>
              <li className="slide-item">
                <figure className="image-box">
                  <a href="#1">
                    <img src="../clients/5.jpg" alt="" />
                  </a>
                </figure>
              </li>
            </ul>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Testomonial;
