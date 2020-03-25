//Install express server
const express = require("express");
const path = require("path");

const app = express();

// Serve only the static files form the angularapp directory
app.use(express.static(__dirname + "/everest-services"));

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname + "everest-services/index.html"));
});
console.log("Logging directory path");
console.log("Logging directory path" + __dirname);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
