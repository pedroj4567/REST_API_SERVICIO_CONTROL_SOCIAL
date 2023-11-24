import { Router } from "express";
import { controllerGestion, } from '../controllers/index.js'

//instance router
const gestionRouter = Router();

//destructuring of controller
const { 
        getAllRegister,
        createRegister,
        getOneRegister,
        updateRegister,
        deleteRegister } = controllerGestion;

//get all registers 
gestionRouter.get("/",  getAllRegister);

//get one register 
gestionRouter.get("/:uuid", getOneRegister);

//create register 
gestionRouter.post('/', createRegister);

//update register 
gestionRouter.post('/:uuid', updateRegister);

//delete register 
gestionRouter.delete("/:uuid", deleteRegister);


export default gestionRouter;

