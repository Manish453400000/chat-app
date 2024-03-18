import { Router } from "express";
import { logIn, logOut, signUp } from "../controllers/auth.controllers.js";

const authRoutes = Router();

authRoutes.post("/signup", signUp);
authRoutes.post("/login", logIn);
authRoutes.post("/logout", logOut);

export default authRoutes;
