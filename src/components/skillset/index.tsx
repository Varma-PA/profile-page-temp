import React from "react";

interface propType {
  heading: string;
  content: string[];
}

const SkillSet = ({ heading, content }: propType) => {
  return (
    <div className="skillset-flex use-rubik-font">
      <h2>{heading}</h2>
      <ul className="skillset-list use-rubik-font">
        {content.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillSet;
