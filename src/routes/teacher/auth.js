import { Router } from "express";
import { teacherValidator } from "../../validator/index.js";
import { teacherController } from "../../controllers/index.js";
// import { verifyUserRole } from "../../middleware/index.js";

const auth = Router();

auth.post(
  "/signup",
  // verifyUserRole("teacher", "admin"),
  teacherValidator.auth.signup,
  teacherController.auth.signup,
);

auth.post("/login", teacherValidator.auth.login, teacherController.auth.login);

export { auth };
