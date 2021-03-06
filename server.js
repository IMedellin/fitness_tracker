require("dotenv").config();
const express = require('express');
const { Pool } = require('pg');
const path = require('path')
const app = express();
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === "production" ? {
    rejectUnauthorized: false
  } : false
})
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
// app.use('/css', express.static(__dirname + './public/styles'))

app.get("/people", (req, res) => {
  pool.query("SELECT * FROM users", (err, results) => {
    if (err) throw err;
    res.send(results.rows)
  })
})
app.get("/people/:index", (req, res) => {
  const index = req.params.index;
  pool.query("SELECT * FROM users WHERE name = $1", [index], (err, results) => {
    if (err) throw err
    res.send(results.rows[0])
  })
})

app.post("/people", (req, res) => {
  const { id } = req.params;
  const { name, age, weight, height } = req.body;
  pool.query("INSERT INTO users (name, age, weight, height) VALUES ($1, $2, $3, $4) RETURNING *", [name, age, weight, height]).then((result) => res.send(result.rows[0]));
})



app.listen(process.env.PORT, () => {
  console.log(`listening on port: 3000`)
})
