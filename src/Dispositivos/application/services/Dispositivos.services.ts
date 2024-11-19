import { dispositivos } from "../../domain/entities/dispositivos.entitys";
import { dispositivosRepository } from "../../domain/repositories/dispositivos.repository";

export class getAllDispositivosService{
    execute() {
        throw new Error("Method not implemented.");
    }
    constructor(private _dispositivosRepository:dispositivosRepository) {}

    async run() {
        try{
            const res =await this._dispositivosRepository.getAllDispositivos();
            return res;
        }catch(error: any){
            throw new Error(error);

        }
        
    }
}

    export class  agregarDispositivo {
        constructor(private readonly _dispositivosRepository:dispositivosRepository) {}

        async run(nuevoDisvo:dispositivos): Promise<void>{
            try{
                await this._dispositivosRepository.agregarDispositivo(nuevoDisvo);
               }catch(error:any){
                throw new Error(`Error adding alerta: ${error.message}`);

               }
            }
        }

    export class deleteDispositivo{
        constructor(private readonly _dispositivosRepository:dispositivosRepository) {}
    
        async run(id_Dispositivos: number):Promise<void>{
            try {
                await this._dispositivosRepository.deleteDispositivo(id_Dispositivos);
                }catch(error:any){
                    throw new Error(`Error deleting cuyo: ${error.message}`)
                }
        }
    }

    

