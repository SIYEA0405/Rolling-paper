import { Schema, model } from "mongoose";

//유저 스키마
const UserModel = Schema(
  {
    userName: { type: String, required: true },
    comment: { type: String, required: true },
    //password: String,
  },
  { versionKey: false }
);

export default function (collectionName) {
  return model("UserModel", UserModel, collectionName);
}
