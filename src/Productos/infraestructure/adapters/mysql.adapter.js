"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySqlAdapter = void 0;
const mySqlconn_1 = require("../../../share/infraestructure/mySqlconn"); // Conexión a MySQL
class MySqlAdapter {
    // Obtener todos los productos
    getProductos() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = "SELECT * FROM productos"; // Consulta para obtener productos
                const [res] = yield mySqlconn_1.db.execute(query);
                return res; // Retorna los productos como un array de Productos
            }
            catch (err) {
                throw new Error(`Error fetching productos: ${err.message}`); // Error si no se obtienen productos
            }
        });
    }
    // Agregar un nuevo producto
    postProductos(nuevoProducto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_Producto, Nombre, Fk_Dispositivos2, temperatura_optima_min, temperatura_optima_max, humedad_optima_min, humedad_optima_max, calidad_del_aire } = nuevoProducto; // Desestructuración del nuevo producto
                const query = `
            INSERT INTO productos (id_Producto, Nombre, Fk_Dispositivos2, temperatura_optima_min, temperatura_optima_max, humedad_optima_min, humedad_optima_max, calidad_del_aire) 
            VALUES (?,?,?,?,?,?,?,?)`; // Consulta de inserción ajustada a la estructura de la tabla productos
                yield mySqlconn_1.db.execute(query, [
                    id_Producto,
                    Nombre,
                    Fk_Dispositivos2,
                    temperatura_optima_min,
                    temperatura_optima_max,
                    humedad_optima_min,
                    humedad_optima_max,
                    calidad_del_aire
                ]);
            }
            catch (err) {
                throw new Error(`Error inserting producto: ${err.message}`); // Error al insertar producto
            }
        });
    }
    // Eliminar un producto por ID
    delteProductos(id_Producto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = "DELETE FROM productos WHERE id_Producto = ?"; // Consulta de eliminación de producto
                yield mySqlconn_1.db.execute(query, [id_Producto]);
            }
            catch (err) {
                throw new Error(`Error deleting producto: ${err.message}`); // Error al eliminar producto
            }
        });
    }
}
exports.MySqlAdapter = MySqlAdapter;
