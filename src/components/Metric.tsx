export const Metric = (props: {
  name: string;
  formulaImage?: string;
  result: number;
}) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.formulaImage} alt={props.formulaImage} />
      <h3>{props.result}</h3>
    </div>
  );
};
