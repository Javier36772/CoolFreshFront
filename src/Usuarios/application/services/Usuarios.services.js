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
exports.deleteUsuarioService = exports.agregarUsuarioService = exports.getAllUsuariosService = void 0;
class getAllUsuariosService {
    constructor(_usuariosRepository) {
        this._usuariosRepository = _usuariosRepository;
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield this._usuariosRepository.getUsuarios(); // Método para obtener todos los usuarios
                return res;
            }
            catch (error) {
                throw new Error(error.message || "Error fetching users");
            }
        });
    }
}
exports.getAllUsuariosService = getAllUsuariosService;
class agregarUsuarioService {
    constructor(_usuariosRepository) {
        this._usuariosRepository = _usuariosRepository;
    }
    run(nuevoUsuario) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this._usuariosRepository.postUsuarios(nuevoUsuario); // Método para agregar un usuario
            }
            catch (error) {
                throw new Error(`Error adding user: ${error.message}`);
            }
        });
    }
}
exports.agregarUsuarioService = agregarUsuarioService;
class deleteUsuarioService {
    constructor(_usuariosRepository) {
        this._usuariosRepository = _usuariosRepository;
    }
    run(id_Usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this._usuariosRepository.deletUsuarios(id_Usuario); // Método para eliminar un usuario
            }
            catch (error) {
                throw new Error(`Error deleting user: ${error.message}`);
            }
        });
    }
}
exports.deleteUsuarioService = deleteUsuarioService;
