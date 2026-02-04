import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [dark, setDark] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  // Dark mode localStorage bilan
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDark(true);
      document.body.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setDark(!dark);
    if (!dark) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Scrollni disable qilish mobil menyu ochilganda
  useEffect(() => {
    document.body.style.overflow = navOpen ? "hidden" : "auto";
  }, [navOpen]);

  const closeMenu = () => setNavOpen(false);

  return (
    <>
      {/* Overlay fon */}
      <div
        className={`nav-overlay ${navOpen ? "overlay-active" : ""}`}
        onClick={closeMenu}
      ></div>

      <nav className={`navbar ${dark ? "dark" : ""}`}>
        <div className="container navbar-container">
          <h1 className="logo">Omega</h1>

          <ul className={`navbar-list ${navOpen ? "nav-active" : ""}`}>
            <li>
              <a href="#Section" className="navbar-link" onClick={closeMenu}>
                Demos
              </a>
            </li>
            <li>
              <a href="#Info" className="navbar-link" onClick={closeMenu}>
                Pages
              </a>
            </li>
            <li>
              <a href="#Contact" className="navbar-link" onClick={closeMenu}>
                Support
              </a>
            </li>
          </ul>

          <div className="navbar-items">
            <select className="lang-select">
              <option value="uz">UZ</option>
              <option value="ru">RU</option>
              <option value="en">EN</option>
            </select>

            <button className="theme-btn" onClick={toggleTheme}>
              {dark ? "☀️" : "🌙"}
            </button>

            <div
              className={`hamburger ${navOpen ? "toggle" : ""}`}
              onClick={() => setNavOpen(!navOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
