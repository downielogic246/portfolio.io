import { Outlet, Link } from "react-router-dom";
import React, { useEffect, useState, useSyncExternalStore } from "react";
import "../stylesheets/Layout.css";

const Layout = () => {
  const [homeActive, setHomeActive] = useState("links");
  const [contactActive, setContactActive] = useState("links");

  useEffect(() => {
    setHomeActive(
      location.pathname === "/portfolio.io/portfolio.io/"
        ? "links active fa-shake"
        : "links"
    );
    setContactActive(
      location.pathname === "/portfolio.io/portfolio.io/contact"
        ? "links active fa-shake"
        : "links"
    );
  }, []);
  return (
    <>
      <div title="downielogic" id="logo"></div>
      <nav>
        <ul className="nav-links small-head ">
          <li>
            <Link
              className={homeActive}
              onClick={() => {
                setHomeActive("links active fa-shake");
                setContactActive("links");
              }}
              to="/portfolio.io/"
            >
              <i className="fa-solid fa-house"></i>
            </Link>
          </li>
          <li>
            <Link
              className={contactActive}
              onClick={() => {
                setHomeActive("links");
                setContactActive("links active fa-shake");
              }}
              to="/portfolio.io/contact"
            >
              <i className="fa-solid fa-address-card"></i>
            </Link>
          </li>
        </ul>
        <Outlet />
      </nav>
    </>
  );
};

export default Layout;
