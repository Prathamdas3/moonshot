import axios from "axios";

export const apiClient = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? process.env.DEV_BASE_URL
      : process.env.PRODUCTION_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
