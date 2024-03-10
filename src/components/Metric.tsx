import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";
import "../App.css";

export const Metric = (props: {
  name: string;
  formulaName: string;
  result: number;
}) => {
  return (
    <div className="metric-container">
      <h2 className="metricTitle">{props.name}</h2>
      <p className="formula">
        <BlockMath math={props.formulaName} />
      </p>
      <h2 className="metricResult">{props.result}</h2>
    </div>
  );
};
