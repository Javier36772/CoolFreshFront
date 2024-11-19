import { Request, Response } from "express";
import { getAllUsuariosService, agregarUsuarioService, deleteUsuarioService } from "../../application/services/Usuarios.services";
import { Usuarios } from "../../domain/entities/Usuarios.entitys";

export class getAllUsuariosController {
    constructor(private getAllUsuarios: getAllUsuariosService) {}

    async run(req: Request, res: Response) {
        try {
            const response = await this.getAllUsuarios.run();
            return res.status(200).json(response);
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }
}

export class CrearUsuarioController {
    constructor(private postUsuario: agregarUsuarioService) {}

    async run(req: Request, res: Response): Promise<Response> {
        try {
            const nuevoUsuario = req.body as unknown as Usuarios;

            if (
                !nuevoUsuario.ID_Usuarios ||
                !nuevoUsuario.Nombre ||
                !nuevoUsuario.email ||
                !nuevoUsuario.telefono ||
                !nuevoUsuario.contraseña ||
                !nuevoUsuario.fecha
            ) {
                return res.status(400).json({ message: "Faltan Datos" });
            }

            await this.postUsuario.run(nuevoUsuario);
            return res.status(201).json({ message: "Usuario creado" });
        } catch (error: any) {
            return res.status(500).json({ message: `Error agregando usuario: ${error.message}` });
        }
    }
}

export class deleteUsuarioController {
    constructor(private deleteUsuario: deleteUsuarioService) {}

    async run(req: Request, res: Response): Promise<Response> {
        try {
            const { ID_Usuarios } = req.params;

            if (!ID_Usuarios) {
                return res.status(400).json({ message: "Faltan datos" });
            }

            await this.deleteUsuario.run(parseInt(ID_Usuarios));
            return res.status(200).json({ message: "Usuario eliminado" });
        } catch (error: any) {
            return res.status(500).json({ message: `Error eliminando usuario: ${error.message}` });
        }
    }
}
