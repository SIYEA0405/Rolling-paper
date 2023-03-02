require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const router = require("./src/routers/router");
const app = express();

const PORT = process.env.PORT || 8080;

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI);

app.listen(PORT, () => {
  console.log(`localhost:${PORT} 이 열려있습니다`);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("client"));
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

app.set("views", __dirname + "/src/views");

app.get("/", (req, res) => res.render("index.html"));

const queryList = ["theory", "class1", "class2"]
app.get("/:id", async (req, res) => {
  if (queryList.includes(req.params.id)) res.render("coach.html")
  else {
    res.send(`<h1>잘못된 접근입니다.</h1><br><a href="/">메인페이지 바로가기</a>`)
    return;
  }
});

app.use("/", router);
