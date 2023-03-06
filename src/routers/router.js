import { Router } from "express";

import mongoose from "mongoose";
import { create, find } from "../controllers/controller.js";

const route = Router();

const { connection } = mongoose;
const db = connection;
db.on("error", console.error);
db.once("open", () => {

  console.log("Connected to MongoDB server");
});

//각 코치 id별로 모든 리뷰 찾기
route.get("/:id/posts", find);

//각 코치 id별로 모든 리뷰 생성한 데이터 보내주기
route.post("/:id/posts", create);

export default route;
