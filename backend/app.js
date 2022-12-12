const express = require("express");
const app = express();
let cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());
app.use(cors({ origin: true, credentials: true }));

module.exports = app;
