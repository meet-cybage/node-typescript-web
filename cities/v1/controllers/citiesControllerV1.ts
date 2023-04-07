import express from "express"
import { logger } from "../../../main/logging";
import { CityService } from "../services/citiesService";


class CitiesController{

    cityService: CityService = new CityService()

    async getCityName(req: express.Request, res: express.Response){
        logger.info("Second winston log")
        res.send(await this.cityService.getCityName(req.params.cityName))
    }

    async getCities(req: express.Request, res: express.Response){
        res.send(await this.cityService.getCities())
    }
}

export let citiesControllerV1 =  new CitiesController();
