import express from 'express';
import { expressLogger } from './logging';
import { Routes } from './routes';
import { SwaggerConfig } from './swagger';
import { PassportConfiguration } from './passport-authentication';
 
// Initialize the express engine
const app: express.Application = express();
app.use(express.json())
app.use(express.static(__dirname + '/public'));

if (process.env.NODE_ENV !== 'test'){
    app.use(expressLogger)
}

const api: express.Application = express()
app.use("/api", api)

// Swagger
let swagger: SwaggerConfig = new SwaggerConfig(app)
swagger.SwaggerConfiguration()

// let passportConfig: PassportConfiguration = new PassportConfiguration(api)
// passportConfig.configure()

// Handling '/' Request
let routes: Routes = new Routes(api);
routes.configureRoutes()

export default app;


// npx ts-jest config:init
// npx tsc --init
// npm init