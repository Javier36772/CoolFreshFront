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
    // Obtener todos los usuarios
    getUsuarios() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = "SELECT * FROM usuarios"; // Consulta para obtener usuarios
                const [res] = yield mySqlconn_1.db.execute(query);
                return res; // Retorna los usuarios como un array de Usuarios
            }
            catch (err) {
                throw new Error(`Error fetching usuarios: ${err.message}`); // Error si no se obtienen usuarios
            }
        });
    }
    // Agregar un nuevo usuario
    postUsuarios(nuevoUsuario) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { ID_Usuarios, Nombre, email, telefono, contraseña, fecha } = nuevoUsuario; // Desestructuración del nuevo usuario
                const query = `
            INSERT INTO usuarios (ID_Usuarios, Nombre, email, telefono, contraseña, fecha) 
            VALUES (?,?,?,?,?,?)`; // Consulta de inserción ajustada a la estructura de la tabla usuarios
                yield mySqlconn_1.db.execute(query, [
                    ID_Usuarios,
                    Nombre,
                    email,
                    telefono,
                    contraseña,
                    fecha
                ]);
            }
            catch (err) {
                throw new Error(`Error inserting usuario: ${err.message}`); // Error al insertar usuario
            }
        });
    }
    // Eliminar un usuario por ID
    deletUsuarios(ID_Usuarios) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = "DELETE FROM usuarios WHERE ID_Usuarios = ?"; // Consulta de eliminación de usuario
                yield mySqlconn_1.db.execute(query, [ID_Usuarios]);
            }
            catch (err) {
                throw new Error(`Error deleting usuario: ${err.message}`); // Error al eliminar usuario
            }
        });
    }
}
exports.MySqlAdapter = MySqlAdapter;
