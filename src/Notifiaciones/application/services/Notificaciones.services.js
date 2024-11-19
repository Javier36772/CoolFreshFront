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
exports.deleteNotifiacion = exports.agregarNotifiacion = exports.getAllNotifiacionesService = void 0;
class getAllNotifiacionesService {
    constructor(_notifiacionesRepository) {
        this._notifiacionesRepository = _notifiacionesRepository;
    } // Corregido a NotifiacionesNotificaciones
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield this._notifiacionesRepository.getNotifiaciones(); // Método getAllNotifiaciones del repositorio
                return res;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.getAllNotifiacionesService = getAllNotifiacionesService;
class agregarNotifiacion {
    constructor(_notifiacionesRepository) {
        this._notifiacionesRepository = _notifiacionesRepository;
    } // Corregido a NotifiacionesNotificaciones
    run(nuevaNotifiacion) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this._notifiacionesRepository.agregarNotifiaciones(nuevaNotifiacion); // Método agregarNotifiacion del repositorio
            }
            catch (error) {
                throw new Error(`Error adding notifiacion: ${error.message}`);
            }
        });
    }
}
exports.agregarNotifiacion = agregarNotifiacion;
class deleteNotifiacion {
    constructor(_notifiacionesRepository) {
        this._notifiacionesRepository = _notifiacionesRepository;
    } // Corregido a NotifiacionesNotificaciones
    run(id_Notifiaciones) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this._notifiacionesRepository.delteNotifiaciones(id_Notifiaciones); // Método deleteNotifiacion del repositorio
            }
            catch (error) {
                throw new Error(`Error deleting notifiacion: ${error.message}`);
            }
        });
    }
}
exports.deleteNotifiacion = deleteNotifiacion;
