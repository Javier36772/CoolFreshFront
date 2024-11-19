import { agregarDispositivo,deleteDispositivo,getAllDispositivosService, } from "../application/services/Dispositivos.services";
import { MySqlAdapter } from "./adapters/myqsl.adapters";
import { CrearDispositivo, deleteDispositivoController, getAllDispositivosController } from "./controllers/getAllDispositivos.controller";

const mySqlAdapter = new MySqlAdapter();

const getAllDispositivos = new getAllDispositivosService(mySqlAdapter);
export const AllDispositivosController = new getAllDispositivosController(getAllDispositivos);

const CrearDispositivoService = new agregarDispositivo(mySqlAdapter);
export const dispositivoPost = new CrearDispositivo(CrearDispositivoService)

const deleteDispositivooService = new deleteDispositivo(mySqlAdapter)
export const deleteDispositivoController2 = new deleteDispositivoController(deleteDispositivooService)