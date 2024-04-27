import React, { Fragment } from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";
import Skills from "./Components/Skills/Skills";
import Education from "./Components/Education/Education";
import Hero from "./Components/Hero/Hero";
import Work from "./Components/Work/Work";
import About from "./Components/About/About";

const CssRoutes = () => {
  return (
    <Fragment>
      <Dashboard>
        <Routes>
          {/* <Route path="dashboard" element={<Dashboard />} /> */}
          <Route path="adminskills" element={<Skills />} />
          <Route path="education" element={<Education />} />
          <Route path="hero" element={<Hero />} />
          <Route path="work" element={<Work />} />
          <Route path="about" element={<About />} />
        </Routes>
      </Dashboard>
    </Fragment>
  );
};

export default CssRoutes;
