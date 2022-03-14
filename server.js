const express = require('express');
const pg = require('pg');
const { Pool } = require('pg');
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(express.static('FITNESS_TRACKER'));

app.get("/people", (req, res) => {
  pool.query("SELECT * FROM users", (err, results) => {
    if (err) throw err;
    res.send(results.rows)
  })
})
app.get("/people/:index", (req, res) => {
  const id = req.params.index;
  pool.query("SELECT * FROM users WHERE id = $1", [index], (err, results) => {
    if (err) throw err
    res.send(results.rows[id])
  })
})

app.post("/people", (req, res) => {
  const { id } = req.params;
  const { name, age } = req.body;
  pool.query("INSERT INTO users (name, age, weight, height) VALUES ($1, $2, $3, $4) RETURNING *;", [name, age, weight, height]).then((result) => res.send(result.row[0]));
})

app.listen(process.env.PORT, () => {
  console.log(`listening on port: 3000`)
})
