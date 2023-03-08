import React from "react";

interface propType {
  heading: string;
  callback: Function;
}

const ProjectsButton = ({ heading, callback }: propType) => {
  return (
    <div>
      <button className="button-23" onClick={() => callback(heading)}>
        {heading}
      </button>
    </div>
  );
};

export default ProjectsButton;
