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
exports.deleteLecturaController = exports.CrearLecturas = exports.getAllLecturasController = void 0;
class getAllLecturasController {
    constructor(getAllLecturas) {
        this.getAllLecturas = getAllLecturas;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const Response = yield this.getAllLecturas.run();
                return res.status(200).json(Response);
            }
            catch (error) {
                return res.status(500).json(Response);
            }
        });
    }
}
exports.getAllLecturasController = getAllLecturasController;
class CrearLecturas {
    constructor(PostLecturas) {
        this.PostLecturas = PostLecturas;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const nuevaLectura = req.body;
                if (!nuevaLectura.id_Alertas || !nuevaLectura.id_Dispositivos || !nuevaLectura.Temperatura || !nuevaLectura.Humedad || nuevaLectura.co2 || nuevaLectura.calidad_aire) {
                    return res.status(400).json({ message: "Faltan Datos" });
                }
                yield this.PostLecturas.run(nuevaLectura);
                return res.status(201).json({ message: "creado" });
            }
            catch (error) {
                return res.status(500).json({ message: `error agregando dispositivos: ${error.message}` });
            }
        });
    }
}
exports.CrearLecturas = CrearLecturas;
class deleteLecturaController {
    constructor(deleteLectura) {
        this.deleteLectura = deleteLectura;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_Alertas } = req.params;
                if (!id_Alertas) {
                    return res.status(400).json({ message: "faltan datos" });
                }
                yield this.deleteLectura.run(parseInt(id_Alertas));
                return res.status(200).json({ message: "dispositivo eliminado" });
            }
            catch (error) {
                return res.status(500).json({ message: `Error deleting dispositivo: ${error.message}` });
            }
        });
    }
}
exports.deleteLecturaController = deleteLecturaController;
