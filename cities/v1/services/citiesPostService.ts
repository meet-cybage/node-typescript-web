import { Route, Post, Body, Tags } from "tsoa"
import { CityInterface } from "../interfaces/response-model"
import { CityCreateRequest } from "../interfaces/request-model"

@Route("/api/v1")
@Tags("City")
export class CityPostService{

    @Post("/city")
    async addCityName(@Body() body: CityCreateRequest): Promise<CityInterface>{
        const city = {"cityName": body.cityName}
        return city
    }

}
