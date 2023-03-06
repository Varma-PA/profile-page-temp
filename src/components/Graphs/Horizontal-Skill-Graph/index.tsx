import React, { useMemo } from "react";
import { AxisOptions, Chart } from "react-charts";
import ResizableBox from "../ResizableBox.jsx";

type SkillsGraph = {
  language: string;
  rating: number;
};

type Series = {
  label: string;
  data: SkillsGraph[];
};

const data: Series[] = [
  {
    label: "Java",
    data: [
      {
        language: "Java",
        rating: 70,
      },
    ],
  },
  {
    label: "JavaScript",
    data: [
      {
        language: "JavaScript",
        rating: 90,
      },
    ],
  },
  {
    label: "Python",
    data: [
      {
        language: "Python",
        rating: 70,
      },
    ],
  },
  {
    label: "C Programming",
    data: [
      {
        language: "C",
        rating: 40,
      },
    ],
  },
];

const HorizontalBarGraph = () => {
  const primaryAxis = useMemo(
    (): AxisOptions<SkillsGraph> => ({
      position: "left",
      getValue: (datum) => datum.language,
      showGrid: false,
    }),
    []
  );

  const secondaryAxes = useMemo(
    (): AxisOptions<SkillsGraph>[] => [
      {
        position: "bottom",
        getValue: (datum) => datum.rating,
        hardMin: 0,
        hardMax: 100,
        shouldNice: true,
        showGrid: false,
      },
    ],
    []
  );

  return (
    <div>
      <ResizableBox>
        <h2>Skills</h2>
        <Chart
          color="black"
          options={{
            data,
            primaryAxis,
            secondaryAxes,
          }}
        />
      </ResizableBox>
    </div>
  );
};

export default HorizontalBarGraph;
