import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { css } from "glamor";

const ContactSection = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_94q02ch",
        "template_jkl3tng",
        form.current,
        "FQb0VA9GIYBhmCTPW"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const toastHandler = () => {
    toast.success("Email Sent Sucessfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      className: css({
        background: "#1ab394 !important",
      }),
    });

    setValues({
      name: "",
      email: "",
      message: "",
    });
  };

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
                <form id="contact-form" ref={form} onSubmit={sendEmail}>
                  <div className="row clearfix">
                    <div className="col-md-6 col-sm-6 col-xs-12 form-group">
                      <input
                        type="text"
                        value={values.name}
                        onChange={(e) => {
                          setValues({ ...values, name: e.target.value });
                        }}
                        name="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>

                    <div className="col-md-6 col-sm-6 col-xs-12 form-group">
                      <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={(e) => {
                          setValues({ ...values, email: e.target.value });
                        }}
                        placeholder="Email address"
                        required
                      />
                    </div>

                    {/* <div className="col-md-6 col-sm-6 col-xs-12 form-group">
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
                    </div> */}

                    <div className="col-md-12 col-sm-12 col-xs-12 form-group">
                      <textarea
                        name="message"
                        value={values.message}
                        onChange={(e) => {
                          setValues({ ...values, message: e.target.value });
                        }}
                        placeholder="Message"
                      ></textarea>
                    </div>

                    <div className="col-md-12 col-sm-12 col-xs-12 form-group">
                      <button
                        className="theme-btn btn-style-one"
                        type="submit"
                        onClick={toastHandler}
                      >
                        Send message
                      </button>
                      <ToastContainer />
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
                <div className="info-featured">0312-9358285</div>
              </li>
              <li>
                <span className="icon flaticon-placeholder"></span>
                <div className="text-info">Address</div>
                <h3>
                  Bismillah Plaza, Jail Road
                  <br />
                  Opposite Mardan Medical Complex, Mardan
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
