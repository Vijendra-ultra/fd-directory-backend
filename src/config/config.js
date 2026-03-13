const dotenv = require("dotenv");
dotenv.config();

const config = {
  port: process.env.PORT || 3000,
  dbPassword: process.env.DBPASSWORD,
};
module.exports = config;
