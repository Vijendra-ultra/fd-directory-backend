const express = require("express");
const cors = require("cors");
const fdsRouteHandler = require("../src/routes/fd.routes");
const erroHandler = require("./middlewares/errorHandler");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/v1/fd", fdsRouteHandler);

app.get((req, res) => {
  res.status(404).json({ message: "Unknow page" });
});
app.use(erroHandler);
module.exports = app;
