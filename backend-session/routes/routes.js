import { Router } from "express";

export const routes = Router();

routes.get("/");
routes.get("/session", controllers.session);
routes.post("/login", controllers.login);
routes.post("/logout", controllers.logout);
