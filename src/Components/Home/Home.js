import React, { Fragment } from "react";
import Header from "./pages/Header";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Education from "./pages/Education";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import "./style.css"

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Skills />
      <About />
      <Work />
      <Education />
      <Contact />
    </Fragment>
  );
};

export default Home;
