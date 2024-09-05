import { Router } from "express";
import { controllers } from "../controllers/controllers.js";
export const routes = Router();

routes.post("/register", controllers.register);
routes.get("/session", controllers.session);
routes.post("/login", controllers.login);
routes.post("/logout", controllers.logout);
