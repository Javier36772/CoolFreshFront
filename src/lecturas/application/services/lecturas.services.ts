import { Lecturas } from "../../domain/entities/lecturas.entitys";
import { LecturasRepository } from "../../domain/repositories/lectutas.repository";

export class getAllLecturasService {
    execute() {
        throw new Error("Method not implemented.");
    }
    constructor(private _alertasRepository: LecturasRepository) {}

    async run() {
        try {
            const res = await this._alertasRepository.getLectuars();
            return res;
        } catch(error: any) {
            throw new Error(error);
        }
    }
}

export class agregarLectura {
    constructor(private readonly _alertasRepository: LecturasRepository) {}

    async run(nuevaLectura: Lecturas): Promise<void> {
        try {
            await this._alertasRepository.agregarLecturas(nuevaLectura);
        } catch(error: any) {
            throw new Error(`Error adding lectura: ${error.message}`);
        }
    }
}

export class deleteLectura {
    constructor(private readonly _alertasRepository: LecturasRepository) {}

    async run(id_Alertas: number): Promise<void> {
        try {
            await this._alertasRepository.deleteLectuars(id_Alertas);
        } catch(error: any) {
            throw new Error(`Error deleting lectura: ${error.message}`)
        }
    }
}