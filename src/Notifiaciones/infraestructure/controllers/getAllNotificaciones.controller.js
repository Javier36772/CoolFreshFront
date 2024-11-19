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
exports.deleteNotifiacionController = exports.CrearNotifiacionController = exports.getAllNotifiacionesController = void 0;
class getAllNotifiacionesController {
    constructor(getAllNotifiaciones) {
        this.getAllNotifiaciones = getAllNotifiaciones;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.getAllNotifiaciones.run();
                return res.status(200).json(response);
            }
            catch (error) {
                return res.status(500).json({ message: error.message });
            }
        });
    }
}
exports.getAllNotifiacionesController = getAllNotifiacionesController;
class CrearNotifiacionController {
    constructor(postNotifiacion) {
        this.postNotifiacion = postNotifiacion;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const nuevaNotifiacion = req.body;
                if (!nuevaNotifiacion.id_Notificaciones ||
                    !nuevaNotifiacion.Fk_Dispositivos ||
                    !nuevaNotifiacion.Fk_Productos ||
                    !nuevaNotifiacion.tipo ||
                    !nuevaNotifiacion.mensaje ||
                    !nuevaNotifiacion.fecha_envio) {
                    return res.status(400).json({ message: "Faltan Datos" });
                }
                yield this.postNotifiacion.run(nuevaNotifiacion);
                return res.status(201).json({ message: "Notificación creada" });
            }
            catch (error) {
                return res.status(500).json({ message: `Error agregando notificación: ${error.message}` });
            }
        });
    }
}
exports.CrearNotifiacionController = CrearNotifiacionController;
class deleteNotifiacionController {
    constructor(deleteNotifiacion) {
        this.deleteNotifiacion = deleteNotifiacion;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_Notificaciones } = req.params;
                if (!id_Notificaciones) {
                    return res.status(400).json({ message: "Faltan datos" });
                }
                yield this.deleteNotifiacion.run(parseInt(id_Notificaciones));
                return res.status(200).json({ message: "Notificación eliminada" });
            }
            catch (error) {
                return res.status(500).json({ message: `Error eliminando notificación: ${error.message}` });
            }
        });
    }
}
exports.deleteNotifiacionController = deleteNotifiacionController;
