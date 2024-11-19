
import { Notifiaciones } from "../entities/Notificaciones.entitys";
import { promises } from "dns";

export interface NotifiacionesNotificaciones {
    getNotifiaciones():Promise <Notifiaciones[]>
    agregarNotifiaciones(nuevaNotificacion: Notifiaciones): Promise<void>
delteNotifiaciones(id_Notificaciones: number): Promise<void>
}