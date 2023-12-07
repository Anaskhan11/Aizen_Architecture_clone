import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <>
      <section className="call-to-action">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="column col-md-8 col-sm-12 col-xs-12">
              <h4 className="text">
                Our team is always here to help. Contact us today to learn how.
              </h4>
            </div>
            <div className="btn-column col-md-4 col-sm-12 col-xs-12">
              <Link to="/contactus" className="theme-btn btn-style-six">
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CallToAction;
