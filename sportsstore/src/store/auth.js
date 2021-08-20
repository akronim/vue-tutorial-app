// The result of authentication with RESTful web service is JSON Web Token (JWT),
// which is returned by the server and must be included in any subsequent
// requests using the Authorization HTTP header

// The application can authenticate the user by sending POST request to the
// /loginURL, including a JSON-formatted object in the request body that
// contains name and password

import Axios from "axios";

const baseUrl =
  process.env.NODE_ENV === "development"
    ? process.env.VUE_APP_BASE_URL_DEV
    : process.env.VUE_APP_BASE_URL_PROD;

const loginUrl = `${baseUrl}/login`;

export default {
  state: {
    authenticated: false,
    jwt: null,
  },
  getters: {
    authenticatedAxios(state) {
      // configure an object that can be used to make requests
      return Axios.create({
        headers: {
          Authorization: `Bearer<${state.jwt}>`,
        },
      });
    },
  },
  mutations: {
    setAuthenticated(state, header) {
      state.jwt = header;
      state.authenticated = true;
    },
    clearAuthentication(state) {
      state.authenticated = false;
      state.jwt = null;
    },
  },
  actions: {
    async authenticate(context, credentials) {
      let response = await Axios.post(loginUrl, credentials);
      if (response.data.success == true) {
        context.commit("setAuthenticated", response.data.token);
      }
    },
  },
};
