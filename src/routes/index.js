import { Router } from "express";
import gestionRouter from "./gestionRouter.js";

const routes = Router();

routes.use("/gestion",gestionRouter);

export default routes;