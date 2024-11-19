import { Router, Request, Response } from "express";
import { AllUsuariosController,CrearUsuarioControllerInstance,deleteUsuarioControllerInstance } from "./dependencies";

const UsuariosRouter = Router();

UsuariosRouter.get("/", (AllUsuariosController.run as unknown as (req: Request, res: Response) => Promise<void>).bind(AllUsuariosController));

UsuariosRouter.post("/", (CrearUsuarioControllerInstance.run as unknown as (req: Request, res: Response) => Promise<void>).bind(CrearUsuarioControllerInstance));

UsuariosRouter.delete("/:id_Dispositivo", (deleteUsuarioControllerInstance.run as unknown as (req: Request, res: Response) => Promise<void>).bind(deleteUsuarioControllerInstance));

export default UsuariosRouter;
