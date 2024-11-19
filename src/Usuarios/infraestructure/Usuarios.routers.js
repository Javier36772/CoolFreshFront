"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dependencies_1 = require("./dependencies");
const UsuariosRouter = (0, express_1.Router)();
UsuariosRouter.get("/", dependencies_1.AllUsuariosController.run.bind(dependencies_1.AllUsuariosController));
UsuariosRouter.post("/", dependencies_1.CrearUsuarioControllerInstance.run.bind(dependencies_1.CrearUsuarioControllerInstance));
UsuariosRouter.delete("/:id_Dispositivo", dependencies_1.deleteUsuarioControllerInstance.run.bind(dependencies_1.deleteUsuarioControllerInstance));
exports.default = UsuariosRouter;
