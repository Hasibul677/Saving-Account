const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());
app.use(cors({origin: true, credentials: true}));

const user = require("./routes/userRoute")
app.use("/api/v1", user)

module.exports = app;
