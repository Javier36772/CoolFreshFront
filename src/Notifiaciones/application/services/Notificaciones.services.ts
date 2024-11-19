import { Notifiaciones } from "../../domain/entities/Notificaciones.entitys"; // Entidad de Notificaciones
import { NotifiacionesNotificaciones } from "../../domain/repositories/Notificaciones.repository"; // Repositorio de Notificaciones

export class getAllNotifiacionesService {
    constructor(private _notifiacionesRepository: NotifiacionesNotificaciones) {} // Corregido a NotifiacionesNotificaciones

    async run() {
        try {
            const res = await this._notifiacionesRepository.getNotifiaciones(); // Método getAllNotifiaciones del repositorio
            return res;
        } catch(error: any) {
            throw new Error(error);
        }
    }
}

export class agregarNotifiacion {
    constructor(private readonly _notifiacionesRepository: NotifiacionesNotificaciones) {} // Corregido a NotifiacionesNotificaciones

    async run(nuevaNotifiacion: Notifiaciones): Promise<void> { // Cambié Lecturas por Notifiaciones
        try {
            await this._notifiacionesRepository.agregarNotifiaciones(nuevaNotifiacion); // Método agregarNotifiacion del repositorio
        } catch(error: any) {
            throw new Error(`Error adding notifiacion: ${error.message}`);
        }
    }
}

export class deleteNotifiacion {
    constructor(private readonly _notifiacionesRepository: NotifiacionesNotificaciones) {} // Corregido a NotifiacionesNotificaciones

    async run(id_Notifiaciones: number): Promise<void> {
        try {
            await this._notifiacionesRepository.delteNotifiaciones(id_Notifiaciones); // Método deleteNotifiacion del repositorio
        } catch(error: any) {
            throw new Error(`Error deleting notifiacion: ${error.message}`);
        }
    }
}
