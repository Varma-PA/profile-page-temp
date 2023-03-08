import React from "react";

interface propType {
  projectHeading: string;
}

const ProjectDetails = ({ projectHeading }: propType) => {
  return (
    <div>
      <h3>Project Details</h3>
    </div>
  );
};

export default ProjectDetails;
