import React from "react";

const Testomonial = () => {
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
          <div className="sponsors-outer">
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
    </>
  );
};

export default Testomonial;
