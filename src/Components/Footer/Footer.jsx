import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Vineeth</h1>
        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="footer_link">
              Skills
            </a>
          </li>
          <li>
            <a href="#qualifications" className="footer_link">
              Qualifications
            </a>
          </li>
        </ul>

        <div className="footer_social">
          <a
            href="https://instagram.com/"
            className="footer_social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="uil uil-instagram"></i>
          </a>
          <a
            href="https://dribbble.com/"
            className="footer_social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="uil uil-facebook"></i>
          </a>
          <a
            href="https://github.com/"
            className="footer_social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="uil uil-github"></i>
          </a>

          <a
            href="https://twitter.com/"
            className="footer_social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="uil uil-twitter"></i>
          </a>
        </div>

        <span className="footer_copy">
          &#169; Vineeth - All Rights Reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
