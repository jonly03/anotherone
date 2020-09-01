require("dotenv").config();
const express = require("express");
const axios = require("axios");
const server = express();

const PORT = process.env.PORT || 4000;

server.get("/movies", (req, res) => {
  axios
    .get(
      `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.OMDB_API_KEY}`
    )
    .then((results) => {
      res.send(results.data);
    });
});

server.listen(PORT);
