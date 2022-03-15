const { pool } = require('pg');
const { Pool } = require('pg/lib');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // ssl: {
  //   rejectUnauthorized: false
  // }
})

module.exports = pool; 
