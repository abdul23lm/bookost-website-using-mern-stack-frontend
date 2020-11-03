import axios from "axios";

// import errorResponseHandler from "./errorResponseHandler";

const instance = axios.create({
  baseURL: `https://cors-anywhere.herokuapp.com/${process.env.REACT_APP_HOST}/api/v1/member`,
});

// instance.interceptors.response.use(
//   (response) => response,
//   errorResponseHandler
// );

export default instance;
