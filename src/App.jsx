import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./assets/Layout";
import HomePage from "./assets/pages/HomePage";
import ContactMe from "./assets/pages/ContactMe";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="contact" element={<ContactMe />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
