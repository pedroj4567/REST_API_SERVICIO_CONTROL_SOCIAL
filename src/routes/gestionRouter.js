import { Router } from "express";
import { controllerGestion, } from '../controllers/index.js'

//instance router
const gestionRouter = Router();

//destructuring of controller
const { getAllRegister,createRegister } = controllerGestion;

//get all registers 
gestionRouter.get("/",  getAllRegister)

//create register 

gestionRouter.post('/', createRegister)



export default gestionRouter;

