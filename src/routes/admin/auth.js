import { Router } from "express";
import { adminValidator } from "../../validator/index.js";
import { adminController } from "../../controllers/index.js";

const auth = Router();

auth.post("/signup", adminValidator.auth.signup, adminController.auth.signup);
auth.post("/login", adminValidator.auth.login, adminController.auth.login);

export { auth };
