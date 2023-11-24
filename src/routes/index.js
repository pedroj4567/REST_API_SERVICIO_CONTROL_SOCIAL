import { Router } from "express";
import gestionRouter from "./gestionRouter.js";
import authRouter from "./authRouter.js";
const routes = Router();

routes.use("/gestion",gestionRouter);
routes.use("/auth", authRouter)


export default routes;