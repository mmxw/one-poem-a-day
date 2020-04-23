const express = require("express");
const pool = require('./db');
const router = express.Router();

router.get("/api/hello", (req, res) => res.json("hello world"));

module.exports = router;

