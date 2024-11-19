"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dependencies_1 = require("./dependencies");
const NotificacionesRouter = (0, express_1.Router)();
NotificacionesRouter.get("/", dependencies_1.AllNotifiacionesController.run.bind(dependencies_1.AllNotifiacionesController));
NotificacionesRouter.post("/", dependencies_1.CrearNotifiacionControllerInstance.run.bind(dependencies_1.CrearNotifiacionControllerInstance));
NotificacionesRouter.delete("/:id_Dispositivo", dependencies_1.deleteNotifiacionControllerInstance.run.bind(dependencies_1.deleteNotifiacionControllerInstance));
exports.default = NotificacionesRouter;
