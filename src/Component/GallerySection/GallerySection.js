import React from "react";

const GallerySection = () => {
  return (
    <section className="gallery-section">
      <div className="auto-container clearfix">
        {/*Gallery Title*/}
        <div className="faqs-title">
          <h3>Check out our most distinguished constructions</h3>
          <div className="separator" />
        </div>
        <div className="column col-md-6 col-sm-6 col-xs-12 gallery-item">
          <a
            href="images/gallery/1.jpg"
            className="plus-icon lightbox-image"
            data-fancybox-group="gallery-one"
          >
            <div className="gallery-box">
              <div className="gallery-img">
                <img src="images/gallery/1.jpg" alt="images1" />
              </div>
            </div>
          </a>
        </div>
        <div className="column col-md-6 col-sm-6 col-xs-12 gallery-item">
          <a
            href="images/gallery/2.jpg"
            className="plus-icon lightbox-image"
            data-fancybox-group="gallery-one"
          >
            <div className="gallery-box">
              <div className="gallery-img">
                <img src="images/gallery/2.jpg" alt="images2" />
              </div>
            </div>
          </a>
        </div>
        <div className="column col-md-6 col-sm-6 col-xs-12 gallery-item">
          <a
            href="images/gallery/3.jpg"
            className="plus-icon lightbox-image"
            data-fancybox-group="gallery-one"
          >
            <div className="gallery-box">
              <div className="gallery-img">
                <img src="images/gallery/3.jpg" alt="images3" />
              </div>
            </div>
          </a>
        </div>
        <div className="column col-md-6 col-sm-6 col-xs-12 gallery-item">
          <a
            href="images/gallery/4.jpg"
            className="plus-icon lightbox-image"
            data-fancybox-group="gallery-one"
          >
            <div className="gallery-box">
              <div className="gallery-img">
                <img src="images/gallery/4.jpg" alt="images4" />
              </div>
            </div>
          </a>
        </div>
        <div className="column col-md-4 col-sm-6 col-xs-12 gallery-item">
          <a
            href="images/gallery/5.jpg"
            className="plus-icon lightbox-image"
            data-fancybox-group="gallery-one"
          >
            <div className="gallery-box">
              <div className="gallery-img">
                <img src="images/gallery/5.jpg" alt="images5" />
              </div>
            </div>
          </a>
        </div>
        <div className="column col-md-4 col-sm-6 col-xs-12 gallery-item">
          <a
            href="images/gallery/6.jpg"
            className="plus-icon lightbox-image"
            data-fancybox-group="gallery-one"
          >
            <div className="gallery-box">
              <div className="gallery-img">
                <img src="images/gallery/6.jpg" alt="images6" />
              </div>
            </div>
          </a>
        </div>
        <div className="column col-md-4 col-sm-6 col-xs-12 gallery-item">
          <a
            href="images/gallery/7.jpg"
            className="plus-icon lightbox-image"
            data-fancybox-group="gallery-one"
          >
            <div className="gallery-box">
              <div className="gallery-img">
                <img src="images/gallery/7.jpg" alt="images7" />
              </div>
            </div>
          </a>
        </div>
        <div className="column col-md-4 col-sm-6 col-xs-12 gallery-item">
          <a
            href="images/gallery/8.jpg"
            className="plus-icon lightbox-image"
            data-fancybox-group="gallery-one"
          >
            <div className="gallery-box">
              <div className="gallery-img">
                <img src="images/gallery/8.jpg" alt="images8" />
              </div>
            </div>
          </a>
        </div>
        <div className="column col-md-4 col-sm-6 col-xs-12 gallery-item">
          <a
            href="images/gallery/9.jpg"
            className="plus-icon lightbox-image"
            data-fancybox-group="gallery-one"
          >
            <div className="gallery-box">
              <div className="gallery-img">
                <img src="images/gallery/9.jpg" alt="images9" />
              </div>
            </div>
          </a>
        </div>
        <div className="column col-md-4 col-sm-6 col-xs-12 gallery-item">
          <a
            href="images/gallery/10.jpg"
            className="plus-icon lightbox-image"
            data-fancybox-group="gallery-one"
          >
            <div className="gallery-box">
              <div className="gallery-img">
                <img src="images/gallery/10.jpg" alt="images0" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
