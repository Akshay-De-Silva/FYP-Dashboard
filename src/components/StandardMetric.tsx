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
}) => {
  return (
    <div className="outlinedComponent">
      <h2>Standard Metrics</h2>
      <div className="standard-metric-container">
        <div>
          <h3 className="metric-name">{props.name1}</h3>
          <h4 className="metric-result">{props.result1}</h4>
        </div>
        <div>
          <h3 className="metric-name">{props.name2}</h3>
          <h4 className="metric-result">{props.result2}</h4>
        </div>
        <div>
          <h3 className="metric-name">{props.name3}</h3>
          <h4 className="metric-result">{props.result3}</h4>
        </div>
        <div>
          <h3 className="metric-name">{props.name4}</h3>
          <h4 className="metric-result">{props.result4}</h4>
        </div>
      </div>
    </div>
  );
};
