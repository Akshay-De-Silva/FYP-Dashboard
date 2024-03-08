import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const GraphMetric = (props: {
  yaxis: string;
  zero: number;
  quarter: number;
  half: number;
  third: number;
  isF1Score: boolean;
}) => {
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
    <div className="graph">
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
          <XAxis dataKey="robustness" stroke="#FFFFFF" />
          <YAxis stroke="#FFFFFF" />
          <Legend />
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
