import React from "react";

const TopHeader = () => {
  return (
    <div>
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
    </div>
  );
};

export default TopHeader;
