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
exports.deleteDispositivo = exports.agregarDispositivo = exports.getAllDispositivosService = void 0;
class getAllDispositivosService {
    execute() {
        throw new Error("Method not implemented.");
    }
    constructor(_dispositivosRepository) {
        this._dispositivosRepository = _dispositivosRepository;
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield this._dispositivosRepository.getAllDispositivos();
                return res;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.getAllDispositivosService = getAllDispositivosService;
class agregarDispositivo {
    constructor(_dispositivosRepository) {
        this._dispositivosRepository = _dispositivosRepository;
    }
    run(nuevoDisvo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this._dispositivosRepository.agregarDispositivo(nuevoDisvo);
            }
            catch (error) {
                throw new Error(`Error adding alerta: ${error.message}`);
            }
        });
    }
}
exports.agregarDispositivo = agregarDispositivo;
class deleteDispositivo {
    constructor(_dispositivosRepository) {
        this._dispositivosRepository = _dispositivosRepository;
    }
    run(id_Dispositivos) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this._dispositivosRepository.deleteDispositivo(id_Dispositivos);
            }
            catch (error) {
                throw new Error(`Error deleting cuyo: ${error.message}`);
            }
        });
    }
}
exports.deleteDispositivo = deleteDispositivo;
