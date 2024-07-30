import React from "react";
import Frontend from "./Frontend";
import Backend from "./Backend";
import "./Skills.css";
import html5 from "../../assets/html-5.png";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section_title">Skills</h2>
      <span className="section_subtitle">My Technical Skills</span>

      <div className="skills_container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};

export default Skills;
