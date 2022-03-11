const express = require('express');
const { Pool } = require('pg');
require("dotenv").config();

const fs = require("fs");
const app = express();
const port = 3000;
const pool = new Pool({
  user: "ijrme",
  database: "people",
  password: "0246810a",
  port: 3000,
});

app.use(express.json())
app.use(express.static('public'));

console.log(process.env)

app.get("/people", (req, res) => {
  pool.query("SELECT * FROM users", (err, data) => {
    if (err) throw err;
    res.send(data.rows[0])
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
