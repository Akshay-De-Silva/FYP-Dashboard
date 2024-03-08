import "../App.css";

export const Metric = (props: {
  name: string;
  formulaImage?: string;
  result: number;
}) => {
  return (
    <div className="metric-container">
      <h2>{props.name}</h2>
      <img
        className="formulaImage"
        src={props.formulaImage}
        alt={props.formulaImage}
      />
      <h2>{props.result}</h2>
    </div>
  );
};
