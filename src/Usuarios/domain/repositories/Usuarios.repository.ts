import { Usuarios } from "../entities/Usuarios.entitys";

export interface UsuariosUsuarios {
    getUsuarios():Promise <Usuarios[]>
    postUsuarios(nuevoUsuario: Usuarios): Promise<void>
deletUsuarios(ID_Usuarios: number): Promise<void>
}