import axios from "axios";

const API_BASE_URL = "https://ml-hosting-e6odm.ondigitalocean.app/";

export async function model_logistic_regression(
  weight_e: number,
  weight_p: number
) {
  try {
    const response = await axios.post(`${API_BASE_URL}/getLogReg`, {
      weight_e,
      weight_p,
    });
    const jsonData = JSON.parse(response.data);
    return jsonData;
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
    const jsonData = JSON.parse(response.data);
    return jsonData;
  } catch (error) {
    console.error("Error fetching data for linear regression:", error);
  }
}
