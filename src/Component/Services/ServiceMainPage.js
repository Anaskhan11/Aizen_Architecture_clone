import React from "react";
import ServiceTitlePage from "./ServiceTitlePage";
import Header from "../Header";
import Footer from "../Footer";
import ServiceSectionPage from "./ServiceSectionPage";
const ServiceMainPage = () => {
  return (
    <>
      <Header />
      <ServiceTitlePage />
      <ServiceSectionPage />
      <Footer />
    </>
  );
};

export default ServiceMainPage;
