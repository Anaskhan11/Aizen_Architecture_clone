import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { css } from "glamor";

const ContactSection = () => {
  const form = useRef();
  // const [values, setValues] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_94q02ch",
      "template_jkl3tng",
      form.current,
      "FQb0VA9GIYBhmCTPW"
    );
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
  };
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setValues((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };
  const toastHandler = () => {
    // setValues({
    //   name: "",
    //   email: "",
    //   message: "",
    // });
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
                        // value={values.name}
                        // onChange={handleChange}
                        name="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>

                    <div className="col-md-6 col-sm-6 col-xs-12 form-group">
                      <input
                        type="email"
                        name="email"
                        // value={values.email}
                        // onChange={handleChange}
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
                        // value={values.message}
                        // onChange={handleChange}
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
                  <a
                    href="mailto:info.realarc@gmail.com"
                    style={{ color: "black" }}
                  >
                    info.realarc@gmail.com
                  </a>
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
                  09:00 AM to 05:00 PM
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
