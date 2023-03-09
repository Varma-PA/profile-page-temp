import React, { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
interface propType {
  id: number;
  category: string;
  projectName: string;
  projectDescription: string;
  gitHubLink: string;
  technologiesUsed: string[];
  heading: string;
}

const ProjectBlock = ({
  id,
  category,
  projectName,
  projectDescription,
  gitHubLink,
  technologiesUsed,
  heading,
}: propType) => {
  useEffect(() => {
    console.log("Inside Use Effect in project block");
  }, [heading]);

  const theme = useContext(ThemeContext);

  return (
    <div className={`project-block project-block-${theme} use-rubik-font`}>
      <div className="project-block-logo-external-link">
        <span className="material-symbols-outlined">folder_open</span>
        <a href={gitHubLink}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="external-link-icon-style"
            // style={{ fontSize: "1rem" }}
            height="48"
            width="48"
          >
            <path d="M9 42q-1.2 0-2.1-.9Q6 40.2 6 39V9q0-1.2.9-2.1Q7.8 6 9 6h30q1.2 0 2.1.9.9.9.9 2.1v4.5h-3V9H9v30h30v-4.5h3V39q0 1.2-.9 2.1-.9.9-2.1.9Zm25.65-8.7-2.1-2.1 5.65-5.7H19.15v-3H38.2l-5.65-5.7 2.1-2.1 9.3 9.3Z" />
          </svg>
        </a>
      </div>
      <h3 className="project-block-project-name">{projectName}</h3>
      <div className="project-block-description">{projectDescription}</div>
      <div className="project-block-technologies">{technologiesUsed}</div>
    </div>
  );
};

export default ProjectBlock;
