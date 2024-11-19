"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNotifiacionControllerInstance = exports.CrearNotifiacionControllerInstance = exports.AllNotifiacionesController = void 0;
const getAllNotificaciones_controller_1 = require("./controllers/getAllNotificaciones.controller");
const mysql_adapter_1 = require("./adapters/mysql.adapter");
const Notificaciones_services_1 = require("../application/services/Notificaciones.services");
const mySqlAdapter = new mysql_adapter_1.MySqlAdapter();
// Creamos el servicio y controlador para obtener todas las notificaciones
const getAllNotifiacionesServiceInstance = new Notificaciones_services_1.getAllNotifiacionesService(mySqlAdapter);
exports.AllNotifiacionesController = new getAllNotificaciones_controller_1.getAllNotifiacionesController(getAllNotifiacionesServiceInstance);
// Creamos el servicio y controlador para agregar una notificación
const agregarNotifiacionService = new Notificaciones_services_1.agregarNotifiacion(mySqlAdapter);
exports.CrearNotifiacionControllerInstance = new getAllNotificaciones_controller_1.CrearNotifiacionController(agregarNotifiacionService);
// Creamos el servicio y controlador para eliminar una notificación
const deleteNotifiacionService = new Notificaciones_services_1.deleteNotifiacion(mySqlAdapter);
exports.deleteNotifiacionControllerInstance = new getAllNotificaciones_controller_1.deleteNotifiacionController(deleteNotifiacionService);
