import "../App.css";
import {
  model_logistic_regression,
  model_linear_regression,
  model_knn,
  model_dt,
  model_rf,
  model_nb,
  model_svm,
  model_rr,
  model_lasso,
  model_brr,
  model_en,
} from "./ApiBase";

interface SideBarProps {
  extWeight: number;
  perfWeight: number;
  setExtWeight: (newExtWeight: number) => void;
  setPerfWeight: (newPerfWeight: number) => void;
  updateChosenModel: (model: string) => void;
  setTypeToClass: () => void;
  setTypeToReg: () => void;
  updateModelResult: (modelResultData: any) => void;
}

const options = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9];

export const SideBar = ({
  extWeight,
  perfWeight,
  setExtWeight,
  setPerfWeight,
  updateChosenModel,
  setTypeToClass,
  setTypeToReg,
  updateModelResult,
}: SideBarProps) => {
  const handleExtWeightChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newExtWeight = parseFloat(e.target.value);
    setExtWeight(newExtWeight);
  };

  const handleClassModel = (model: string) => {
    setTypeToClass();
    updateChosenModel(model);
    return true;
  };

  const handleRegModel = (model: string) => {
    setTypeToReg();
    updateChosenModel(model);
    return true;
  };

  //add handle fucntions for each model
  const handleLogisticRegression = async () => {
    const results = await model_logistic_regression(extWeight, perfWeight);
    return results;
  };

  const handleLinearRegression = async () => {
    const results = await model_linear_regression(extWeight, perfWeight);
    return results;
  };

  const handleKnn = async () => {
    const results = await model_knn(extWeight, perfWeight);
    return results;
  };

  const handleDt = async () => {
    const results = await model_dt(extWeight, perfWeight);
    return results;
  };

  const handleRf = async () => {
    const results = await model_rf(extWeight, perfWeight);
    return results;
  };

  const handleNb = async () => {
    const results = await model_nb(extWeight, perfWeight);
    return results;
  };

  const handleSvm = async () => {
    const results = await model_svm(extWeight, perfWeight);
    return results;
  };

  const handleRr = async () => {
    const results = await model_rr(extWeight, perfWeight);
    return results;
  };

  const handleLasso = async () => {
    const results = await model_lasso(extWeight, perfWeight);
    return results;
  };

  const handleBrr = async () => {
    const results = await model_brr(extWeight, perfWeight);
    return results;
  };

  const handleEn = async () => {
    const results = await model_en(extWeight, perfWeight);
    return results;
  };

  return (
    <div className="sidebar">
      <h2 className="sidebarMainTitle">External Factor Evaluation Framework</h2>
      <h3>Select Weights</h3>
      <h4 className="sidebarWeight">External Factor Weight</h4>
      <select value={extWeight} onChange={handleExtWeightChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <h4 className="sidebarWeight">Performance Weight</h4>
      <p className="weightSelect">{perfWeight}</p>
      <h3>Select Model</h3>
      <h4 className="sidebarTitle">Classification</h4>
      <ul>
        <li>
          <button
            className="sideBtn"
            onClick={async () => {
              handleClassModel("logistic_regression");
              const results = await handleLogisticRegression();
              updateModelResult(results);
            }}
          >
            Logistic Regression
          </button>
        </li>
        <li>
          <button
            className="sideBtn"
            onClick={async () => {
              handleClassModel("knn");
              const results = await handleKnn();
              updateModelResult(results);
            }}
          >
            K-Nearest Neighbors
          </button>
        </li>
        <li>
          <button
            className="sideBtn"
            onClick={async () => {
              handleClassModel("dt");
              const results = await handleDt();
              updateModelResult(results);
            }}
          >
            Decision Tree
          </button>
        </li>
        <li>
          <button
            className="sideBtn"
            onClick={async () => {
              handleClassModel("rf");
              const results = await handleRf();
              updateModelResult(results);
            }}
          >
            Random Forest
          </button>
        </li>
        <li>
          <button
            className="sideBtn"
            onClick={async () => {
              handleClassModel("nb");
              const results = await handleNb();
              updateModelResult(results);
            }}
          >
            Naive Bayes
          </button>
        </li>
        <li>
          <button
            className="sideBtn"
            onClick={async () => {
              handleClassModel("svm");
              const results = await handleSvm();
              updateModelResult(results);
            }}
          >
            Support Vector Machine
          </button>
        </li>
      </ul>
      <h4 className="sidebarTitle">Regression</h4>
      <ul>
        <li>
          <button
            className="sideBtn"
            onClick={async () => {
              handleRegModel("linear_regression");
              const results = await handleLinearRegression();
              updateModelResult(results);
            }}
          >
            Linear Regression
          </button>
        </li>
        <li>
          <button
            className="sideBtn"
            onClick={async () => {
              handleRegModel("rr");
              const results = await handleRr();
              updateModelResult(results);
            }}
          >
            Ridge Regression
          </button>
        </li>
        <li>
          <button
            className="sideBtn"
            onClick={async () => {
              handleRegModel("lasso");
              const results = await handleLasso();
              updateModelResult(results);
            }}
          >
            Lasso Regression
          </button>
        </li>
        <li>
          <button
            className="sideBtn"
            onClick={async () => {
              handleRegModel("brr");
              const results = await handleBrr();
              updateModelResult(results);
            }}
          >
            Bayesian Ridge Regression
          </button>
        </li>
        <li>
          <button
            className="sideBtn"
            onClick={async () => {
              handleRegModel("en");
              const results = await handleEn();
              updateModelResult(results);
            }}
          >
            Elastic Net Regression
          </button>
        </li>
      </ul>
    </div>
  );
};
