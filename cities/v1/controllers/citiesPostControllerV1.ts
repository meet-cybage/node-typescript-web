import express from "express"
import { cityPostService } from "../services/citiesPostService"; 


class CityPostControllerV1{

    addCity(req: express.Request, res: express.Response){
        res.status(201)
        res.send(cityPostService.addCityName(req.body.city))
    }
}

export let cityPostControllerV1 =  new CityPostControllerV1();
