import { foreCastAPI } from "@/api/getForecast";
import { coordinate } from "@/types/weather.interface";
import { useQuery } from "@tanstack/react-query";

const queryGetForecast = (coord : coordinate) => {
  return useQuery({
    queryKey: ["forcastWeather", coord.lat, coord.lon],
    queryFn: () => foreCastAPI.getForcast(coord),
    retry: 3,
    enabled : !!coord.lat && !!coord.lon
  });
};


export const useQueryForeCast = {
    queryGetForecast
}