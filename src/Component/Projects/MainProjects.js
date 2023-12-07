import React from "react";
import ProjectSection from "./ProjectSection";
import Header from "../Header";
import Footer from "../Footer";
import ProjectsTitle from "./ProjectsTitle";
import CallToAction from "./CallToAction";
const MainProjects = () => {
  return (
    <>
      <Header />
      <ProjectsTitle />
      <ProjectSection />
      <CallToAction />
      <Footer />
    </>
  );
};

export default MainProjects;
