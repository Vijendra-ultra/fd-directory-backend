const { Pool } = require("pg");
const config = require("./config");
const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "app_user",
  password: config.dbPassword,
  database: "app_db",
  ssl: false,
});
module.exports = pool;
