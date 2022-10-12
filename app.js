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

app.use(express.static('client'));
app.set("view engine", "ejs");
app.engine('html', require('ejs').renderFile);
app.set("views", __dirname + "/src/views");


//메인페이지 기본 랜더링
app.get("/", (req, res) => {
  //res.send("우리 서버 영업합니다..");
  res.render("index.html");
});


app.use("/", router);
