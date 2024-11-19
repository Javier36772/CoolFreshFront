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
exports.deleteProductoService = exports.agregarProductoService = exports.getAllProductosService = void 0;
class getAllProductosService {
    constructor(_productosRepository) {
        this._productosRepository = _productosRepository;
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield this._productosRepository.getProductos(); // Método para obtener todos los productos
                return res;
            }
            catch (error) {
                throw new Error(error.message || "Error fetching products");
            }
        });
    }
}
exports.getAllProductosService = getAllProductosService;
class agregarProductoService {
    constructor(_productosRepository) {
        this._productosRepository = _productosRepository;
    }
    run(nuevoProductos) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this._productosRepository.postProductos(nuevoProductos); // Método para agregar un producto
            }
            catch (error) {
                throw new Error(`Error adding product: ${error.message}`);
            }
        });
    }
}
exports.agregarProductoService = agregarProductoService;
class deleteProductoService {
    constructor(_productosRepository) {
        this._productosRepository = _productosRepository;
    }
    run(id_Producto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this._productosRepository.delteProductos(id_Producto); // Método para eliminar un producto
            }
            catch (error) {
                throw new Error(`Error deleting product: ${error.message}`);
            }
        });
    }
}
exports.deleteProductoService = deleteProductoService;
