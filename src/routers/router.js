const express = require("express");
const route = express.Router();

const mongoose = require("mongoose");
const {create, find} = require("./../controllers/controller");

// Connecting to mongoose
const db = mongoose.connection;
db.on("error", console.error);
db.once("open", () => {
  // 몽고디비 서버에 연결
  console.log("Connected to mongoDB server");
});

route.get("/:id", find);
route.post("/:id", create);
//route.put("/:id", create);
//route.delete("/:id", create);

module.exports = route;
