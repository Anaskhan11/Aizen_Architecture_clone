import React from "react";

const ContactPageTitle = () => {
  const backgroundStyle = {
    backgroundImage: "url(images/background/3.jpg)",
  };

  return (
    <section className="page-title" style={backgroundStyle}>
      <div className="auto-container">
        <h1>Contact Us</h1>
        <ul className="bread-crumb clearfix">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li className="active">Contact Us</li>
        </ul>
      </div>
    </section>
  );
};

export default ContactPageTitle;
