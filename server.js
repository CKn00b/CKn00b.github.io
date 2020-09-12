const express = require("express");
const path = require("path");

const mySite = express();
const port = 3000;

mySite.use(express.static(path.join(__dirname, "./index.html")));

mySite.get("/", (request, response) => {
  response.send(path.join(__dirname, "./index.html"));
});

mySite.listen(port, () => {
  console.log(`This server is listening on port ${port}...`);
});
