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
exports.deleteDispositivoController = exports.CrearDispositivo = exports.getAllDispositivosController = void 0;
class getAllDispositivosController {
    constructor(getAllDispositivos) {
        this.getAllDispositivos = getAllDispositivos;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Response = yield this.getAllDispositivos.run();
                return res.status(200).json(Response);
            }
            catch (error) {
                return res.status(500).json(Response);
            }
        });
    }
}
exports.getAllDispositivosController = getAllDispositivosController;
class CrearDispositivo {
    constructor(postDispositivo) {
        this.postDispositivo = postDispositivo;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const nuevoDispositivo = req.body;
                if (!nuevoDispositivo.id_Dispositivos || !nuevoDispositivo.Nombre || !nuevoDispositivo.ID_Usuarios || !nuevoDispositivo.ubicacion || nuevoDispositivo.Ultima_conexion) {
                    return res.status(400).json({ message: "Faltan Datos" });
                }
                yield this.postDispositivo.run(nuevoDispositivo);
                return res.status(201).json({ message: "creado" });
            }
            catch (error) {
                return res.status(500).json({ message: `error agregando dispositivos: ${error.message}` });
            }
        });
    }
}
exports.CrearDispositivo = CrearDispositivo;
class deleteDispositivoController {
    constructor(deleteDispositivo) {
        this.deleteDispositivo = deleteDispositivo;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_Dispositivos } = req.params;
                if (!id_Dispositivos) {
                    return res.status(400).json({ message: "faltan datos" });
                }
                yield this.deleteDispositivo.run(parseInt(id_Dispositivos));
                return res.status(200).json({ message: "dispositivo eliminado" });
            }
            catch (error) {
                return res.status(500).json({ message: `Error deleting dispositivo: ${error.message}` });
            }
        });
    }
}
exports.deleteDispositivoController = deleteDispositivoController;
