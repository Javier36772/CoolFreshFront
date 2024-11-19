import { Productos } from "../../domain/entities/Productos.entitys"; // Importar entidad Productos
import { ProductosProductos } from "../../domain/repositories/Producto.repository"; // Importar repositorio ProductosProductos

export class getAllProductosService {
    constructor(private _productosRepository: ProductosProductos) {}

    async run() {
        try {
            const res = await this._productosRepository.getProductos(); // Método para obtener todos los productos
            return res;
        } catch (error: any) {
            throw new Error(error.message || "Error fetching products");
        }
    }
}

export class agregarProductoService {
    constructor(private readonly _productosRepository: ProductosProductos) {}

    async run(nuevoProductos: Productos): Promise<void> {
        try {
            await this._productosRepository.postProductos(nuevoProductos); // Método para agregar un producto
        } catch (error: any) {
            throw new Error(`Error adding product: ${error.message}`);
        }
    }
}

export class deleteProductoService {
    constructor(private readonly _productosRepository: ProductosProductos) {}

    async run(id_Producto: number): Promise<void> {
        try {
            await this._productosRepository.delteProductos(id_Producto); // Método para eliminar un producto
        } catch (error: any) {
            throw new Error(`Error deleting product: ${error.message}`);
        }
    }
}
