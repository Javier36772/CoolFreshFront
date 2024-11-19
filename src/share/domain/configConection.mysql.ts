import { ConnectionOptions } from "mysql2";
import dotenv from "dotenv"

dotenv.config();

export const configConnection: ConnectionOptions = {
    host: process.env.HOST,
    user: process.env.USERDB,
    password: process.env.PASSWORDDB,
    database: process.env.DATABASE,

};