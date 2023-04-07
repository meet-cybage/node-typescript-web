import { Route, Get, Query, Tags } from "tsoa"
import { CityInterface } from "../interfaces/response-model"

@Tags("City")
@Route("/api/v1")
export class CityService{

    @Get("/city/{city_name}")
    async getCityName(
        // @Query() city_name:string
        city_name:string
    ): Promise<CityInterface>{

        return {
            cityName: city_name
        }
    }

    @Get("/cities")
    async getCities(): Promise<Array<string>>{
        const cities = [
            "Ahmedabad",
            "Gandhinagar"
        ]
        return cities
    }
}
