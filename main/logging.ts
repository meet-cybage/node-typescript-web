import winston from "winston"
import * as expressWinston from 'express-winston';


const transports = [new winston.transports.Console()]


const loggerOptions = {
    format: winston.format.combine(
        winston.format.json(),
        winston.format.timestamp({
            format: "MMM-DD-YYYY HH:mm:ss"
        }),
        winston.format.prettyPrint(),
        winston.format.colorize({ all: true })
    ),
    transports: [new winston.transports.Console()],
}

export const logger = winston.createLogger({
    level: "info",
    // statusLevels: true,
    ...loggerOptions,
    ...transports
});


export const expressLogger = expressWinston.logger({
    requestWhitelist: ["body"],
    responseWhitelist: ["body"],
    ...loggerOptions,
    ...transports
})
