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

export async function model_knn(weight_e: number, weight_p: number) {
  try {
    const response = await axios.post(`${API_BASE_URL}/getKnn`, {
      weight_e,
      weight_p,
    });
    const jsonData = JSON.parse(response.data);
    return jsonData;
  } catch (error) {
    console.error("Error fetching data for logistic regression:", error);
  }
}

export async function model_dt(weight_e: number, weight_p: number) {
  try {
    const response = await axios.post(`${API_BASE_URL}/getDt`, {
      weight_e,
      weight_p,
    });
    const jsonData = JSON.parse(response.data);
    return jsonData;
  } catch (error) {
    console.error("Error fetching data for logistic regression:", error);
  }
}

export async function model_rf(weight_e: number, weight_p: number) {
  try {
    const response = await axios.post(`${API_BASE_URL}/getRf`, {
      weight_e,
      weight_p,
    });
    const jsonData = JSON.parse(response.data);
    return jsonData;
  } catch (error) {
    console.error("Error fetching data for logistic regression:", error);
  }
}

export async function model_nb(weight_e: number, weight_p: number) {
  try {
    const response = await axios.post(`${API_BASE_URL}/getNb`, {
      weight_e,
      weight_p,
    });
    const jsonData = JSON.parse(response.data);
    return jsonData;
  } catch (error) {
    console.error("Error fetching data for logistic regression:", error);
  }
}

export async function model_svm(weight_e: number, weight_p: number) {
  try {
    const response = await axios.post(`${API_BASE_URL}/getSvm`, {
      weight_e,
      weight_p,
    });
    const jsonData = JSON.parse(response.data);
    return jsonData;
  } catch (error) {
    console.error("Error fetching data for logistic regression:", error);
  }
}

export async function model_rr(weight_e: number, weight_p: number) {
  try {
    const response = await axios.post(`${API_BASE_URL}/getRr`, {
      weight_e,
      weight_p,
    });
    const jsonData = JSON.parse(response.data);
    return jsonData;
  } catch (error) {
    console.error("Error fetching data for linear regression:", error);
  }
}

export async function model_lasso(weight_e: number, weight_p: number) {
  try {
    const response = await axios.post(`${API_BASE_URL}/getLasso`, {
      weight_e,
      weight_p,
    });
    const jsonData = JSON.parse(response.data);
    return jsonData;
  } catch (error) {
    console.error("Error fetching data for linear regression:", error);
  }
}

export async function model_brr(weight_e: number, weight_p: number) {
  try {
    const response = await axios.post(`${API_BASE_URL}/getBrr`, {
      weight_e,
      weight_p,
    });
    const jsonData = JSON.parse(response.data);
    return jsonData;
  } catch (error) {
    console.error("Error fetching data for linear regression:", error);
  }
}

export async function model_en(weight_e: number, weight_p: number) {
  try {
    const response = await axios.post(`${API_BASE_URL}/getEn`, {
      weight_e,
      weight_p,
    });
    const jsonData = JSON.parse(response.data);
    return jsonData;
  } catch (error) {
    console.error("Error fetching data for linear regression:", error);
  }
}
