import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { useNavigate } from "react-router-dom";

export const GraphMetric = (props: {
  yaxis: string;
  zero: number;
  quarter: number;
  half: number;
  third: number;
  isF1Score: boolean;
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/Model_Robustness`);
  };

  const data = [];
  const robustnessValues = ["0%", "25%", "50%", "75%"];
  const performanceValues = [
    props.zero,
    props.quarter,
    props.half,
    props.third,
  ];

  for (let i = 0; i < robustnessValues.length; i++) {
    data.push({
      robustness: robustnessValues[i],
      ...(props.isF1Score
        ? { F1_Score: performanceValues[i] }
        : { R_Squared: performanceValues[i] }),
    });
  }

  return (
    <div className="graph-containter" onClick={handleClick}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="robustness"
            stroke="#FFFFFF"
            label={{
              value: "% of Noise in the Dataset",
              position: "bottom",
              offset: -7,
              style: { fill: "white" },
            }}
          />
          <YAxis
            stroke="#FFFFFF"
            label={{
              value: props.yaxis,
              position: "insideLeft",
              offset: 0,
              angle: -90,
              style: { fill: "white" },
            }}
          />
          <Line
            type="monotone"
            dataKey={props.yaxis}
            stroke="#FFFFFF"
            fill="#483d8b"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
