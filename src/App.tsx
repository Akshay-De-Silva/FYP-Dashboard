import "./App.css";
import { useState } from "react";
import { Metric } from "./components/Metric";
import result from "./result.json";
import { StandardMetric } from "./components/StandardMetric";
import { SideBar } from "./components/SideBar";

const Type = {
  classification: "classification",
  regression: "regression",
};

function App() {
  const [metricType, setMetricType] = useState(Type.classification);

  const toggleMetricsType = () => {
    metricType === Type.classification
      ? setMetricType(Type.regression)
      : setMetricType(Type.classification);
  };

  const imageMap: { [key: string]: string } = {
    BATI: "images/BATI.jpg",
    BRMSETI: "images/BRMSETI.jpg",
    RAF1_CPU: "images/RAF1_CPU.jpg",
    RAF1_GPU: "images/RAF1_GPU.jpg",
    RAF1_RAM: "images/RAF1_RAM.jpg",
    RARS_CPU: "images/RARS_CPU.jpg",
    RARS_GPU: "images/RARS_GPU.jpg",
    RARS_RAM: "images/RARS_RAM.jpg",
    F1CI: "images/F1CI.jpg",
    RMSPECI: "images/RMSPECI.jpg",
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
      formulaImage: "BATI",
      result: result.BATI ? result.BATI : defaultResults.BATI,
    },
    {
      name: "Resource Adjusted F1 Score (CPU)",
      formulaImage: "RAF1_CPU",
      result: result.RAF1_CPU ? result.RAF1_CPU : defaultResults.RAF1_CPU,
    },
    {
      name: "Resource Adjusted F1 Score (GPU)",
      formulaImage: "RAF1_GPU",
      result: result.RAF1_GPU ? result.RAF1_GPU : defaultResults.RAF1_GPU,
    },
    {
      name: "Resource Adjusted F1 Score (RAM)",
      formulaImage: "RAF1_RAM",
      result: result.RAF1_RAM ? result.RAF1_RAM : defaultResults.RAF1_RAM,
    },
    {
      name: "F1 Cost Index",
      formulaImage: "F1CI",
      result: result.F1CI ? result.F1CI : defaultResults.F1CI,
    },
  ];

  const regMetrics = [
    {
      name: "Balanced RMSE-Time Index",
      formulaImage: "BRMSETI",
      result: result.BRMSETI ? result.BRMSETI : defaultResults.BRMSETI,
    },
    {
      name: "Resource Adjusted R-Squared (CPU)",
      formulaImage: "RARS_CPU",
      result: result.RARS_CPU ? result.RARS_CPU : defaultResults.RARS_CPU,
    },
    {
      name: "Resource Adjusted R-Squared (GPU)",
      formulaImage: "RARS_GPU",
      result: result.RARS_GPU ? result.RARS_GPU : defaultResults.RARS_GPU,
    },
    {
      name: "Resource Adjusted R-Squared (RAM)",
      formulaImage: "RARS_RAM",
      result: result.RARS_RAM ? result.RARS_RAM : defaultResults.RARS_RAM,
    },
    {
      name: "RMSPE Cost Index",
      formulaImage: "RMSPECI",
      result: result.RMSPECI ? result.RMSPECI : defaultResults.RMSPECI,
    },
  ];

  // const standardClassMetrics = [
  //   {
  //     name: "Accuracy",
  //     result: result.Accuracy ? result.Accuracy : defaultResults.Accuracy,
  //   },
  //   {
  //     name: "F1 Score",
  //     result: result.F1Score ? result.F1Score : defaultResults.F1Score,
  //   },
  //   {
  //     name: "Precision",
  //     result: result.Precision ? result.Precision : defaultResults.Precision,
  //   },
  //   {
  //     name: "Recall",
  //     result: result.Recall ? result.Recall : defaultResults.Recall,
  //   },
  // ];

  // const standardRegMetrics = [
  //   {
  //     name: "Mean Squared Error",
  //     result: result.MSE ? result.MSE : defaultResults.MSE,
  //   },
  //   {
  //     name: "Root Mean Squared Error",
  //     result: result.RSME ? result.RSME : defaultResults.RSME,
  //   },
  //   {
  //     name: "Mean Absolute Error",
  //     result: result.MAE ? result.MAE : defaultResults.MAE,
  //   },
  //   {
  //     name: "R-Squared",
  //     result: result.R2 ? result.R2 : defaultResults.R2,
  //   },
  // ];

  return (
    <div className="App">
      <SideBar />
      {metricType === Type.classification
        ? classMetrics.map((metric, index) => (
            <Metric
              key={index}
              name={metric.name}
              formulaImage={imageMap[metric.formulaImage]}
              result={metric.result}
            />
          ))
        : regMetrics.map((metric, index) => (
            <Metric
              key={index}
              name={metric.name}
              formulaImage={imageMap[metric.formulaImage]}
              result={metric.result}
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
      <button onClick={toggleMetricsType}>Toggle Metrics Type</button>
    </div>
  );
}

export default App;
