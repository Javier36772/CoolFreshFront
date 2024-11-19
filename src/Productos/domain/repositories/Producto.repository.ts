import { Productos } from "../entities/Productos.entitys";

export interface ProductosProductos {
    getProductos():Promise <Productos[]>
    postProductos(nuevoProducto: Productos): Promise<void>
delteProductos(id_Productos: number): Promise<void>
}