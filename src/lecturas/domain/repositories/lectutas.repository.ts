
import { Lecturas } from "../entities/lecturas.entitys";
import { promises } from "dns";

export interface LecturasRepository {
    getLectuars():Promise <Lecturas[]>
    agregarLecturas(nuevoDispo: Lecturas): Promise<void>
deleteLectuars(id_Alertas: number): Promise<void>
}