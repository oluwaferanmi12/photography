import axios from "axios";
import { toast } from "sonner";

// Create an instance
const instance = axios.create({
  baseURL: "http://olaitanakinlade.com/",
});

// Create interceptors

instance.interceptors.request.use(
  (config) => {
    // get token from localStorage
    let details: { token: string } = { token: "" };
    try {
      details = JSON.parse(localStorage.getItem("userDetails")!);
    } catch (e) {
      localStorage.removeItem("userDetails");
    }
    config.headers.Authorization = `Bearer ${
      details?.token ? details.token : ""
    }`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.request.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.data?.message) {
      toast.error(error.response.data.message);
    } else {
      toast.error("Unexpected error ocurred!");
    }
    if (error.response?.status == 401 || error.response?.status == 403) {
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export const apiCall = async (
  method: "post" | "get" | "put" | "delete",
  url: string,
  body?: any
) => {
  if (method == "post") {
    return await instance.post(url, body);
  } else if (method == "get") {
    return await instance.get(url);
  } else if (method == "put") {
    return await instance.put(url, body);
  } else {
    return await instance.delete(url);
  }
};
