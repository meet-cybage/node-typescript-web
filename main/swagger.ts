import express from "express"
import bodyParser from 'body-parser';
import swaggerUi from "swagger-ui-express"
import { RegisterRoutes } from "../swagger/routes";
import * as swaggerDocument from "../swagger/swagger.json"

// let swaggerDocument =  require("../dist/swagger.json")


export class SwaggerConfig{

    app: express.Application

    constructor(app: express.Application){
        this.app = app
    }

    SwaggerConfiguration(){
        this.app.use(bodyParser.json())
        // This will register generated routes
        RegisterRoutes(this.app);
        // Provide generated swagger.json as input to swagger UI.
        this.app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocument))
    }
}