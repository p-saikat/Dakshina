import { Router } from "express";
import { auth } from "./auth.js";

const teacherRouter = Router();

teacherRouter.use(auth);

export { teacherRouter };
