import ky from "ky";
import { API_CONFIG } from "./config";
import { coordinate, IWeatherData } from "@/types/weather.interface";

const getCurrentWeather = async ({
  lat,
  lon,
}: coordinate): Promise<IWeatherData> => {
  const data = await ky
    .get(
      `${API_CONFIG.BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_CONFIG.API_KEY}`
    )
    .json<IWeatherData>();
  return data;
};

export const weatherAPI = {
  getCurrentWeather,
};
