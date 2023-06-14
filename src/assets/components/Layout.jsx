import { Outlet, Link } from "react-router-dom";
import "../stylesheets/Layout.css";

const Layout = () => {
  return (
    <>
      <div className="image-logo">
        <img
          src="../../../public/photos/DL_logo_only.png"
          alt="downielogic"
          className="logo"
        />
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link className="links" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="links" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
