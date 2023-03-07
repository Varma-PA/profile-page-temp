import React, { useState } from "react";
import ProjectsButton from "../Projects_Button";

const Projects = () => {
  const [clickedButton, setClickedButton] = useState("All");

  const setCallBack = (heading: string) => {
    console.log(heading);

    setClickedButton(heading);
  };

  return (
    <div className="projects-flex-box">
      <h2>Projects</h2>

      <div className="projects-button">
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

      <div></div>
    </div>
  );
};

export default Projects;
