import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Key from "constanst/Key";

const initApi = (url?: string, headers = {}) => {
  if (url === null) throw new Error("URL is required");
  const api = axios.create({
    baseURL: url,
    timeout: 100000,
    headers: {
      "Content-Type": "application/json",
      accept: "*/*",
      ...headers
    }
  });

  api.interceptors.request.use(async (config) => {
    try {
      const token = await AsyncStorage.getItem(Key.TOKEN);
      if (token != null) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.log("AsyncStorange error: ", error);
    }
    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      console.log("\x1b[31m", error?.config?.header?.Authorization);
      console.log(
        "\x1b[31m",
        "ERROR REQUEST URL: ",
        error.config?.baseURL + "/" + error.config.url
      );
      console.log("\x1b[31m", "ERROR REQUEST body: ", error.config.data);
      return Promise.reject(error);
    }
  );

  return api;
};

export default initApi;
