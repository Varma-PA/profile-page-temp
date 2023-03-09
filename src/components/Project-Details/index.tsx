import React, { useEffect, useState } from "react";
import ProjectBlock from "../Project_Block";
import projectsJson from "../../data/projects.json";

interface propType {
  projectHeading: string;
}

interface projectType {
  id: number;
  category: string;
  projectName: string;
  projectDescription: string;
  gitHubLink: string;
  technologiesUsed: string[];
}

const ProjectDetails = ({ projectHeading }: propType) => {
  // const [heading, setHeading] = useState();

  const [projects, setProjects] = useState<projectType[]>([]);

  useEffect(() => {
    if (projectHeading === "All") {
      setProjects([...projectsJson]);
    } else {
      const filteredProducts = projectsJson.filter(
        (projects) => projects.category === projectHeading
      );
      setProjects([...filteredProducts]);
    }
  }, [projectHeading]);

  return (
    <div className="project-details">
      {projects.map((project) => (
        <ProjectBlock
          id={project.id}
          category={project.category}
          projectName={project.projectName}
          projectDescription={project.projectDescription}
          technologiesUsed={project.technologiesUsed}
          gitHubLink={project.gitHubLink}
          heading={projectHeading}
        />
      ))}
    </div>
  );
};

export default ProjectDetails;
