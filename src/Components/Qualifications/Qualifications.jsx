import React, { useState } from "react";
import "./Qualifications.css";

const Qualifications = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section" id="qualifications">
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My Personal Journey</span>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div
            className={
              toggleState === 1
                ? "qualification_button qualification_active button-flex"
                : "qualification_button button-flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-briefcase-alt qualification_icon">
              Experience
            </i>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification_button qualification_active button-flex"
                : "qualification_button button-flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-graduation-cap qualification_icon">
              Education
            </i>
          </div>
        </div>

        <div className="qualification_section">
          <div
            className={
              toggleState === 1
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  Senior Software Engineer
                </h3>
                <span className="qualification_subtitle">U.S. Bank</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i> 2023 - Present
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">Full Stack Developer</h3>
                <span className="qualification_subtitle">Bank of America</span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>2019 - 2022
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Developer</h3>
                <span className="qualification_subtitle">
                  Bharat Dynamics Limited
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i> 2019 - 2019
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  Master's in Computer Science
                </h3>
                <span className="qualification_subtitle">
                  University of Central Missouri
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2023
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">
                  Bachelor's in Mechanical Engineering
                </h3>
                <span className="qualification_subtitle">
                  V.N.R V.J.I.E.T. Hyderabad
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i> 2015 - 2019
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
