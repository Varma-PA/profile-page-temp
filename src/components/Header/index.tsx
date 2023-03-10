import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../ThemeContext";

interface headerProps {
  callBack: () => void;
}

const Header = ({ callBack }: headerProps): JSX.Element => {
  const theme = useContext(ThemeContext);

  const [hamburgerClick, setHamburgerClick] = useState(true);

  return (
    <header className={"header " + theme}>
      <div className="header-flexbox">
        <h3>Achyuth Varma</h3>
        <div className="parent-nav-flexbox">
          <button
            id="hamburger"
            className={`hamburger hamburger-${theme}`}
            onClick={() => setHamburgerClick((click) => !click)}
          >
            <i className="gg-menu"></i>
          </button>

          <div
            className={`nav-flexbox ${
              hamburgerClick === true ? "nav-mobile-show" : "nav-mobile-noshow"
            } `}
          >
            <ul
              className={`header-navigation header-navigation-${theme} mobile-theme`}
            >
              <li>
                <Link
                  to="/"
                  style={{ textDecoration: "none" }}
                  className={theme === "light" ? "text-light" : "text-dark"}
                >
                  <li>Home</li>
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  style={{ textDecoration: "none" }}
                  className={theme === "light" ? "text-light" : "text-dark"}
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  style={{ textDecoration: "none" }}
                  className={theme === "light" ? "text-light" : "text-dark"}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <button
              className={`change-theme-button button-${theme}`}
              onClick={callBack}
            >
              {/* <i className="gg-sun"></i> */}
              {theme + " "}theme
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
