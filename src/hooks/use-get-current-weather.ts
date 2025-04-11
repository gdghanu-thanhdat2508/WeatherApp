import { weatherAPI } from "@/api/getWeather";
import { coordinate } from "@/types/weather.interface";
import { useQuery } from "@tanstack/react-query";

const queryCurrentWeather = (coord : coordinate) => {
  return useQuery({
    queryKey: ["currWeather", coord.lat, coord.lon],
    queryFn: () => weatherAPI.getCurrentWeather(coord),
    retry: 3,
    enabled : (!!coord.lat && !!coord.lon)
  });
};


export const useQueryWeather = {
    queryCurrentWeather
}