import React from "react";

type progressCircleProps = {
  percentage: number;
};

type circleProps1 = {
  colour: string;
  percentage: number;
};

type textProps = {
  percentage: number;
};

function ProgressCircle({ percentage }: progressCircleProps) {
  const cleanPercentage = (percentage: number) => {
    const isNegativeOrNaN = !Number.isFinite(+percentage) || percentage < 0;
    const isTooHigh = percentage > 100;
    return isNegativeOrNaN ? 0 : isTooHigh ? 100 : +percentage;
  };

  const Circle = (props: circleProps1) => {
    const r = 50;
    const circ = 2 * Math.PI * r;
    const strokePct = ((100 - props?.percentage) * circ) / 100;

    return (
      <circle
        r={r}
        cx={100}
        cy={100}
        fill="white"
        stroke={strokePct !== circ ? props?.colour : ""}
        strokeWidth={"0.25em"}
        strokeDasharray={circ}
        strokeDashoffset={props?.percentage ? strokePct : 0}
      ></circle>
    );
  };

  const Text = ({ percentage }: textProps) => {
    return (
      <text
        x="50%"
        y="50%"
        dominantBaseline="central"
        textAnchor="middle"
        fontSize={"1.5em"}
        fill="#005dbd"
      >
        {(percentage / 20).toFixed(0)}
      </text>
    );
  };
  const pct = cleanPercentage(percentage);
  return (
    <svg width={200} height={200}>
      <g transform={`rotate(-90 ${"100 100"})`}>
        <Circle colour="#acaca3" percentage={100} />
        <Circle colour="#005dbd" percentage={pct} />
      </g>
      <Text percentage={pct} />
    </svg>
  );
}

export default ProgressCircle;
