import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import constant from "./configs/constant";
import Logger from "./configs/logger";
import db from "./configs/database";

const app = express();

db();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }));
app.use(bodyParser.json());

app.get("/healthz", (req, res) => {
  Logger.info("OK !!!");
  res.status(200).send("OK !!!");
});

app.listen(constant.PORT, () => {
  Logger.info(`Server is running @ PORT ${constant.PORT}`);
});
