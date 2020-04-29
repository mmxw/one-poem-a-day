const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "",
  post: 5432,
});

const getAllPoems = (req, res) => {
  pool.query("SELECT * FROM poems", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};
const getPoemByTitle = (req, res) => {
  const title = req.params.title;
  pool.query(
    "SELECT * FROM poems WHERE title=$1",
    [title],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    }
  );
};
const getPoemByAuthor = (req, res) => {
  const author = req.params.author;
  pool.query(
    "SELECT * FROM poems WHERE author=$1",
    [author],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    }
  );
};
const getPoemByPartialText = (req, res) => {
  const text = req.params.text;
  pool.query(
    `SELECT * FROM poems WHERE poem LIKE '%${text}%'`,
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    }
  );
};

module.exports = {
  getAllPoems,
  getPoemByTitle,
  getPoemByAuthor,
  getPoemByPartialText
};
