import React, { useState, useContext } from "react";
import ProjectDetails from "../Project-Details";
import ProjectsButton from "../Projects_Button";
import { ThemeContext } from "../../ThemeContext";

const Projects = () => {
  const [clickedButton, setClickedButton] = useState("All");

  const theme = useContext(ThemeContext);

  const setCallBack = (heading: string) => {
    console.log(heading);

    setClickedButton(heading);
  };

  return (
    <div className="projects-flex-box">
      <h2>Projects: {clickedButton}</h2>

      <div className={`projects-buttons`}>
        <div>
          <ProjectsButton heading="All" callback={setCallBack} />
        </div>
        <div>
          <ProjectsButton heading="FullStack" callback={setCallBack} />
        </div>
        <div>
          <ProjectsButton heading="Frontend" callback={setCallBack} />
        </div>
        <div>
          <ProjectsButton heading="Backend" callback={setCallBack} />
        </div>
        <div>
          <ProjectsButton heading="DBMS" callback={setCallBack} />
        </div>
        <div>
          <ProjectsButton heading="Data Science" callback={setCallBack} />
        </div>
      </div>

      <div className="project-details-center">
        <ProjectDetails projectHeading={clickedButton} />
      </div>
    </div>
  );
};

export default Projects;
