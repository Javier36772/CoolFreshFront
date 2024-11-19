import { Request, Response } from "express";
import { getAllLecturasService,agregarLectura,deleteLectura } from "../../application/services/lecturas.services";
import { Lecturas } from "../../domain/entities/lecturas.entitys";



export class getAllLecturasController {
    constructor(private getAllLecturas:getAllLecturasService){}
    
    async run(req: Request,res:Response){
        try{
            const Response = await this.getAllLecturas.run();
            return res.status(200).json(Response);
        }catch(error:any){
            return res.status(500).json(Response);
        }
    }
}

export class CrearLecturas{
    constructor(private PostLecturas:agregarLectura){}

    async run(req: Request, res: Response):Promise<Response>{
        try{
            const nuevaLectura = req.body as unknown as Lecturas;


            if  (!nuevaLectura.id_Alertas|| !nuevaLectura.id_Dispositivos||!nuevaLectura.Temperatura||!nuevaLectura.Humedad||nuevaLectura.co2||nuevaLectura.calidad_aire){
                return res.status(400).json({message: "Faltan Datos"});
     
            }
            await this.PostLecturas.run(nuevaLectura);
            return res.status(201).json({message:"creado"});
        }   catch (error: any){
                return res.status(500).json({message: `error agregando dispositivos: ${error.message}`});
            
            }
        
    }
}



export class deleteLecturaController {
    constructor(private deleteLectura: deleteLectura) {}

    async run(req: Request, res: Response): Promise<Response> {
        try{
            const {id_Alertas} = req.params;
        

        if (!id_Alertas){
            return res.status(400).json({message:"faltan datos"});
        }
        await this.deleteLectura.run(parseInt(id_Alertas));
        return res.status(200).json({message: "dispositivo eliminado"});
    } catch (error:any) {
        return res.status(500).json({message:`Error deleting dispositivo: ${error.message}` });
    }
    
    }
}