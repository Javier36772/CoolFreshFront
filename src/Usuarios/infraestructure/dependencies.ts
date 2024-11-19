import { getAllUsuariosController, CrearUsuarioController, deleteUsuarioController } from "./controllers/getAllUsuarios.controller";
import { MySqlAdapter } from "./adapters/mysql.adapter";
import { getAllUsuariosService, agregarUsuarioService, deleteUsuarioService } from "../application/services/Usuarios.services";

const mySqlAdapter = new MySqlAdapter();

// Creamos el servicio y controlador para obtener todos los usuarios
const getAllUsuariosServiceInstance = new getAllUsuariosService(mySqlAdapter);
export const AllUsuariosController = new getAllUsuariosController(getAllUsuariosServiceInstance);

// Creamos el servicio y controlador para agregar un usuario
const agregarUsuarioServiceInstance = new agregarUsuarioService(mySqlAdapter);
export const CrearUsuarioControllerInstance = new CrearUsuarioController(agregarUsuarioServiceInstance);

// Creamos el servicio y controlador para eliminar un usuario
const deleteUsuarioServiceInstance = new deleteUsuarioService(mySqlAdapter);
export const deleteUsuarioControllerInstance = new deleteUsuarioController(deleteUsuarioServiceInstance);
