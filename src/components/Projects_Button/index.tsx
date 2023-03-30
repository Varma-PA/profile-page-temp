import React, { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

interface propType {
  heading: string;
  callback: Function;
}

const ProjectsButton = ({ heading, callback }: propType) => {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <button
        className={`button-23 button-block-${theme}`}
        onClick={() => callback(heading)}
      >
        {heading}
      </button>
    </div>
  );
};

export default ProjectsButton;
