class CityService{

    getCityName(cityName:string){
        const city: object = {"cityName": cityName}
        return city
    }

    getCities(){
        const cities = [
            "Ahmedabad",
            "Gandhinagar"
        ]
        return cities
    }
}

export let cityService = new CityService();
