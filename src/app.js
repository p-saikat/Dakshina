import express from "express";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import i18n from "i18n";
import { errors } from "celebrate";
import cors from "cors";
import bearerToken from "express-bearer-token";

import { envs, StatusSuccess, handleError, dbConnect } from "./config/index.js";
import { v1AdminRouter } from "./routes/index.js";
import { verifyApiKey } from "./middleware/index.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Initialization of internationalization
 * default language is english
 */
i18n.configure({
  locales: ["en"],
  directory: resolve(__dirname, "./assets/locales"),
});
app.use(i18n.init);

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
dbConnect();

/**
 * Exposing admin v1 endpoints
 */
app.use("/api/v1/admin", verifyApiKey, v1AdminRouter);

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
