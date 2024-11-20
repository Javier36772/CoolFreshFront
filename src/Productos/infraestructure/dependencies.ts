import { getAllProductosController, deleteProductoController, agregarProductoController } from "./controllers/getAllProductos.controller";
import { MySqlAdapter } from "./adapters/mysql.adapter";
import { getAllProductosService, agregarProductoService, deleteProductoService } from "../application/services/Productos.services";

const mySqlAdapter = new MySqlAdapter();

// Creamos el servicio y controlador para obtener todos los productos
const getAllProductosServiceInstance = new getAllProductosService(mySqlAdapter);
export const AllProductosController = new getAllProductosController(getAllProductosServiceInstance);

// Creamos el servicio para agregar un producto
const agregarProductoServiceInstance = new agregarProductoService(mySqlAdapter); // Instanciamos el servicio

// Creamos el controlador para agregar un producto, inyectando el servicio
export const CrearProductoControllerInstance = new agregarProductoController(agregarProductoServiceInstance); // Aquí pasamos el servicio correctamente

// Creamos el servicio y controlador para eliminar un producto
const deleteProductoServiceInstance = new deleteProductoService(mySqlAdapter);
export const deleteProductoControllerInstance = new deleteProductoController(deleteProductoServiceInstance);
