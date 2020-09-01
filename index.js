const express = require("express");
const server = express();

const PORT = process.env.PORT || 4000;

server.get("/heroku", (req, res) => {
  res.send("Hello Heroku");
});

server.listen(PORT);
