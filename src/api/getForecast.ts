import ky from "ky";
import { API_CONFIG } from "./config";
import { coord, IForcastData } from "@/types/forcast.interface";

const getForcast = async ({
  lat,
  lon,
}: coord): Promise<IForcastData> => {
  const data = await ky
    .get(
      `${API_CONFIG.BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_CONFIG.API_KEY}`
    )
    .json<IForcastData>();
  return data;
};

export const foreCastAPI = {
    getForcast,
};
