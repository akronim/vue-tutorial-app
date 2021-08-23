// npm install json-server@0.12.1

// To provide the server with the data it will use to handle HTTP requests
module.exports = function() {
  var data = {
    products: [
      { id: 1, name: "Kayak", category: "Watersports", price: 275 },
      { id: 2, name: "Lifejacket", category: "Watersports", price: 48.95 },
      { id: 3, name: "Soccer Ball", category: "Soccer", price: 19.5 },
      { id: 4, name: "Corner Flags", category: "Soccer", price: 34.95 },
      { id: 5, name: "Stadium", category: "Soccer", price: 79500 },
      { id: 6, name: "Thinking Cap", category: "Chess", price: 16 },
      { id: 7, name: "Unsteady Chair", category: "Chess", price: 29.95 },
      { id: 8, name: "Human Chess Board", category: "Chess", price: 75 },
      { id: 9, name: "Bling Bling King", category: "Chess", price: 1200 },
    ],
  };
  return data;
};

// To allow NPM to run the json-server package, add the statement:
//      "json": "json-server ./rest_data/L7_restData.js -p 3500"
// to the scripts section of the package.json file

// add the package that we will use to make HTTP requests
// Axios is a popular library for making HTTP requests in web applications
// npm install axios@0.18.0

// MAKING CROSS-ORIGIN REQUESTS
// By default, browsers enforce a security policy that only allows JavaScript code
// to make asynchronous HTTP requests within the same origin as the document that
// contains them. This policy is intended to reduce the risk of cross-site
// scripting (CSS) attacks, where the browser is tricked into executing malicious
// code.
// Two URLs are considered to be in the same origin if they have the same protocol,
// host, and port and have different origins if this is not the case.
// The URL that we use for the RESTful web service in this chapter has a different
// origin than the URL used by the main application because they use different
// TCP ports.
// The Cross-Origin Resource Sharing (CORS) protocol is used to send requests to
// different origins. With CORS, the browser includes headers in the asynchronous
// HTTP request that provide the server with the origin of the JavaScript code.
// The response from the server includes headers that tell the browser whether it
// is willing to accept the request.
// The json-server package that provides the RESTful web service supports CORS
// and will accept requests from any origin, while the Axios package that we use
// to make HTTP requests automatically applies CORS.
// When you select software for your own projects, you must either select
// a platform that will allow all requests to be handled through a single origin
// or configure CORS so that the server will accept the application’s requests
// for data.
