import { useNavigate, useLocation } from "react-router-dom";

export const Details = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const metricName = location.pathname.split("/").pop();

  return (
    <div>
      <h1>Details</h1>
      <h1>Details for Formula: {metricName}</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Back
      </button>
    </div>
  );
};
