import React from "react";

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="auto-container">
        <div className="row clearfix">
          {/* Form Column */}
          <div className="form-column col-md-7 col-sm-12 col-xs-12">
            <div className="column-inner">
              <div className="form-title">
                <h2>Contact Form</h2>
                <div className="separator"></div>
                <div className="text">
                  We would like to contribute to the project you're thinking of.
                  Please, leave us a message to be in touch.
                </div>
              </div>

              {/* Contact Form */}
              <div className="contact-form">
                <form
                  id="contact-form"
                  action="https://www.brandifystudio.com/web/aizen/send.php"
                  method="post"
                >
                  <div className="row clearfix">
                    <div className="col-md-6 col-sm-6 col-xs-12 form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>

                    <div className="col-md-6 col-sm-6 col-xs-12 form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email address"
                        required
                      />
                    </div>

                    <div className="col-md-6 col-sm-6 col-xs-12 form-group">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        required
                      />
                    </div>

                    <div className="col-md-6 col-sm-6 col-xs-12 form-group">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        required
                      />
                    </div>

                    <div className="col-md-12 col-sm-12 col-xs-12 form-group">
                      <textarea name="message" placeholder="Message"></textarea>
                    </div>

                    <div className="col-md-12 col-sm-12 col-xs-12 form-group">
                      <button
                        className="theme-btn btn-style-one"
                        type="submit"
                        name="submit-form"
                      >
                        Send message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              {/* End Contact Form */}
            </div>
          </div>

          {/* Info Column */}
          <div className="info-column col-md-5 col-sm-12 col-xs-12">
            <ul className="list-style-two">
              <li>
                <span className="icon flaticon-symbol"></span>
                <div className="info-featured">
                  <a href="mailto:email@example.com">[email protected]</a>
                </div>
              </li>
              <li>
                <span className="icon flaticon-smartphone"></span>
                <div className="info-featured">+1 212-558-2995</div>
              </li>
              <li>
                <span className="icon flaticon-placeholder"></span>
                <div className="text-info">Address</div>
                <h3>
                  525 7th Avenue - Suite 1601
                  <br />
                  New York, NY 10001
                </h3>
              </li>

              <li>
                <span className="icon flaticon-clock-1"></span>
                <div className="text-info">Working Hours</div>
                <h3>
                  Monday - Friday
                  <br />
                  09:00 to 18:00
                </h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
