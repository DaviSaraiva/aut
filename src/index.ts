import './config/env';
import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import routes from './routes';
//import logger from './utils/logger';
const morganBody = require('morgan-body');
const fs = require('fs');
const path = require('path');
const moment= require('moment');
const app = express()

createConnection()


const log = fs.createWriteStream(
    path.join(__dirname, "./logs", `express${moment().format('YYYY-MM-DD')}.log`), {flags: "a"}
);

morganBody(app, {
    noColors:true,
    stream: log
})

app.use(express.json())
app.use(routes)
app.listen(5555, () => console.log('Servidor rodando na porta 5555'))