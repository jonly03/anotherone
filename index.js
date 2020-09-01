const express = require("express");
const server = express();

const PORT = process.env.PORT || 4000;

server.get("/heroku", (req, res) => {
  res.send("Hello Herokuuu");
});

server.listen(PORT);
