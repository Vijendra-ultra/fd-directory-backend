const Pool = require("pg");
const config = require("./config");
export const pool = new pool({
  host: "localhost",
  port: 5432,
  user: "app_user",
  password: config.dbPassword,
  database: "app_db",
  ssl: false,
});
