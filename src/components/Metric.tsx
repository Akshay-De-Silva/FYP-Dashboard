export const Metric = (props: {
  name: string;
  formulaImage?: string;
  result: number;
}) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <img
        src={props.formulaImage}
        alt={props.formulaImage}
        style={{ width: "30%", height: "auto" }}
      />
      <h4>{props.result}</h4>
    </div>
  );
};
