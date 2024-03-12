import "../App.css";

export const StandardMetric = (props: {
  name1: string;
  name2: string;
  name3: string;
  name4: string;
  result1: number;
  result2: number;
  result3: number;
  result4: number;
  modelResult1: number;
  modelResult2: number;
  modelResult3: number;
  modelResult4: number;
}) => {
  return (
    <div className="standard-metric">
      <h1 className="standard-metric-title">Standardized Metrics</h1>
      <div className="standard-metric-container">
        <div>
          <h2 className="metric-name">{props.name1}</h2>
          <h2 className="metric-result">{props.modelResult1}</h2>
        </div>
        <div>
          <h2 className="metric-name">{props.name2}</h2>
          <h2 className="metric-result">{props.modelResult2}</h2>
        </div>
        <div>
          <h2 className="metric-name">{props.name3}</h2>
          <h2 className="metric-result">{props.modelResult3}</h2>
        </div>
        <div>
          <h2 className="metric-name">{props.name4}</h2>
          <h2 className="metric-result">{props.modelResult4}</h2>
        </div>
      </div>
    </div>
  );
};
