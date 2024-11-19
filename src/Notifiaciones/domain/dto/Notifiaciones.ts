export interface NotifiacionesDto{
    Fk_Dispositivos: number;
    Fk_Productos: number;
    tipo: string;
    mensaje: string;
    fecha_envio:Date;
    estado:string;

    
}