import express from "express"
import { cityPostControllerV1 } from "./controllers/citiesPostControllerV1"
import { citiesControllerV1 } from "./controllers/citiesControllerV1"


export let cityRoutesV1 = express.Router()

cityRoutesV1.get("/v1/city/:cityName", citiesControllerV1.getCityName.bind(citiesControllerV1))
cityRoutesV1.get("/v1/cities", citiesControllerV1.getCities.bind(citiesControllerV1))
cityRoutesV1.post("/v1/city", cityPostControllerV1.addCity.bind(cityPostControllerV1))
