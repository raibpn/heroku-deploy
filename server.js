//Install express server
const express = require("express");
const path = require("path");

const app = express();

// Serve only the static files form the angularapp directory
app.use(express.static("./dist/heroku-deploy"));

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "./dist/heroku-deploy/index.html"));
});
console.log("Logging directory path");
console.log("Logging directory path" + __dirname);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
