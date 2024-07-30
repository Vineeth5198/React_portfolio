import React from "react";
import node from "../../assets/Node_logo.png";
import python from "../../assets/python.png";
import oracle from "../../assets/oracle_icon.png";
import mongodb from "../../assets/mongodb_icon.png";
import graphql from "../../assets/Graphql_icon.png";
import sql from "../../assets/SQL_logo.png";
import git from "../../assets/Git_icon.png";
import github from "../../assets/Git_Hub_icon.png";

const Backend = () => {
  return (
    <div className="skills_content">
      <h3 className="skills_title"> Backend </h3>

      <div className="skills_box">
        <div className="skills_group">
          <div className="icon">
            <img src={node} alt="node" />
          </div>

          <div className="icon">
            <img src={oracle} alt="oracle" />
          </div>

          <div className="icon">
            <img src={graphql} alt="graphql" />
          </div>

          <div className="icon">
            <img src={git} alt="git" />
          </div>
        </div>

        <div className="skills_group">
          <div className="icon">
            <img src={python} alt="python" />
          </div>

          <div className="icon">
            <img src={mongodb} alt="mongodb" />
          </div>

          <div className="icon">
            <img src={sql} alt="sql" />
          </div>

          <div className="icon">
            <img src={github} alt="github" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
