import { Request, Response } from "express";
import { agregarDispositivo,getAllDispositivosService,deleteDispositivo } from "../../application/services/Dispositivos.services";
import { dispositivos } from "../../domain/entities/dispositivos.entitys";

export class getAllDispositivosController {
    constructor(private getAllDispositivos:getAllDispositivosService){}
    
    async run(req: Request,res:Response){
        try{
            const Response = await this.getAllDispositivos.run();
            return res.status(200).json(Response);
        }catch(error:any){
            return res.status(500).json(Response);
        }
    }
}

export class CrearDispositivo{
    constructor(private postDispositivo:agregarDispositivo){}

    async run(req: Request, res: Response):Promise<Response>{
        try{
            const nuevoDispositivo = req.body as unknown as dispositivos;


            if  (!nuevoDispositivo.id_Dispositivos|| !nuevoDispositivo.Nombre||!nuevoDispositivo.ID_Usuarios||!nuevoDispositivo.ubicacion||nuevoDispositivo.Ultima_conexion){
                return res.status(400).json({message: "Faltan Datos"});
     
            }
            await this.postDispositivo.run(nuevoDispositivo);
            return res.status(201).json({message:"creado"});
        }   catch (error: any){
                return res.status(500).json({message: `error agregando dispositivos: ${error.message}`});
            
            }
        
    }
}



export class deleteDispositivoController {
    constructor(private deleteDispositivo: deleteDispositivo) {}

    async run(req: Request, res: Response): Promise<Response> {
        try{
            const {id_Dispositivos} = req.params;
        

        if (!id_Dispositivos){
            return res.status(400).json({message:"faltan datos"});
        }
        await this.deleteDispositivo.run(parseInt(id_Dispositivos));
        return res.status(200).json({message: "dispositivo eliminado"});
    } catch (error:any) {
        return res.status(500).json({message:`Error deleting dispositivo: ${error.message}` });
    }
    
    }
}