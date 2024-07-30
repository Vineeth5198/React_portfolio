import React from "react";
import html5 from "../../assets/html-5.png";
import css3 from "../../assets/css-3.png";
import react from "../../assets/React_logo.png";
import angular from "../../assets/Angular_logo.png";
import bootstrap from "../../assets/bootstrap.png";
import javascript from "../../assets/js.png";
import typescript from "../../assets/typescript.png";
import sass from "../../assets/sass_logo.png";
import figma from "../../assets/Figma_icon.png";
import invision from "../../assets/Invision_icon.png";

const Frontend = () => {
  return (
    <div className="skills_content">
      <h3 className="skills_title"> Frontend </h3>

      <div className="skills_box">
        <div className="skills_group">
          <div className="icon">
            <img src={html5} alt="html 5" />
          </div>

          <div className="icon">
            <img src={react} alt="react" />
          </div>

          <div className="icon">
            <img src={javascript} alt="javascript" />
          </div>

          <div className="icon">
            <img src={bootstrap} alt="bootstrap" />
          </div>

          <div className="icon">
            <img src={figma} alt="figma" />
          </div>
        </div>

        <div className="skills_group">
          <div className="icon">
            <img src={css3} alt="css3" />
          </div>

          <div className="icon">
            <img src={angular} alt="angular" />
          </div>

          <div className="icon">
            <img src={typescript} alt="typescript" />
          </div>

          <div className="icon">
            <img src={sass} alt="sass" />
          </div>

          <div className="icon">
            <img src={invision} alt="invision" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
