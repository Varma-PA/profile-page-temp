import React, { useContext } from "react";
import experienceData from "../../data/experience.json";
import { ThemeContext } from "../../ThemeContext";

interface valueType {
  id: number;
  title: string;
  company: string;
  duration: string;
  responsibilities: responsibilitiesType[];
}

interface responsibilitiesType {
  id: number;
  responsibility: string;
}

const Experience = () => {
  const theme = useContext(ThemeContext);

  return (
    <div className={`experience-flexbox`}>
      <h2 className="experience-heading">Experience</h2>

      {experienceData.map((value: valueType) => (
        <div
          className={`experience-child-block  experience-block-${theme} use-rubik-font`}
        >
          <h3>{value.company}</h3>
          <div>{value.title}</div>

          <ul>
            {value.responsibilities.map((resp: responsibilitiesType) => (
              <li key={resp.id}>{resp.responsibility}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;
