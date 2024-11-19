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
    getNotifiaciones() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = "SELECT * FROM notificaciones"; // Cambiado "lecturas" a "notificaciones"
                const [res] = yield mySqlconn_1.db.execute(query);
                return res;
            }
            catch (err) {
                throw new Error(`Error fetching notificaciones: ${err.message}`); // Mensaje de error ajustado
            }
        });
    }
    agregarNotifiaciones(nuevaNotifiacion) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_Notificaciones, Fk_Dispositivos, Fk_Productos, tipo, mensaje, fecha_envio } = nuevaNotifiacion; // Ajuste a Notifiaciones
                const query = `
            INSERT INTO notificaciones (id_Notificaciones, Fk_Dispositivos, Fk_Productos, tipo, mensaje, fecha_envio) 
            VALUES (?,?,?,?,?,?)`; // Ajustado para reflejar la tabla notificaciones
                yield mySqlconn_1.db.execute(query, [
                    id_Notificaciones,
                    Fk_Dispositivos,
                    Fk_Productos,
                    tipo,
                    mensaje,
                    fecha_envio
                ]);
            }
            catch (err) {
                throw new Error(`Error inserting notificacion: ${err.message}`); // Mensaje de error ajustado
            }
        });
    }
    delteNotifiaciones(id_Notificaciones) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = "DELETE FROM notificaciones WHERE id_Notificaciones = ?"; // Ajustado para reflejar la tabla notificaciones
                yield mySqlconn_1.db.execute(query, [id_Notificaciones]);
            }
            catch (err) {
                throw new Error(`Error deleting notificacion: ${err.message}`); // Mensaje de error ajustado
            }
        });
    }
}
exports.MySqlAdapter = MySqlAdapter;
