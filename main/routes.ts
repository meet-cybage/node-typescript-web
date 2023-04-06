import express from "express"
import { userRoutesV1 } from "../users/v1/userRoutesV1"
import { userRoutesV2 } from "../users/v2/userRoutesV2";
import { cityRoutesV1 } from "../cities/v1/citiesRouteV1";


export class Routes{
    app: express.Application;

    constructor(app: express.Application){
      // TODO document why this constructor is empty
    
        this.app = app
    }

    configureRoutes(){
        // 
        this.app.use("/api", userRoutesV1)
        this.app.use("/api", userRoutesV2)
        this.app.use("/api", cityRoutesV1)
    }
}
