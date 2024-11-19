"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const mysql2_1 = require("mysql2");
const configConection_mysql_1 = require("../domain/configConection.mysql");
const dbConnection = (0, mysql2_1.createConnection)(configConection_mysql_1.configConnection);
exports.db = dbConnection.promise();
