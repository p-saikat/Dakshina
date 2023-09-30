import { Router } from "express";
import { adminValidator } from "../../validator/index.js";
import { adminController } from "../../controllers/index.js";

const auth = Router();

auth.post("/signup", adminValidator.auth.signup, adminController.auth.signup);

export { auth };
