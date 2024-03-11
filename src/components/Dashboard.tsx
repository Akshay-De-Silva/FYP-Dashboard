import "../App.css";
import { useState } from "react";
import { Metric } from "./Metric";
import { StandardMetric } from "./StandardMetric";
import { SideBar } from "./SideBar";
import { GraphMetric } from "./GraphMetric";
import result from "../jsons/result.json";
import robustness from "../jsons/robustness.json";
import formula from "../jsons/formula.json";

export const Dashboard = (props: { metricType: string }) => {
  const [chosenModel, setChosenModel] = useState("logistic_regression");

  const updateChosenModel = (model: string) => {
    setChosenModel(model);
  };

  const [extWeight, setExtWeight] = useState(0.5);
  const [perfWeight, setPerfWeight] = useState(0.5);

  const handleExtWeightChange = (newExtWeight: number) => {
    setExtWeight(newExtWeight);
    setPerfWeight(Number((1 - newExtWeight).toFixed(1)));
  };

  const Type = {
    classification: "classification",
    regression: "regression",
  };

  const [metricType, setMetricType] = useState(() => {
    if (props.metricType === "regression") {
      return Type.regression;
    } else {
      return Type.classification;
    }
  });

  const setTypeToClass = () => {
    setMetricType(Type.classification);
  };

  const setTypeToReg = () => {
    setMetricType(Type.regression);
  };

  const defaultResults = {
    BATI: 0,
    BRMSETI: 0,
    RAF1_CPU: 0,
    RAF1_GPU: 0,
    RAF1_RAM: 0,
    RARS_CPU: 0,
    RARS_GPU: 0,
    RARS_RAM: 0,
    F1CI: 0,
    RMSPECI: 0,
    Accuracy: 0,
    F1Score: 0,
    Precision: 0,
    Recall: 0,
    MSE: 0,
    RSME: 0,
    MAE: 0,
    R2: 0,
  };

  const classMetrics = [
    {
      name: "Balanced Accuracy-Time Index",
      formulaName: "BATI",
      result: result.BATI ? result.BATI : defaultResults.BATI,
    },
    {
      name: "Resource Adjusted F1 Score (CPU)",
      formulaName: "RAF1_CPU",
      result: result.RAF1_CPU ? result.RAF1_CPU : defaultResults.RAF1_CPU,
    },
    {
      name: "Resource Adjusted F1 Score (GPU)",
      formulaName: "RAF1_GPU",
      result: result.RAF1_GPU ? result.RAF1_GPU : defaultResults.RAF1_GPU,
    },
    {
      name: "Resource Adjusted F1 Score (RAM)",
      formulaName: "RAF1_RAM",
      result: result.RAF1_RAM ? result.RAF1_RAM : defaultResults.RAF1_RAM,
    },
    {
      name: "F1 Cost Index",
      formulaName: "F1CI",
      result: result.F1CI ? result.F1CI : defaultResults.F1CI,
    },
  ];

  const regMetrics = [
    {
      name: "Balanced RMSE-Time Index",
      formulaName: "BRMSETI",
      result: result.BRMSETI ? result.BRMSETI : defaultResults.BRMSETI,
    },
    {
      name: "Resource Adjusted R-Squared (CPU)",
      formulaName: "RARS_CPU",
      result: result.RARS_CPU ? result.RARS_CPU : defaultResults.RARS_CPU,
    },
    {
      name: "Resource Adjusted R-Squared (GPU)",
      formulaName: "RARS_GPU",
      result: result.RARS_GPU ? result.RARS_GPU : defaultResults.RARS_GPU,
    },
    {
      name: "Resource Adjusted R-Squared (RAM)",
      formulaName: "RARS_RAM",
      result: result.RARS_RAM ? result.RARS_RAM : defaultResults.RARS_RAM,
    },
    {
      name: "RMSPE Cost Index",
      formulaName: "RMSPECI",
      result: result.RMSPECI ? result.RMSPECI : defaultResults.RMSPECI,
    },
  ];

  const robustnessData = [
    {
      name: "logistic_regression",
      zero: robustness.logistic_regression[0],
      quarter: robustness.logistic_regression[1],
      half: robustness.logistic_regression[2],
      third: robustness.logistic_regression[3],
    },
    {
      name: "linear_regression",
      zero: robustness.linear_regression[0],
      quarter: robustness.linear_regression[1],
      half: robustness.linear_regression[2],
      third: robustness.linear_regression[3],
    },
  ];

  return (
    <div className="Dashboard">
      <SideBar
        perfWeight={perfWeight}
        extWeight={extWeight}
        setExtWeight={handleExtWeightChange}
        setPerfWeight={setPerfWeight}
        updateChosenModel={updateChosenModel}
        setTypeToClass={setTypeToClass}
        setTypeToReg={setTypeToReg}
      />
      {metricType === Type.classification
        ? classMetrics.map((metric, index) => (
            <Metric
              key={index}
              name={metric.name}
              formulaName={formula[metric.formulaName as keyof typeof formula]}
              result={metric.result}
              abbreviation={metric.formulaName}
            />
          ))
        : regMetrics.map((metric, index) => (
            <Metric
              key={index}
              name={metric.name}
              formulaName={formula[metric.formulaName as keyof typeof formula]}
              result={metric.result}
              abbreviation={metric.formulaName}
            />
          ))}
      {metricType === Type.classification
        ? robustnessData
            .filter((robust) => robust.name === chosenModel)
            .map((robust, index) => (
              <GraphMetric
                yaxis="F1_Score"
                zero={robust.zero}
                quarter={robust.quarter}
                half={robust.half}
                third={robust.third}
                isF1Score={true}
              />
            ))
        : robustnessData
            .filter((robust) => robust.name === chosenModel)
            .map((robust, index) => (
              <GraphMetric
                yaxis="R_Squared"
                zero={robust.zero}
                quarter={robust.quarter}
                half={robust.half}
                third={robust.third}
                isF1Score={false}
              />
            ))}
      {metricType === Type.classification ? (
        <StandardMetric
          name1="Accuracy"
          name2="F1 Score"
          name3="Precision"
          name4="Recall"
          result1={result.Accuracy ? result.Accuracy : defaultResults.Accuracy}
          result2={result.F1Score ? result.F1Score : defaultResults.F1Score}
          result3={
            result.Precision ? result.Precision : defaultResults.Precision
          }
          result4={result.Recall ? result.Recall : defaultResults.Recall}
        />
      ) : (
        <StandardMetric
          name1="Mean Squared Error"
          name2="Root Mean Squared Error"
          name3="Mean Absolute Error"
          name4="R-Squared"
          result1={result.MSE ? result.MSE : defaultResults.MSE}
          result2={result.RSME ? result.RSME : defaultResults.RSME}
          result3={result.MAE ? result.MAE : defaultResults.MAE}
          result4={result.R2 ? result.R2 : defaultResults.R2}
        />
      )}
    </div>
  );
};
