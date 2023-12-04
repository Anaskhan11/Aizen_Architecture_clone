import React from "react";
import About from "./Component/About";
import Projects from "./Component/Projects";
import Services from "./Component/Services";
import CounterSection from "./Component/CounterSection";
import NewsSection from "./Component/NewsSection";
import Client from "./Component/Client";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Corosel from "./Component/Corosel";
const Layout = () => {
  return (
    <>
      <div>
        <Header />
        <Corosel />
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
