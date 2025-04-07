export type coord = {
    lat : number,
    lon: number
}

type MainWeatherData = {
    temp : number,
    feels_like : number,
    temp_min : number,
    temp_max : number,
    pressure : number, 
    sea_level : number ,
    grnd_level : number, 
    humidity : number, 
    temp_kf: number
}

type WeatherDetail = {
    id: number, 
    main : string,
    description: string, 
    icon : string
}

type WindDetail = {
    speed : number, 
    deg : number,
    gust : number
}

type CityDetail = {
    id : string,
    name : string, 
    coord : coord,
    country : string,
    population : string,
    timezone : string,
    sunrise : string,
    sunset : string
}

export interface IForcastData {
    list : Array<{
        dt : number,
        main : MainWeatherData,
        weather : WeatherDetail[],
        wind : WindDetail,
        visibility : number,
        pop : number,
        dt_txt : number
    }>,
    city : CityDetail,

}