// file dedicated to dealing with HTTP

import Axios from "axios";
const baseUrl = "http://localhost:3500/products/";
export class RestDataSource {
  constructor(bus) {
    this.eventBus = bus;
  }

  async getProducts() {
    return (await this.sendRequest("GET", baseUrl)).data;
  }
  async saveProduct(product) {
    await this.sendRequest("POST", baseUrl, product);
  }
  async updateProduct(product) {
    await this.sendRequest("PUT", `${baseUrl}${product.id}`, product);
  }
  async deleteProduct(product) {
    await this.sendRequest("DELETE", `${baseUrl}${product.id}`, product);
  }

  // Vue.js can’t detect exceptions that arise during asynchronous
  // HTTP operations
  // - provide error notifications by sending custom events through
  // the event bus
  async sendRequest(httpMethod, url, product) {
    try {
      return await Axios.request({
        method: httpMethod,
        url: url,
        data: product,
      });
    } catch (err) {
      if (err.response) {
        this.eventBus.$emit(
          "httpError",
          `${err.response.statusText} - ${err.response.status}`
        );
      } else {
        this.eventBus.$emit("httpError", "HTTP Error");
      }
      throw err;
    }
  }
}

// in main.js:
// we have created an instance of the RestDataSource class and configured
// it as a service so that it will be available throughout the application

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
