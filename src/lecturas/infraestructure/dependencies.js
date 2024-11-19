"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteLecturaControllerInstance = exports.CrearLecturaController = exports.AllLecturasController = void 0;
const getAllLecturas_controller_1 = require("./controllers/getAllLecturas.controller"); // Importaciones de los controladores correctas
const mysql_adapters_1 = require("./adapters/mysql.adapters"); // Importación del adaptador MySQL
const lecturas_services_1 = require("../application/services/lecturas.services"); // Importación de los servicios relacionados con lecturas
const mySqlAdapter = new mysql_adapters_1.MySqlAdapter();
// Creamos el servicio y controlador para obtener todas las lecturas
const getAllLecturasServiceInstance = new lecturas_services_1.getAllLecturasService(mySqlAdapter);
exports.AllLecturasController = new getAllLecturas_controller_1.getAllLecturasController(getAllLecturasServiceInstance);
// Creamos el servicio y controlador para agregar una lectura
const agregarLecturaService = new lecturas_services_1.agregarLectura(mySqlAdapter);
exports.CrearLecturaController = new getAllLecturas_controller_1.CrearLecturas(agregarLecturaService);
// Creamos el servicio y controlador para eliminar una lectura
const deleteLecturaService = new lecturas_services_1.deleteLectura(mySqlAdapter);
exports.deleteLecturaControllerInstance = new getAllLecturas_controller_1.deleteLecturaController(deleteLecturaService);
