const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const { db } = require("./db_connection");
const app = express();
app.use(express.urlencoded(true));
const diaryRouter = require("./Routes/Diary");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(bodyParser.json());
app.use(express.json());
app.use("/api/diary", diaryRouter);
app.listen(9000, () => {
  console.log("Server is running on port 3000");
});
