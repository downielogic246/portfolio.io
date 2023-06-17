import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./assets/components/Layout";
import Footer from "./assets/components/Footer";
import HomePage from "./assets/pages/HomePage";
import ContactMe from "./assets/pages/ContactMe";

const App = () => {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/portfolio.io/" element={<HomePage />} />
        <Route path="/portfolio.io/contact" element={<ContactMe />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
