import { getAllNotifiacionesController, CrearNotifiacionController, deleteNotifiacionController } from "./controllers/getAllNotificaciones.controller";
import { MySqlAdapter } from "./adapters/mysql.adapter";
import { getAllNotifiacionesService, agregarNotifiacion, deleteNotifiacion } from "../application/services/Notificaciones.services";

const mySqlAdapter = new MySqlAdapter();

// Creamos el servicio y controlador para obtener todas las notificaciones
const getAllNotifiacionesServiceInstance = new getAllNotifiacionesService(mySqlAdapter);
export const AllNotifiacionesController = new getAllNotifiacionesController(getAllNotifiacionesServiceInstance);

// Creamos el servicio y controlador para agregar una notificación
const agregarNotifiacionService = new agregarNotifiacion(mySqlAdapter);
export const CrearNotifiacionControllerInstance = new CrearNotifiacionController(agregarNotifiacionService);

// Creamos el servicio y controlador para eliminar una notificación
const deleteNotifiacionService = new deleteNotifiacion(mySqlAdapter);
export const deleteNotifiacionControllerInstance = new deleteNotifiacionController(deleteNotifiacionService);
