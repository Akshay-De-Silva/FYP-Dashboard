import { useNavigate, useLocation } from "react-router-dom";
import details from "../jsons/details.json";
import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";
import "../App.css";

export const Details = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const metricName = location.pathname.split("/").pop();
  const metricDetails = details[metricName as keyof typeof details];

  return (
    <div className="details">
      {metricDetails.formula === "../images/robustGraph.png" ? (
        <div>
          <h2 className="detailNameImg">{metricDetails.name}</h2>
          <img
            className="detailImage"
            src="../images/robustGraph.png"
            alt="Robustness Graph"
          />
        </div>
      ) : (
        <div>
          <h2 className="detailName">{metricDetails.name}</h2>
          <p className="detailFormula">
            <BlockMath math={metricDetails.formula} />
          </p>
        </div>
      )}
      <p className="detailDescrip">{metricDetails.description}</p>
      <button
        className="detailBack"
        onClick={() => {
          navigate("/");
        }}
      >
        Return to Dashboard
      </button>
    </div>
  );
};