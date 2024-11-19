import { getAllLecturasController, CrearLecturas, deleteLecturaController } from "./controllers/getAllLecturas.controller"; // Importaciones de los controladores correctas
import { MySqlAdapter } from "./adapters/mysql.adapters"; // Importación del adaptador MySQL
import { getAllLecturasService, agregarLectura, deleteLectura } from "../application/services/lecturas.services"; // Importación de los servicios relacionados con lecturas

const mySqlAdapter = new MySqlAdapter();

// Creamos el servicio y controlador para obtener todas las lecturas
const getAllLecturasServiceInstance = new getAllLecturasService(mySqlAdapter);
export const AllLecturasController = new getAllLecturasController(getAllLecturasServiceInstance);

// Creamos el servicio y controlador para agregar una lectura
const agregarLecturaService = new agregarLectura(mySqlAdapter);
export const CrearLecturaController = new CrearLecturas(agregarLecturaService);

// Creamos el servicio y controlador para eliminar una lectura
const deleteLecturaService = new deleteLectura(mySqlAdapter);
export const deleteLecturaControllerInstance = new deleteLecturaController(deleteLecturaService);
