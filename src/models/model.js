const mongoose = require("mongoose");

//유저 스키마
var UserModel = mongoose.Schema({
  userName: String,
  comment: String,
  password: String,
});

//class1 은 correction name 이니까 나중에 가지고오는 path로 바꿀 것
//module.exports = mongoose.model("userModel", UserModel, "class1");
module.exports = function (collectionName) {
  //const collectionname = collectionName;
  return mongoose.model("UserModel", UserModel, collectionName);
};
