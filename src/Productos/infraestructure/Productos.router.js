"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dependencies_1 = require("./dependencies");
const ProductosRouter = (0, express_1.Router)();
ProductosRouter.get("/", dependencies_1.AllProductosController.run.bind(dependencies_1.AllProductosController));
ProductosRouter.post("/", dependencies_1.CrearProductoControllerInstance.run.bind(dependencies_1.CrearProductoControllerInstance));
ProductosRouter.delete("/:id_Dispositivo", dependencies_1.deleteProductoControllerInstance.run.bind(dependencies_1.deleteProductoControllerInstance));
exports.default = ProductosRouter;
