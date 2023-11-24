// importar modelo a usar 
// import { gestionModel } from '../models/index.js'

let controllerGestion = {

    getAllRegister : async(req,res) =>{
        try {
            const data = {};
            // aqui entra la consulta a la bd
            // let users = [];

            // users.push({
            //     uuid : "212s1d21a2d1a3s1d1a2sd1da2",
            //     name : "pedro",
            //     email : "tutacajon@gmail.com",
            //     rol : ["admin"],
            //     id : Date.now()
            // });
            
            if (users.length < 1 || users === null){
                return res.json({
                    error: false,
                    data : users,
                    msg: "No hay registros aun."
                }) 
            }
            // ya la consulta se hizo y hay datos
          

            data.users = users;

           return res.json({
                error: false,
                data 
           })

        } catch (error) {
            console.error(error);
            res.json({
                error: true,
                msg : error.message
            })
        }
    },
    getOneRegister : async (req,res)=>{

    },
    createRegister : async(req,res) => {
    },
    updateRegister : async(req,res) =>{
    },
    deleteRegister : async(req,res) =>{   
    }
}



export default controllerGestion;