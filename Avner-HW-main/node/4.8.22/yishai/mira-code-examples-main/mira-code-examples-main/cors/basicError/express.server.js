const express = require("express");
const app = express();
const cors = require("cors");
const allowedOrigins = [
  "http://localhost:5500",
  "http://localhost:5454",
  "http://127.0.0.1:5454",
  "http://127.0.0.1:5500",
];
const corsOptions = {
  origin: allowedOrigins,
  methods: ["GET", "PUT", "DELETE"],
};
// app.use(cors(corsOptions));

app.options("/", cors(corsOptions), (req, res) => {
  res.set("Access-Control-Allow-Origin", "http://localhost:5454");
});
app.get("/", cors(corsOptions), (req, res) => {
  res.send("hi from server");
});
app.put("/", cors(corsOptions), (req, res) => {
  res.send("hi from server");
});
app.listen(5454, () => {
  console.log("express server listening");
});
