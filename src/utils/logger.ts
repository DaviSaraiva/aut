import { json } from 'body-parser';
import { createLogger, debug, format, info, transport, transports } from 'winston';
const winston = require('winston');
const logger = winston.createLogger({
    format: format.combine(format.simple(),
        format.colorize(),
        format.timestamp(),
        format.printf((info: { timestamp: any; level: any; message: any; }) => ` As ${info.timestamp} ${info.level} ${info.message}`)
    ),

    transports: [
        new transports.File({
            maxsize: 5120000,
            maxFiles: 5,
            filename: `${__dirname}/../logs/log-api-log`
        }),
        new transports.Console({
            level: 'info'
        }),

    ],
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    verbose: 4,
    debug: 5,
    silly: 6
});



export default logger;

//logger.info('Servidor rodadndo na porta 5555');
// logger.info('alone or in pairs,');
// logger.info('and over your neighbors dog?');
// logger.warn('Whats great for a snack,');
// logger.info('And fits on your back?');
// logger.error('Its log, log, log');
// logger.info.timestamp;

// import { createLogger, debug, format, info, transport, transports } from 'winston';

// module.exports= createLogger({
//     format: format.combine(format.json(),
//     format.timestamp(),
//     format.printf(info=> `[${info.ti mestamp}] [${info.level}] [${info.message}]`),
//     ),
//     transports:[
//         new transports.File({
//             maxsize: 5120000,
//             maxFiles: 5,
//             filename: `${__dirname}/../logs/log-api-log`
//         }),
//         new transports.Console({
//             level:'debug',
//         })
//     ]
// })

// // module.exports= createLogger({
// //     format: format.combine(format.json(),
// //     format.timestamp(),
// //     format.printf(rotas=> `[${rotas.timestamp}] [${rotas.level}] [${rotas.message}]`),
// //     ),
// //     transports:[
// //         new transports.File({
// //             maxsize: 5120000,
// //             maxFiles: 5,
// //             filename: `${__dirname}/../logs/rotas-api-log`
// //         }),
// //         new transports.Console({
// //             level:'debug',
// //         })
// //     ]
// // })