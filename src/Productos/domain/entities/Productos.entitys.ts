export interface Productos{
    id_Productos:number,
    Nombre: string;
    Fk_Dispositivos2: number;
    temperatura_optima_min: string;
    temperatura_optima_max: string;
    humedad_optima_min:string;
    humedad_optima_max:string;
    calidad_del_aire:string;

    
}