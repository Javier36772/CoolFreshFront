import { Request, Response } from "express";
import { getAllNotifiacionesService, agregarNotifiacion, deleteNotifiacion } from "../../application/services/Notificaciones.services"; // Servicios correctos
import { Notifiaciones } from "../../domain/entities/Notificaciones.entitys"; // Entidad correcta

export class getAllNotifiacionesController {
    constructor(private getAllNotifiaciones: getAllNotifiacionesService) {}

    async run(req: Request, res: Response) {
        try {
            const response = await this.getAllNotifiaciones.run();
            return res.status(200).json(response);
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }
}

export class CrearNotifiacionController {
    constructor(private postNotifiacion: agregarNotifiacion) {}

    async run(req: Request, res: Response): Promise<Response> {
        try {
            const nuevaNotifiacion = req.body as unknown as Notifiaciones;

            if (
                !nuevaNotifiacion.id_Notificaciones ||
                !nuevaNotifiacion.Fk_Dispositivos ||
                !nuevaNotifiacion.Fk_Productos ||
                !nuevaNotifiacion.tipo ||
                !nuevaNotifiacion.mensaje ||
                !nuevaNotifiacion.fecha_envio||
                !nuevaNotifiacion.estado

            ) {
                return res.status(400).json({ message: "Faltan Datos" });
            }

            await this.postNotifiacion.run(nuevaNotifiacion);
            return res.status(201).json({ message: "Notificación creada" });
        } catch (error: any) {
            return res.status(500).json({ message: `Error agregando notificación: ${error.message}` });
        }
    }
}

export class deleteNotifiacionController {
    constructor(private deleteNotifiacion: deleteNotifiacion) {}

    async run(req: Request, res: Response): Promise<Response> {
        try {
            const { id_Notificaciones } = req.params;

            if (!id_Notificaciones) {
                return res.status(400).json({ message: "Faltan datos" });
            }

            await this.deleteNotifiacion.run(parseInt(id_Notificaciones));
            return res.status(200).json({ message: "Notificación eliminada" });
        } catch (error: any) {
            return res.status(500).json({ message: `Error eliminando notificación: ${error.message}` });
        }
    }
}
