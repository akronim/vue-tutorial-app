// file dedicated to dealing with HTTP

import Vue from "vue";
import Axios from "axios";
import { bus } from "../main";

const httpClient = Axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 1000, // 1 second
  headers: {
    "Content-Type": "application/json",
  },
});

// Managing Auth Credentials using interceptors
const getAuthToken = () => localStorage.getItem("token");

const authInterceptor = (config) => {
  config.headers["Authorization"] = getAuthToken();
  return config;
};

httpClient.interceptors.request.use(authInterceptor);
// Managing Auth Credentials using interceptors END

// interceptor to catch errors
const errorInterceptor = (error) => {
  // check if it's a server error
  if (!error.response) {
    Vue.notify({
      type: "warn",
      title: "Network/Server error",
    });
    return Promise.reject(error);
  }

  // all the other error responses
  switch (error.response.status) {
    case 400:
      console.error(error.response.status, error.message);
      Vue.notify({
        type: "warn",
        title: "Data Not Found",
        text: "Nothing to display",
      });
      break;

    case 401: // authentication error, logout the user
      Vue.notify({
        type: "warn",
        title: "Session Expired",
        text: "Please login again",
      });
      localStorage.removeItem("token");
      // router.push("/auth");
      break;

    default:
      console.error(error.response.status, error.message);
      Vue.notify({
        type: "error",
        title: "Server Error",
      });
  }
  return Promise.reject(error);
};
// interceptor to catch errors END

// Interceptor for responses
const responseInterceptor = (response) => {
  switch (response.status) {
    case 200:
      // yay!
      break;
    // any other cases
    default:
    // default case
  }

  return response;
};

httpClient.interceptors.response.use(responseInterceptor, errorInterceptor);
// Interceptor for responses END

// Vue.js can’t detect exceptions that arise during asynchronous
// HTTP operations
// - provide error notifications by sending custom events
const sendRequest = async function(httpMethod, url, data) {
  try {
    return await httpClient.request({
      method: httpMethod,
      url: url,
      data: data,
    });
  } catch (err) {
    console.log({ err });
    if (err.response) {
      bus.$emit(
        "httpError",
        `${err.response.statusText} - ${err.response.status}`
      );
    } else {
      bus.$emit("httpError", "HTTP Error");
    }
    throw err;
  }
};

export const GET = async function(endpoint) {
  return (await sendRequest("GET", endpoint)).data;
};
export const POST = async function(endpoint, data) {
  return (await sendRequest("POST", endpoint, data)).data;
};
export const PUT = async function(endpoint, data) {
  return (await sendRequest("PUT", endpoint, data)).data;
};
export const DELETE = async function(endpoint, data) {
  return (await sendRequest("DELETE", endpoint, data)).data;
};

// It is important to use the await keyword when calling the asynchronous methods
// defined by the HTTP service. If the await keyword is omitted, the subsequent
// statements in the component’s method will be executed immediately regardless
// of the outcome of the HTTP request.
// For operations that ask the RESTfull web service to store or delete objects,
// that means the data that the application shows to the user will suggest
// that the operation has completed immediately and successfully, even if
// an error occurs.

// When you use the await keyword, any error that occurs during the execution of
// the asynchronous operation will cause an exception to be thrown in the
// component’s method, which will stop the execution of the statements in
// the component’s method and, in this case, prevent the user’s data from getting
// out of sync with the data on the server.
