
import { dispositivos } from "../entities/dispositivos.entitys";
import { promises } from "dns";

export interface dispositivosRepository {
    getAllDispositivos():Promise <dispositivos[]>
    agregarDispositivo(nuevoDispo: dispositivos): Promise<void>
deleteDispositivo(id_Dispositivos: number): Promise<void>
}