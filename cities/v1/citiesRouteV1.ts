import express from "express"
import { cityPostControllerV1 } from "./controllers/citiesPostControllerV1"
import { citiesControllerV1 } from "./controllers/citiesControllerV1"


export let cityRoutesV1 = express.Router()

cityRoutesV1.get("/city/:cityName", citiesControllerV1.getCityName.bind(citiesControllerV1))
cityRoutesV1.get("/cities", citiesControllerV1.getCities.bind(citiesControllerV1))
cityRoutesV1.post("/city", cityPostControllerV1.addCity.bind(cityPostControllerV1))
