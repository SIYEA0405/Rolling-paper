import express from "express";
import bodyParser from "body-parser";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

import router from "./src/routers/router.js";
import ejs from "ejs";
import * as dotenv from "dotenv";

import { connect } from "mongoose";
import { env } from "process";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const { json, urlencoded } = bodyParser;
const app = express();

const PORT = env.PORT || 8070;

connect(process.env.MONGO_URI);

app.listen(PORT, () => {
  console.log(`localhost:${PORT} 이 열려있습니다`);
});

app.use(urlencoded({ extended: true }));
app.use(json());

app.use(express.static("client"));
app.set("view engine", "ejs");
app.engine("html", ejs.renderFile);

app.set("views", path.join(__dirname, "src/views"));

app.get("/", (req, res) => res.render("index.html"));

const queryList = ["theory", "class1", "class2"];
app.get("/:id", async (req, res) => {
  if (queryList.includes(req.params.id)) res.render("coach.html");
  else {
    res.send(
      `<h1>잘못된 접근입니다.</h1><br><a href="/">메인페이지 바로가기</a>`
    );
    return;
  }
});

app.use("/", router);
