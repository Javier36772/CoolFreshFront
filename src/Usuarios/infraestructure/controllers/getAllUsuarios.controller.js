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
exports.deleteUsuarioController = exports.CrearUsuarioController = exports.getAllUsuariosController = void 0;
class getAllUsuariosController {
    constructor(getAllUsuarios) {
        this.getAllUsuarios = getAllUsuarios;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.getAllUsuarios.run();
                return res.status(200).json(response);
            }
            catch (error) {
                return res.status(500).json({ message: error.message });
            }
        });
    }
}
exports.getAllUsuariosController = getAllUsuariosController;
class CrearUsuarioController {
    constructor(postUsuario) {
        this.postUsuario = postUsuario;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const nuevoUsuario = req.body;
                if (!nuevoUsuario.ID_Usuarios ||
                    !nuevoUsuario.Nombre ||
                    !nuevoUsuario.email ||
                    !nuevoUsuario.telefono ||
                    !nuevoUsuario.contraseña ||
                    !nuevoUsuario.fecha) {
                    return res.status(400).json({ message: "Faltan Datos" });
                }
                yield this.postUsuario.run(nuevoUsuario);
                return res.status(201).json({ message: "Usuario creado" });
            }
            catch (error) {
                return res.status(500).json({ message: `Error agregando usuario: ${error.message}` });
            }
        });
    }
}
exports.CrearUsuarioController = CrearUsuarioController;
class deleteUsuarioController {
    constructor(deleteUsuario) {
        this.deleteUsuario = deleteUsuario;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { ID_Usuarios } = req.params;
                if (!ID_Usuarios) {
                    return res.status(400).json({ message: "Faltan datos" });
                }
                yield this.deleteUsuario.run(parseInt(ID_Usuarios));
                return res.status(200).json({ message: "Usuario eliminado" });
            }
            catch (error) {
                return res.status(500).json({ message: `Error eliminando usuario: ${error.message}` });
            }
        });
    }
}
exports.deleteUsuarioController = deleteUsuarioController;
