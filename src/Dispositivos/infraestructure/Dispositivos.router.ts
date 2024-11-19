import { Router, Request, Response } from "express";
import { AllDispositivosController, dispositivoPost, deleteDispositivoController2 } from "./dependencies";

const dispositivolRouter = Router();

dispositivolRouter.get("/", (AllDispositivosController.run as unknown as (req: Request, res: Response) => Promise<void>).bind(AllDispositivosController));

dispositivolRouter.post("/", (dispositivoPost.run as unknown as (req: Request, res: Response) => Promise<void>).bind(dispositivoPost));

dispositivolRouter.delete("/:id_Dispositivo", (deleteDispositivoController2.run as unknown as (req: Request, res: Response) => Promise<void>).bind(deleteDispositivoController2));

export default dispositivolRouter;