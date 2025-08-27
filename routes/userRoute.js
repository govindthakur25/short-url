import express from "express";
import { handleUserSignup, handleUserSignin } from "../controllers/user.js";

const userRouter = express.Router();

userRouter.post("/user/signup", handleUserSignup);
userRouter.post("/user/signin", handleUserSignin);

export { userRouter };
