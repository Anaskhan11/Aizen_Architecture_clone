import React from "react";
import Slider from "./Component/Slider";
import About from "./Component/About";
import Projects from "./Component/Projects";
import Services from "./Component/Services";
import CounterSection from "./Component/CounterSection";
import NewSection from "./Component/NewSection";
import Testomonial from "./Component/Testomonial";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
const Layout = () => {
  return (
    <>
      <div>
        <Header />
        <Slider />
        <About />
        <Projects />
        <Services />
        <CounterSection />
        <NewSection />
        <Testomonial />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
