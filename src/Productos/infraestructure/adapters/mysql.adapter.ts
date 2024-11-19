import { Productos } from "../../domain/entities/Productos.entitys"; 
import { db } from "../../../share/infraestructure/mySqlconn"; 
import { ProductosProductos } from "../../domain/repositories/Producto.repository"; 

export class MySqlAdapter implements ProductosProductos {
    // Obtener todos los productos
    async getProductos(): Promise<Productos[]> {
        try {
            const query = "SELECT * FROM productos"; 
            const [res] = await db.execute(query);
            return res as Productos[]; 
        } catch (err: any) {
            throw new Error(`Error fetching productos: ${err.message}`);
        }
    }

    // Agregar un nuevo producto
    async postProductos(nuevoProducto: Productos): Promise<void> {
        try {
            const { Nombre, Fk_Dispositivos2, temperatura_optima_min, temperatura_optima_max, humedad_optima_min, humedad_optima_max, calidad_del_aire } = nuevoProducto;

            const query = `
                INSERT INTO productos (Nombre, Fk_Dispositivos2, temperatura_optima_min, temperatura_optima_max, humedad_optima_min, humedad_optima_max, calidad_del_aire) 
                VALUES (?,?,?,?,?,?,?)`;

            await db.execute(query, [
                Nombre,
                Fk_Dispositivos2,
                temperatura_optima_min,
                temperatura_optima_max,
                humedad_optima_min,
                humedad_optima_max,
                calidad_del_aire
            ]);
        } catch (err: any) {
            throw new Error(`Error inserting producto: ${err.message}`);
        }
    }

    // Eliminar un producto por ID
    async delteProductos(id_Producto: number): Promise<void> {
        try {
            const query = "DELETE FROM productos WHERE id_Producto = ?";
            await db.execute(query, [id_Producto]);
        } catch (err: any) {
            throw new Error(`Error deleting producto: ${err.message}`);
        }
    }
}
