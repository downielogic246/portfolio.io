import { Outlet, Link } from "react-router-dom";
import "../stylesheets/Layout.css";

const Layout = () => {
  return (
    <>
      <div title="downielogic" id="logo"></div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link className="links" to="/portfolio.io/">
              Home
            </Link>
          </li>
          <li>
            <Link className="links" to="/portfolio.io/contact">
              Contact
            </Link>
          </li>
        </ul>
        <Outlet />
      </nav>
    </>
  );
};

export default Layout;