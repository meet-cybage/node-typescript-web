import express from "express"
import { CityPostService } from "../services/citiesPostService"; 


class CityPostControllerV1{

    cityPostService: CityPostService = new CityPostService()

    async addCity(req: express.Request, res: express.Response){
        res.status(201)
        res.send(await this.cityPostService.addCityName(req.body))
    }
}

export let cityPostControllerV1 =  new CityPostControllerV1();
