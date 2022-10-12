const mongoose = require("mongoose");

//유저 스키마
var UserModel = mongoose.Schema({
  userName: { type: String, required: true },
  comment: { type: String, required: true },
  //password: String,
}, {versionKey: false});

module.exports = function (collectionName) {
  return mongoose.model("UserModel", UserModel, collectionName);
};
