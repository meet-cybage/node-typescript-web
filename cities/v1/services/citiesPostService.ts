class CityPostService{

    addCityName(cityName: string){
        const city = {"cityName": cityName}
        return city
    }

}

export let cityPostService = new CityPostService();
