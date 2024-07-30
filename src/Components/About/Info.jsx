import React from "react";

const Info = () => {
  return (
    <div className="about_info grid">
      <div className="about_box">
        <i className="bx bx-award about-icon"></i>
        <h3 className="about_title">Professional Experience</h3>
        <span className="about_subtitle">5 years Working</span>
      </div>
      <div className="about_box">
        {" "}
        <i className="bx bx-briefcase-alt about-icon"></i>
        <h3 className="about_title">Completed</h3>
        <span className="about_subtitle">6 Projects</span>
      </div>
      {/* <div className="about_box">
        {" "}
        <i className="bx bx-support about-icon"></i>
        <h3 className="about_title">Support</h3>
        <span className="about_subtitle">5 years Working</span>
      </div> */}
    </div>
  );
};

export default Info;
