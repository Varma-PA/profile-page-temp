import React from "react";
import { Bar } from "react-chartjs-2";

interface skillsBarGraphProps {
  data: any;
  options: any;
}

const SkillsBarGraph = ({ data, options }: skillsBarGraphProps) => {
  return <Bar data={data} options={options} />;
};

export default SkillsBarGraph;
