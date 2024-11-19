import { Router, Request, Response } from "express";
import { AllNotifiacionesController,CrearNotifiacionControllerInstance,deleteNotifiacionControllerInstance } from "./dependencies";


const NotificacionesRouter = Router();

NotificacionesRouter.get("/", (AllNotifiacionesController.run as unknown as (req: Request, res: Response) => Promise<void>).bind(AllNotifiacionesController));

NotificacionesRouter.post("/", (CrearNotifiacionControllerInstance.run as unknown as (req: Request, res: Response) => Promise<void>).bind(CrearNotifiacionControllerInstance));

NotificacionesRouter.delete("/:id_Dispositivo", (deleteNotifiacionControllerInstance.run as unknown as (req: Request, res: Response) => Promise<void>).bind(deleteNotifiacionControllerInstance));

export default NotificacionesRouter;