import React from "react";
import PageTitle from "./PageTitle";
import NewSection from "./NewSection";
import AboutMores from "./AboutMores";
import Footer from "../Footer";
import Header from "../Header";
import TeamSection from "./TeamSection";
const Main = () => {
  return (
    <>
      <Header />
      <PageTitle />
      <AboutMores />
      <NewSection />
      <TeamSection />
      <Footer />
    </>
  );
};

export default Main;
