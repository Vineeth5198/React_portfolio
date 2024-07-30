import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  // =========== Change Background Header ===========

  window.addEventListener("scroll", function () {
    //When scroll is higher than 200 viewport height, add the scroll header class to a tag with the header tag
    const header = this.document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll_header");
    else header.classList.remove("scroll_header");
  });

  // =========== Toggle Menu ===========
  const [Toggle, ShowMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#Home");

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav_logo">
          Vineeth Molathoti
        </a>
        <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
          <ul className="nav_list grid">
            <li className="nav_item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav_link active-link" : "nav_link"
                }
              >
                <i className="uil uil-estate nav_icon"></i> Home
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav_link active-link" : "nav_link"
                }
              >
                <i className="uil uil-user nav_icon"></i> About
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills" ? "nav_link active-link" : "nav_link"
                }
              >
                <i className="uil uil-file-alt nav_icon"></i> Skills
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#qualifications"
                onClick={() => setActiveNav("#qualifications")}
                className={
                  activeNav === "#qualifications"
                    ? "nav_link active-link"
                    : "nav_link"
                }
              >
                <i className="uil uil-briefcase-alt nav_icon"></i> Qualification
              </a>
            </li>

            {/* <li className="nav_item">
              <a
                href="#services"
                onClick={() => setActiveNav("#services")}
                className={
                  activeNav === "#services"
                    ? "nav_link active-link"
                    : "nav_link"
                }
              >
                <i className="uil uil-briefcase-alt nav_icon"></i> Services
              </a>
            </li>

            <li className="nav_item">
              <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={
                  activeNav === "#portfolio"
                    ? "nav_link active-link"
                    : "nav_link"
                }
              >
                <i className="uil uil-scenery nav_icon"></i> Portfolio
              </a>
            </li> */}

            <li className="nav_item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact" ? "nav_link active-link" : "nav_link"
                }
              >
                <i className="uil uil-message nav_icon"></i> Contact
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav_close"
            onClick={() => ShowMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav_toggle" onClick={() => ShowMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;