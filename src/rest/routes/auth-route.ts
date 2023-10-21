import express, { Request, Response } from "express";
import { signIn } from "../services/auth-service.js";
const authRouter = express.Router();

authRouter.post("/signin", signIn);

export default authRouter;
