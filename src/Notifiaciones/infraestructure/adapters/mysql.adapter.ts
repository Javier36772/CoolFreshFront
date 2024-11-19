import { Notifiaciones } from "../../domain/entities/Notificaciones.entitys"; // Entidad de Notificaciones
import { db } from "../../../share/infraestructure/mySqlconn"; // Conexión a MySQL
import { NotifiacionesNotificaciones } from "../../domain/repositories/Notificaciones.repository"; // Repositorio de Notificaciones

export class MySqlAdapter implements NotifiacionesNotificaciones {
   
   
    async getNotifiaciones(): Promise<Notifiaciones[]> { // Método renombrado
        try {
            const query = "SELECT * FROM notificaciones"; // Cambiado "lecturas" a "notificaciones"
            const [res] = await db.execute(query);
            return res as Notifiaciones[];
        } catch (err: any) {
            throw new Error(`Error fetching notificaciones: ${err.message}`); // Mensaje de error ajustado
        }
    }

    async agregarNotifiaciones(nuevaNotifiacion: Notifiaciones): Promise<void> { // Método renombrado
        try {
            const { id_Notificaciones, Fk_Dispositivos, Fk_Productos, tipo, mensaje, fecha_envio } = nuevaNotifiacion; // Ajuste a Notifiaciones
            const query = `
            INSERT INTO notificaciones (id_Notificaciones, Fk_Dispositivos, Fk_Productos, tipo, mensaje, fecha_envio) 
            VALUES (?,?,?,?,?,?)`; // Ajustado para reflejar la tabla notificaciones
            await db.execute(query, [
                id_Notificaciones,
                Fk_Dispositivos,
                Fk_Productos,
                tipo,
                mensaje,
                fecha_envio
            ]);
        } catch (err: any) {
            throw new Error(`Error inserting notificacion: ${err.message}`); // Mensaje de error ajustado
        }
    }

    async delteNotifiaciones(id_Notificaciones: number): Promise<void> { // Método renombrado
        try {
            const query = "DELETE FROM notificaciones WHERE id_Notificaciones = ?"; // Ajustado para reflejar la tabla notificaciones
            await db.execute(query, [id_Notificaciones]);
        } catch (err: any) {
            throw new Error(`Error deleting notificacion: ${err.message}`); // Mensaje de error ajustado
        }
    }
}