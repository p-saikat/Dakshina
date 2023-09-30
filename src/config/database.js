import mongoose from "mongoose";
import { envs } from "./index.js";

export const database = async () => {
  mongoose.connect(envs.devDB.uri, {
    useNewUrlParser: true,
    maxPoolSize: 5,
    minPoolSize: 0,
  });
  const conn = mongoose.connection;

  conn.on("connected", function () {
    console.log("database is connected successfully.");
  });

  conn.on("disconnected", function () {
    console.log("database is disconnected successfully.");
  });

  conn.on("error", function () {
    console.error.bind(console, "connection error:");
  });
};
