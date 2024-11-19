"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProductoControllerInstance = exports.CrearProductoControllerInstance = exports.AllProductosController = void 0;
const getAllProductos_controller_1 = require("./controllers/getAllProductos.controller");
const mysql_adapter_1 = require("./adapters/mysql.adapter");
const Productos_services_1 = require("../application/services/Productos.services");
const mySqlAdapter = new mysql_adapter_1.MySqlAdapter();
// Creamos el servicio y controlador para obtener todos los productos
const getAllProductosServiceInstance = new Productos_services_1.getAllProductosService(mySqlAdapter);
exports.AllProductosController = new getAllProductos_controller_1.getAllProductosController(getAllProductosServiceInstance);
// Creamos el servicio y controlador para agregar un producto
const agregarProductoServiceInstance = new Productos_services_1.agregarProductoService(mySqlAdapter);
exports.CrearProductoControllerInstance = new getAllProductos_controller_1.CrearProductoController(agregarProductoServiceInstance);
// Creamos el servicio y controlador para eliminar un producto
const deleteProductoServiceInstance = new Productos_services_1.deleteProductoService(mySqlAdapter);
exports.deleteProductoControllerInstance = new getAllProductos_controller_1.deleteProductoController(deleteProductoServiceInstance);
