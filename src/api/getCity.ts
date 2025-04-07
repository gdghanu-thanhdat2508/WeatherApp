import ky from "ky";
import { API_CONFIG } from "./config";
import { ICity } from "@/types/city.interface";

const getCity = async (cityName : string, limit : number): Promise<ICity[]> => {
  const data = await ky
    .get(
      `${API_CONFIG.CITY_URL}?q=${cityName}&limit=${limit}&appid=${API_CONFIG.API_KEY}`
    )
    .json<ICity[]>();
  return data;
};

export const cityAPI = {
    getCity,
};
