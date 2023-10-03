import axios from "axios";

export const apiEndpoint = (endpoint) => {
  return `http://localhost:3500/${endpoint}`;
};

export default {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
};
