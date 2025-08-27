import express from "express";
import { handleUserSignup } from "../controllers/user.js";

const userRouter = express.Router();

userRouter.post("/user/signup", handleUserSignup);

export { userRouter };
