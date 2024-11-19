"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dependencies_1 = require("./dependencies");
const LecturaRouter = (0, express_1.Router)();
LecturaRouter.get("/", dependencies_1.AllLecturasController.run.bind(dependencies_1.AllLecturasController));
LecturaRouter.post("/", dependencies_1.CrearLecturaController.run.bind(dependencies_1.CrearLecturaController));
LecturaRouter.delete("/:id_Dispositivo", dependencies_1.deleteLecturaControllerInstance.run.bind(dependencies_1.deleteLecturaControllerInstance));
exports.default = LecturaRouter;
