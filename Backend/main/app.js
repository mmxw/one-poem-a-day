const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 5001;
const db = require('./db')

// view engine setup

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ info: "node.js, express, and postgres api" });
});

app.get('/poems', db.getAllPoems);
app.get('/authors/:author', db.getPoemByAuthor);
app.get('/search/:text', db.getPoemByPartialText);
app.get('/poems/:title', db.getPoemByTitle);


app.listen(port, () => console.log(`app running on port ${port}`));

module.exports = app;

