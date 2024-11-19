import { Usuarios } from "../../domain/entities/Usuarios.entitys";
import { db } from "../../../share/infraestructure/mySqlconn"; // Conexión a MySQL
import { UsuariosUsuarios } from "../../domain/repositories/Usuarios.repository"; // Repositorio de Usuarios

export class getAllUsuariosService {
    constructor(private _usuariosRepository: UsuariosUsuarios) {}

    async run() {
        try {
            const res = await this._usuariosRepository.getUsuarios(); // Método para obtener todos los usuarios
            return res;
        } catch (error: any) {
            throw new Error(error.message || "Error fetching users");
        }
    }
}

export class agregarUsuarioService {
    constructor(private readonly _usuariosRepository: UsuariosUsuarios) {}

    async run(nuevoUsuario: Usuarios): Promise<void> {
        try {
            await this._usuariosRepository.postUsuarios(nuevoUsuario); // Método para agregar un usuario
        } catch (error: any) {
            throw new Error(`Error adding user: ${error.message}`);
        }
    }
}

export class deleteUsuarioService {
    constructor(private readonly _usuariosRepository: UsuariosUsuarios) {}

    async run(id_Usuario: number): Promise<void> {
        try {
            await this._usuariosRepository.deletUsuarios(id_Usuario); // Método para eliminar un usuario
        } catch (error: any) {
            throw new Error(`Error deleting user: ${error.message}`);
        }
    }
}
