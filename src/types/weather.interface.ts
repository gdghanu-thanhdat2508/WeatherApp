export type coordinate = {
  lat: number;
  lon: number;
};

export type weatherCondition = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type informationWeather = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
};

export type windInformation = {
  speed: number;
  deg: number;
  gust: number;
};

export interface IWeatherData {
  coord: coordinate;
  setCoord: (coord: { lat: number; lon: number }) => void;
  weather: weatherCondition[];
  base: string;
  main: informationWeather;
  visibility: number;
  wind: windInformation;
  sys: {
    type : number,
    id: number,
    sunrise: number;
    sunset: number;
    country: string;
  };
  timezone : string;
  name: string;
//   dt: number;
}
