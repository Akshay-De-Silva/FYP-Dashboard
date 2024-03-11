import "../App.css";
import { model_logistic_regression, model_linear_regression } from "./ApiBase";

interface SideBarProps {
  extWeight: number;
  perfWeight: number;
  setExtWeight: (newExtWeight: number) => void;
  setPerfWeight: (newPerfWeight: number) => void;
  updateChosenModel: (model: string) => void;
  setTypeToClass: () => void;
  setTypeToReg: () => void;
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
            onClick={() =>
              handleClassModel("logistic_regression") &&
              model_logistic_regression(extWeight, perfWeight)
            }
          >
            Logistic Regression
          </button>
        </li>
        <li>
          <button
            className="sideBtn"
            onClick={() => console.log("K-Nearest Neighbors")}
          >
            K-Nearest Neighbors
          </button>
        </li>
        <li>
          <button
            className="sideBtn"
            onClick={() => console.log("Decision Tree")}
          >
            Decision Tree
          </button>
        </li>
        <li>
          <button
            className="sideBtn"
            onClick={() => console.log("Random Forest")}
          >
            Random Forest
          </button>
        </li>
        <li>
          <button
            className="sideBtn"
            onClick={() => console.log("Naive Bayes")}
          >
            Naive Bayes
          </button>
        </li>
        <li>
          <button
            className="sideBtn"
            onClick={() => console.log("Support Vector Machine")}
          >
            Support Vector Machine
          </button>
        </li>
        <li>
          <button
            className="sideBtn"
            onClick={() => console.log("Neural Network")}
          >
            Neural Network
          </button>
        </li>
      </ul>
      <h4 className="sidebarTitle">Regression</h4>
      <ul>
        <li>
          <button
            className="sideBtn"
            onClick={() =>
              handleRegModel("linear_regression") &&
              model_linear_regression(extWeight, perfWeight)
            }
          >
            Linear Regression
          </button>
        </li>
        <li>
          <button
            className="sideBtn"
            onClick={() => console.log("Ridge Regression")}
          >
            Ridge Regression
          </button>
        </li>
        <li>
          <button
            className="sideBtn"
            onClick={() => console.log("Lasso Regression")}
          >
            Lasso Regression
          </button>
        </li>
        <li>
          <button
            className="sideBtn"
            onClick={() => console.log("Bayesian Ridge Regression")}
          >
            Bayesian Ridge Regression
          </button>
        </li>
      </ul>
    </div>
  );
};
