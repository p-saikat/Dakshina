import { Router } from "express";
import { auth } from "./auth.js";

const adminRouter = Router();

adminRouter.use(auth);

export { adminRouter };
