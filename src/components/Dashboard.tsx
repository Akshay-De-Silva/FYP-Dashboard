import "../App.css";
import { SetStateAction, useState } from "react";
import { Metric } from "./Metric";
import { StandardMetric } from "./StandardMetric";
import { SideBar } from "./SideBar";
import { GraphMetric } from "./GraphMetric";
import result from "../jsons/result.json";
import robustness from "../jsons/robustness.json";
import formula from "../jsons/formula.json";

export const Dashboard = (props: { metricType: string }) => {
  const [chosenModel, setChosenModel] = useState("default");
  const [modelResult, setModelResult] = useState({
    BATI: 0,
    RAF1_CPU: 0,
    RAF1_GPU: 0,
    RAF1_RAM: 0,
    F1CI: 0,
    BRMSETI: 0,
    RARS_CPU: 0,
    RARS_GPU: 0,
    RARS_RAM: 0,
    RMSPECI: 0,
    Accuracy: 0,
    F1Score: 0,
    Precision: 0,
    Recall: 0,
    MSE: 0,
    RSME: 0,
    MAE: 0,
    R2: 0,
  });

  const updateModelResult = (
    modelResultData: SetStateAction<{
      BATI: number;
      RAF1_CPU: number;
      RAF1_GPU: number;
      RAF1_RAM: number;
      F1CI: number;
      BRMSETI: number;
      RARS_CPU: number;
      RARS_GPU: number;
      RARS_RAM: number;
      RMSPECI: number;
      Accuracy: number;
      F1Score: number;
      Precision: number;
      Recall: number;
      MSE: number;
      RSME: number;
      MAE: number;
      R2: number;
    }>
  ) => {
    setModelResult(modelResultData);
  };

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

  //add graph data here for each model
  const robustnessData = [
    {
      name: "default",
      zero: robustness.default[0],
      quarter: robustness.default[1],
      half: robustness.default[2],
      third: robustness.default[3],
    },
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
    {
      name: "knn",
      zero: robustness.knn[0],
      quarter: robustness.knn[1],
      half: robustness.knn[2],
      third: robustness.knn[3],
    },
    {
      name: "dt",
      zero: robustness.dt[0],
      quarter: robustness.dt[1],
      half: robustness.dt[2],
      third: robustness.dt[3],
    },
    {
      name: "rf",
      zero: robustness.rf[0],
      quarter: robustness.rf[1],
      half: robustness.rf[2],
      third: robustness.rf[3],
    },
    {
      name: "nb",
      zero: robustness.nb[0],
      quarter: robustness.nb[1],
      half: robustness.nb[2],
      third: robustness.nb[3],
    },
    {
      name: "svm",
      zero: robustness.svm[0],
      quarter: robustness.svm[1],
      half: robustness.svm[2],
      third: robustness.svm[3],
    },
    {
      name: "rr",
      zero: robustness.rr[0],
      quarter: robustness.rr[1],
      half: robustness.rr[2],
      third: robustness.rr[3],
    },
    {
      name: "lasso",
      zero: robustness.lasso[0],
      quarter: robustness.lasso[1],
      half: robustness.lasso[2],
      third: robustness.lasso[3],
    },
    {
      name: "brr",
      zero: robustness.brr[0],
      quarter: robustness.brr[1],
      half: robustness.brr[2],
      third: robustness.brr[3],
    },
    {
      name: "en",
      zero: robustness.en[0],
      quarter: robustness.en[1],
      half: robustness.en[2],
      third: robustness.en[3],
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
        updateModelResult={
          updateModelResult as (
            modelResultData: SetStateAction<{
              BATI: number;
              RAF1_CPU: number;
              RAF1_GPU: number;
              RAF1_RAM: number;
              F1CI: number;
              BRMSETI: number;
              RARS_CPU: number;
              RARS_GPU: number;
              RARS_RAM: number;
              RMSPECI: number;
              Accuracy: number;
              F1Score: number;
              Precision: number;
              Recall: number;
              R2: number;
            }>
          ) => void
        }
      />
      {metricType === Type.classification
        ? classMetrics.map((metric, index) => (
            <Metric
              key={index}
              name={metric.name}
              formulaName={formula[metric.formulaName as keyof typeof formula]}
              result={metric.result}
              abbreviation={metric.formulaName}
              modelResult={
                modelResult[metric.formulaName as keyof typeof modelResult]
              }
            />
          ))
        : regMetrics.map((metric, index) => (
            <Metric
              key={index}
              name={metric.name}
              formulaName={formula[metric.formulaName as keyof typeof formula]}
              result={metric.result}
              abbreviation={metric.formulaName}
              modelResult={
                modelResult[metric.formulaName as keyof typeof modelResult]
              }
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
          modelResult1={modelResult["Accuracy" as keyof typeof modelResult]}
          modelResult2={modelResult["F1Score" as keyof typeof modelResult]}
          modelResult3={modelResult["Precision" as keyof typeof modelResult]}
          modelResult4={modelResult["Recall" as keyof typeof modelResult]}
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
          modelResult1={modelResult["MSE" as keyof typeof modelResult]}
          modelResult2={modelResult["RSME" as keyof typeof modelResult]}
          modelResult3={modelResult["MAE" as keyof typeof modelResult]}
          modelResult4={modelResult["R2" as keyof typeof modelResult]}
        />
      )}
    </div>
  );
};
