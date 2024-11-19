import { Request, Response } from "express";
import { getAllProductosService, agregarProductoService, deleteProductoService } from "../../application/services/Productos.services";
import { Productos } from "../../domain/entities/Productos.entitys";

export class getAllProductosController {
    constructor(private getAllProductos: getAllProductosService) {}

    async run(req: Request, res: Response) {
        try {
            const response = await this.getAllProductos.run();
            return res.status(200).json(response);
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }
}

export class agregarProductoController {
    constructor(private agregarProducto: agregarProductoService) {}

    async run(req: Request, res: Response): Promise<Response> {
        try {
            const nuevoProducto = req.body as Productos;

            if (
                !nuevoProducto.id_Productos ||
                !nuevoProducto.Nombre ||
                !nuevoProducto.Fk_Dispositivos2 ||
                !nuevoProducto.temperatura_optima_min ||
                !nuevoProducto.temperatura_optima_max ||
                !nuevoProducto.humedad_optima_min ||
                !nuevoProducto.humedad_optima_max ||
                !nuevoProducto.calidad_del_aire
            ) {
                return res.status(400).json({ message: "Faltan datos en la solicitud" });
            }

            // Llamamos al servicio para agregar el producto
            await this.agregarProducto.run(nuevoProducto);

            return res.status(201).json({ message: "Producto agregado correctamente" });
        } catch (error) {
            console.error("Error al agregar el producto:", error);
            return res.status(500).json({ message: "Error al agregar el producto", error });
        }
    }
}

export class deleteProductoController {
    constructor(private deleteProducto: deleteProductoService) {}

    async run(req: Request, res: Response): Promise<Response> {
        try {
            const { id_Producto } = req.params;

            if (!id_Producto) {
                return res.status(400).json({ message: "Faltan datos" });
            }

            await this.deleteProducto.run(parseInt(id_Producto));
            return res.status(200).json({ message: "Producto eliminado" });
        } catch (error: any) {
            return res.status(500).json({ message: `Error eliminando producto: ${error.message}` });
        }
    }
}
