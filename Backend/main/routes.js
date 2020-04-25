const express = require("express");
const pool = require("./db");
const router = express.Router();

router.get("/api/get/allpoems", (req, res, next) => {
  pool.query(`SELECT * FROM poems`, (q_err, q_res) => {
    res.json(q_res.rows);
  });
});

router.get("/api/get/{author_id}", (req, res, next) => {
  const id = req.params.id
  pool.query(`SELECT * FROM poems where author`, (q_err, q_res) => {
    res.json(q_res.rows);
  });
});

router.post("/api/post/addpoems", (req, res, next) => {
  const values = [req.body.author, req.body.title, req.body.poem, req.body.uid];
  pool.query(
    `INSERT INTO poems(author, title, poem, poem_id, data_created) 
  VALUES($1, $2, $3, $4, NOW())`,
    values,
    (q_err, q_res) => {
      if (q_err) return next(q_err);
      res.json(q_res.rows);
    }
  );
});

router.put("/api/put/editpoem", (req, res, next) => {
  const values = [req.body.author, req.body.title, req.body.poem, req.body.uid];
  pool.query(
    `UPDATE poems SET author=$1, title=$2, poem=$3 WHERE cid=$4`,
    values,
    (q_err, q_res) => {
      res.json(q_res.rows);
      console.log(q_err);
    }
  );
});

router.delete("/api/delete/poem", (req, res, next) => {
  const poem_id = req.body.poem_id;
  pool.query(`DELETE FROM poems WHERE pid=$1`, [poem_id], (q_err, q_res) => {
    res.json(q_res.rows);
    console.log(q_err);
  });
});

module.exports = router;
