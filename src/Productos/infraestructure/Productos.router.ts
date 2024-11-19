import { Router, Request, Response } from "express";
import { AllProductosController,CrearProductoControllerInstance,deleteProductoControllerInstance } from "./dependencies";

const ProductosRouter = Router();

ProductosRouter.get("/", (AllProductosController.run as unknown as (req: Request, res: Response) => Promise<void>).bind(AllProductosController));

ProductosRouter.post("/", (CrearProductoControllerInstance.run as unknown as (req: Request, res: Response) => Promise<void>).bind(CrearProductoControllerInstance));

ProductosRouter.delete("/:id_Dispositivo", (deleteProductoControllerInstance.run as unknown as (req: Request, res: Response) => Promise<void>).bind(deleteProductoControllerInstance));

export default ProductosRouter;
