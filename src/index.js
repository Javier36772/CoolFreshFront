"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_adapter_1 = require("./Notifiaciones/infraestructure/adapters/mysql.adapter");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mySqlconn_1 = require("./share/infraestructure/mySqlconn");
const Dispositivos_router_1 = __importDefault(require("./Dispositivos/infraestructure/Dispositivos.router"));
const dispositivos_router_1 = __importDefault(require("./lecturas/infraestructure/dispositivos.router"));
const Dispositivos_router_2 = __importDefault(require("./Notifiaciones/infraestructure/Dispositivos.router"));
const Productos_router_1 = __importDefault(require("./Productos/infraestructure/Productos.router"));
const Usuarios_routers_1 = __importDefault(require("./Usuarios/infraestructure/Usuarios.routers"));
const mysqlAdapter = new mysql_adapter_1.MySqlAdapter(); // croqueta
const app = (0, express_1.default)();
const PORT = "3000";
app.disable("x-powerd-by");
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/Dispositivo', Dispositivos_router_1.default);
app.use('/Lectura', dispositivos_router_1.default);
app.use('/Notificacion', Dispositivos_router_2.default);
app.use('/Productos', Productos_router_1.default);
app.use('/Usuarios', Usuarios_routers_1.default);
mySqlconn_1.db.connect()
    .then(() => console.log("Database connected"))
    .catch((err) => console.error("Error connecting to data base:" + err));
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
// Instancia de adaptadores para base de datos (capa de infraestructura) 
