import { dispositivos } from "../../domain/entities/dispositivos.entitys";
import { db } from "../../../share/infraestructure/mySqlconn";
import { dispositivosRepository } from "../../domain/repositories/dispositivos.repository";

export class MySqlAdapter implements dispositivosRepository{

    async getAllDispositivos(): Promise<dispositivos[]> {
    try{
        const query = "SELECT * FROM dispositivos";
        const [res] = await db.execute(query);
        return res as dispositivos[];
     } catch (err:any){  
            throw new Error(`Error fetching data from cuyos: ${err.message}`);
           }

    }


async agregarDispositivo(nuevoDispo: dispositivos): Promise<void>{
    try{
        const{ id_Dispositivos, Nombre, ID_Usuarios, ubicacion, Ultima_conexion}= nuevoDispo;
        const query = `
       INSERT INTO dispositivos (id_Dispositivos, Nombre, ID_Usuarios, ubicacion, Ultima_conexion) 
        VALUES (?,?,?,?,?)`;


        await db.execute(query,[
            id_Dispositivos,
            Nombre,
            ID_Usuarios,
            ubicacion,
            Ultima_conexion
        ]);
    }catch (err:any){
        throw new Error(`Error inserting cuyo: ${err.message}`);
    }
}

async deleteDispositivo(id_Dispositivos: number): Promise<void> {
    try{
        const query = "DELETE FROM dispositivos WHERE id_Dispositivos = =";
        await db.execute(query, [id_Dispositivos]);
        }catch (err:any){
            throw new Error(`Error deleting cuyo: ${err.message}`);
        }
    }
}





