"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dependencies_1 = require("./dependencies");
const dispositivolRouter = (0, express_1.Router)();
dispositivolRouter.get("/", dependencies_1.AllDispositivosController.run.bind(dependencies_1.AllDispositivosController));
dispositivolRouter.post("/", dependencies_1.dispositivoPost.run.bind(dependencies_1.dispositivoPost));
dispositivolRouter.delete("/:id_Dispositivo", dependencies_1.deleteDispositivoController2.run.bind(dependencies_1.deleteDispositivoController2));
exports.default = dispositivolRouter;
