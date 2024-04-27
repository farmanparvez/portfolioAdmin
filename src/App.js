import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/login/Login";
import Navber from "./Components/Layout/navber";
import Footer from "./Components/Layout/Footer";
import CssRoutes from "./Routes";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

const App = () => {
  return (
    <>
      <main style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Router>
          <div>
            <Navber />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/*" element={<CssRoutes />} />
            </Routes>
          </div>
        </Router>
        <Footer />
      </main>
    </>
  );
};
export default App;
