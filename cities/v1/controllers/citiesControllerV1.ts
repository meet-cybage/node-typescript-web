import express from "express"
import { logger } from "../../../main/logging";
import { cityService } from "../services/citiesService";


class CitiesController{

    getCityName(req: express.Request, res: express.Response){
        logger.info("Second winston log")
        res.send(cityService.getCityName(req.params.cityName))
    }

    getCities(req: express.Request, res: express.Response){
        res.send(cityService.getCities())
    }
}

export let citiesControllerV1 =  new CitiesController();
