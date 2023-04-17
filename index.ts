import express from 'express';
import { expressLogger } from './main/logging';
import { Routes } from './main/routes';
import { SwaggerConfig } from './main/swagger';
import { PassportConfiguration } from './main/passport-authentication';
 
// Initialize the express engine
const app: express.Application = express();
app.use(express.json())
app.use(express.static(__dirname + '/public'));
app.use(expressLogger)
 
// Take a port 3000 for running server.
const port: number = 3000;

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

app.listen(port, () => {
    console.log(`TypeScript with Express
         http://localhost:${port}/`);
});
