import mongoose from "mongoose";
import Logger from "./logger";

const uri = `mongodb://mongo:27017/test`;

const setOptions = {
  user: "root",
  pass: "example",
  authSource: "admin",
  autoIndex: true,
  useNewUrlParser: true,
};

const startMongodb = async () => {
  try {
    await mongoose.connect(uri, setOptions);
    Logger.info("Connect database...");
  } catch (error) {
    Logger.error(error.message);
    process.exit(1);
  }
};

export default startMongodb;
