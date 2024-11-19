"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProductoController = exports.CrearProductoController = exports.getAllProductosController = void 0;
class getAllProductosController {
    constructor(getAllProductos) {
        this.getAllProductos = getAllProductos;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.getAllProductos.run();
                return res.status(200).json(response);
            }
            catch (error) {
                return res.status(500).json({ message: error.message });
            }
        });
    }
}
exports.getAllProductosController = getAllProductosController;
class CrearProductoController {
    constructor(postProducto) {
        this.postProducto = postProducto;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const nuevoProducto = req.body;
                if (!nuevoProducto.id_Producto ||
                    !nuevoProducto.Nombre ||
                    !nuevoProducto.Fk_Dispositivos2 ||
                    !nuevoProducto.temperatura_optima_min ||
                    !nuevoProducto.temperatura_optima_max ||
                    !nuevoProducto.humedad_optima_min ||
                    !nuevoProducto.humedad_optima_max ||
                    !nuevoProducto.calidad_del_aire) {
                    return res.status(400).json({ message: "Faltan Datos" });
                }
                yield this.postProducto.run(nuevoProducto);
                return res.status(201).json({ message: "Producto creado" });
            }
            catch (error) {
                return res.status(500).json({ message: `Error agregando producto: ${error.message}` });
            }
        });
    }
}
exports.CrearProductoController = CrearProductoController;
class deleteProductoController {
    constructor(deleteProducto) {
        this.deleteProducto = deleteProducto;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_Producto } = req.params;
                if (!id_Producto) {
                    return res.status(400).json({ message: "Faltan datos" });
                }
                yield this.deleteProducto.run(parseInt(id_Producto));
                return res.status(200).json({ message: "Producto eliminado" });
            }
            catch (error) {
                return res.status(500).json({ message: `Error eliminando producto: ${error.message}` });
            }
        });
    }
}
exports.deleteProductoController = deleteProductoController;
