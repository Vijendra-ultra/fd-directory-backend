const express = require("express");
const cors = require("cors");
const fdsRouteHandler = require("../src/routes/fd.routes");
const erroHandler = require("./middlewares/errorHandler");
const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "OPTIONS"],
  }),
);
app.use(express.json());
app.use("/api/v1/fd", fdsRouteHandler);

app.get((req, res) => {
  res.status(404).json({ message: "Unknown request" });
});
app.use(erroHandler);
module.exports = app;
