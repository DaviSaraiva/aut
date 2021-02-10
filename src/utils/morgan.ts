import morganBody = require('morgan-body');
import fs = require('fs');
import path = require('path');

const log = fs.createWriteStream(
    path.join(__dirname, "./logs", "express.log")
);

morganBody(app, {
    noColors:true
})