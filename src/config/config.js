const dotenv = require("dotenv");
dotenv.config();

export const config = {
  port: process.env.PORT,
  dbPassword: process.env.DBPASSWORD,
};
