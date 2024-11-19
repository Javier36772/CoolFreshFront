import { Usuarios } from "../../domain/entities/Usuarios.entitys";
import { db } from "../../../share/infraestructure/mySqlconn"; // Conexión a MySQL
import { UsuariosUsuarios } from "../../domain/repositories/Usuarios.repository"; // Repositorio de Usuarios

export class MySqlAdapter implements UsuariosUsuarios {
    
    // Obtener todos los usuarios
    async getUsuarios(): Promise<Usuarios[]> {
        try {
            const query = "SELECT * FROM usuarios"; // Consulta para obtener usuarios
            const [res] = await db.execute(query);
            return res as Usuarios[]; // Retorna los usuarios como un array de Usuarios
        } catch (err: any) {
            throw new Error(`Error fetching usuarios: ${err.message}`); // Error si no se obtienen usuarios
        }
    }

    // Agregar un nuevo usuario
    async postUsuarios(nuevoUsuario: Usuarios): Promise<void> {
        try {
            const { ID_Usuarios, Nombre, email, telefono, contraseña, fecha } = nuevoUsuario; // Desestructuración del nuevo usuario
            const query = `
            INSERT INTO usuarios (ID_Usuarios, Nombre, email, telefono, contraseña, fecha) 
            VALUES (?,?,?,?,?,?)`; // Consulta de inserción ajustada a la estructura de la tabla usuarios
            await db.execute(query, [
                ID_Usuarios,
                Nombre,
                email,
                telefono,
                contraseña,
                fecha
            ]);
        } catch (err: any) {
            throw new Error(`Error inserting usuario: ${err.message}`); // Error al insertar usuario
        }
    }

    // Eliminar un usuario por ID
    async deletUsuarios(ID_Usuarios: number): Promise<void> {
        try {
            const query = "DELETE FROM usuarios WHERE ID_Usuarios = ?"; // Consulta de eliminación de usuario
            await db.execute(query, [ID_Usuarios]);
        } catch (err: any) {
            throw new Error(`Error deleting usuario: ${err.message}`); // Error al eliminar usuario
        }
    }
}
