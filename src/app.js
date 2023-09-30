import express from "express";
import i18n from "i18n";
import { errors } from "celebrate";
import cors from "cors";
import bearerToken from "express-bearer-token";

import { envs, StatusError, StatusSuccess, handleError } from "./config/index.js";

const app = express();

/**
 * Handling cors
 */
app.use(cors());

/**
 * All express middlewares
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bearerToken());
app.use(StatusSuccess);

/**
 * DB connection
 */

/**
 * Endpoint to check server status
 */
app.get("/", (req, res) => res.send({ status: "running" }));

/**
 * 404 Route
 */
app.get("*", (req, res) => res.status(400).send({ message: "Not found!" }));
app.post("*", (req, res) => res.status(400).send({ message: "Not found!" }));

app.use(errors());
app.use(handleError);

/**
 * Create server
 */
app.listen(envs.port, () => {
  console.log("Server is running on port " + envs.port);
});
