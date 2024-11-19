"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuarioControllerInstance = exports.CrearUsuarioControllerInstance = exports.AllUsuariosController = void 0;
const getAllUsuarios_controller_1 = require("./controllers/getAllUsuarios.controller");
const mysql_adapter_1 = require("./adapters/mysql.adapter");
const Usuarios_services_1 = require("../application/services/Usuarios.services");
const mySqlAdapter = new mysql_adapter_1.MySqlAdapter();
// Creamos el servicio y controlador para obtener todos los usuarios
const getAllUsuariosServiceInstance = new Usuarios_services_1.getAllUsuariosService(mySqlAdapter);
exports.AllUsuariosController = new getAllUsuarios_controller_1.getAllUsuariosController(getAllUsuariosServiceInstance);
// Creamos el servicio y controlador para agregar un usuario
const agregarUsuarioServiceInstance = new Usuarios_services_1.agregarUsuarioService(mySqlAdapter);
exports.CrearUsuarioControllerInstance = new getAllUsuarios_controller_1.CrearUsuarioController(agregarUsuarioServiceInstance);
// Creamos el servicio y controlador para eliminar un usuario
const deleteUsuarioServiceInstance = new Usuarios_services_1.deleteUsuarioService(mySqlAdapter);
exports.deleteUsuarioControllerInstance = new getAllUsuarios_controller_1.deleteUsuarioController(deleteUsuarioServiceInstance);
