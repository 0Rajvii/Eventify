import axios from "axios";
import { clearAccessToken, getAccessToken } from "./localstorage";

axios.defaults.baseURL =
  process.env.REACT_APP_API_SERVER || "http://localhost:4000";


axios.interceptors.request.use(
  (config) => {
    try {
      const token = getAccessToken();
      if (token) {
        config.headers.authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.log("Auth Token is not supported");
    }
    return config;
  },
  (error) => {
    console.log("error", error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log("error-e", error);
    if (error.response) {
      const response = error.response;
      const statusCode = error.statusCode;
      const status = response.status;
      console.log("Failed", status);
      if (status === 403) {
        console.log("Failed with:", statusCode);
        clearAccessToken();
        window.location.href = '/login';
      }
      if (status >= 400) {
        throw response.data;
      }
    }
  }
);

export default axios;