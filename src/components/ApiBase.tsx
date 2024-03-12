import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:5000";

export async function model_logistic_regression(
  weight_e: number,
  weight_p: number
) {
  try {
    const response = await axios.post(`${API_BASE_URL}/getLogReg`, {
      weight_e,
      weight_p,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data for logistic regression:", error);
  }
}

export async function model_linear_regression(
  weight_e: number,
  weight_p: number
) {
  try {
    const response = await axios.post(`${API_BASE_URL}/getLinReg`, {
      weight_e,
      weight_p,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data for linear regression:", error);
  }
}
