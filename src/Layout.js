import React from "react";
import About from "./Component/AboutUs/About";
import Projects from "./Component/Projects/Projects";
import Services from "./Component/Services/Services";
import CounterSection from "./Component/CounterSection";
import NewsSection from "./Component/NewsSection";
import Client from "./Component/Client";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Corosel from "./Component/Corosel";
import Gallery from "./Component/GallerySection/Gallery";
const Layout = () => {
  return (
    <>
      <div>
        <Header />
        <Corosel />
        <Gallery />
        <About />
        <Projects />
        <Services />
        <CounterSection />
        <NewsSection />
        <Client />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
