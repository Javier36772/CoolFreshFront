import { MySqlAdapter } from "./Notifiaciones/infraestructure/adapters/mysql.adapter";
import Express from "express";
import cors from "cors";
import { db } from "./share/infraestructure/mySqlconn";
import dispositivolRouter from "./Dispositivos/infraestructure/Dispositivos.router";
import LecturaRouter from "./lecturas/infraestructure/dispositivos.router";
import NotificacionesRouter from "./Notifiaciones/infraestructure/Dispositivos.router";
import ProductosRouter from "./Productos/infraestructure/Productos.router";
import UsuariosRouter from "./Usuarios/infraestructure/Usuarios.routers";
import dotenv from "dotenv";

// Instancia de adaptador MySQL
const mysqlAdapter = new MySqlAdapter();

const app = Express();

// Cambiar el puerto para Express (usar 3000, no 3306 que es para MySQL)
const PORT = 3000;


app.disable("x-powered-by");

app.use(cors());
app.use(Express.json());

// Definir las rutas para los diferentes servicios
app.use('/Dispositivo', dispositivolRouter);
app.use('/Lectura', LecturaRouter);
app.use('/Notificacion', NotificacionesRouter);
app.use('/Productos', ProductosRouter);
app.use('/Usuarios', UsuariosRouter);

dotenv.config();

console.log("Verificando variables de entorno:");
console.log("HOST:", process.env.HOST);
console.log("USERDB:", process.env.USERDB);
console.log("PASSWORDDB:", process.env.PASSWORDDB);
console.log("DATABASE:", process.env.DATABASE);

// Conectar a la base de datos MySQL (esto está bien en el puerto 3306)
db.connect()
  .then(() => console.log("Database connected on port 3306"))
  .catch((err) => console.error("Error connecting to database: " + err));

// Iniciar el servidor Express en el puerto 3000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
