import axios from "axios";
import { toast } from "sonner";

// Create an instance
const instance = axios.create({
  baseURL: "https://test.getartisana.com",
});

// Create interceptors

instance.interceptors.request.use(
  (config) => {
    // get localSTorage
    let details: { accessToken: string } = { accessToken: "" };

    try {
      details = JSON.parse(localStorage.getItem("userDetails")!);
    } catch (e) {
      localStorage.removeItem("userDetails");
    }

    config.headers.Authorization = `Bearer ${
      details?.accessToken ? details.accessToken : ""
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
