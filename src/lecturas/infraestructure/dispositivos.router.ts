import { Router, Request, Response } from "express";
import { AllLecturasController,CrearLecturaController,deleteLecturaControllerInstance } from "./dependencies";

const LecturaRouter = Router();

LecturaRouter.get("/", (AllLecturasController.run as unknown as (req: Request, res: Response) => Promise<void>).bind(AllLecturasController));

LecturaRouter.post("/", (CrearLecturaController.run as unknown as (req: Request, res: Response) => Promise<void>).bind(CrearLecturaController));

LecturaRouter.delete("/:id_Dispositivo", (deleteLecturaControllerInstance.run as unknown as (req: Request, res: Response) => Promise<void>).bind(deleteLecturaControllerInstance));

export default LecturaRouter;