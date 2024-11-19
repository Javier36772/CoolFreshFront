import { Lecturas } from "../../domain/entities/lecturas.entitys";
import { db } from "../../../share/infraestructure/mySqlconn";
import { LecturasRepository } from "../../domain/repositories/lectutas.repository";

export class MySqlAdapter implements LecturasRepository  {
   
    

    async getLectuars(): Promise<Lecturas[]> {
        try {
            const query = "SELECT * FROM lecturas";
            const [res] = await db.execute(query);
            return res as Lecturas[];
        } catch (err: any) {
            throw new Error(`Error fetching data from cuyos: ${err.message}`);
        }
    }

    async agregarLecturas(nuevasLecturas: Lecturas): Promise<void> {
        try {
            const { id_Alertas, id_Dispositivos, Temperatura, Humedad, co2,calidad_aire } = nuevasLecturas;
            const query = `
            INSERT INTO dispositivos (id_Alertas, id_Dispositivos, Temperatura, Humedad, co2,calidad_aire) 
            VALUES (?,?,?,?,?)`;
            await db.execute(query, [
                id_Alertas,
                id_Dispositivos,
                Temperatura,
                Humedad,
                co2,
                calidad_aire
            ]);
        } catch (err: any) {
            throw new Error(`Error inserting cuyo: ${err.message}`);
        }
    }

    async deleteLectuars(id_Alertas: number): Promise<void> {
        try {
            const query = "DELETE FROM dispositivos WHERE id_Dispositivos = ?";
            await db.execute(query, [id_Alertas]);
        } catch (err: any) {
            throw new Error(`Error deleting cuyo: ${err.message}`);
        }
    }
}