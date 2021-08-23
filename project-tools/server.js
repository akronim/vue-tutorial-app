const express = require("express");
const history = require("connect-history-api-fallback");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(history());
app.use("/", express.static("./dist"));

app.listen(8080, function() {
  console.log("HTTP Server running on port 8080");
});

// Creating the Production Build
// npm run build --modern
// The --modern argument is an optional feature that creates two version of the application,
// one of which is solely for modern browsers that support the latest JavaScript features
// and one for older browsers that need extra code and libraries to handle those features.

// Testing the Deployment Build
// npm install --save-dev express@4.16.3
// npm install --save-dev connect-history-api-fallback@1.5.0

// run build version (dist folder)
// node server.js
