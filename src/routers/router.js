const express = require("express");
const route = express.Router();

const mongoose = require("mongoose");
const { create, find } = require("./../controllers/controller");

// Connecting to mongoose
const db = mongoose.connection;
db.on("error", console.error);
db.once("open", () => {
  // 몽고디비 서버에 연결완료시 뜨는 문구
  console.log("Connected to mongoDB server");
});

//각 코치 id별로 모든 리뷰 찾기
route.get("/:id/posts", find);
//각 코치 id별로 모든 리뷰 생성한 데이터 보내주기
route.post("/:id/posts", create);

module.exports = route;
