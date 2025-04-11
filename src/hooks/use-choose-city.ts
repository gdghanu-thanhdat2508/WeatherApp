import { cityAPI } from "@/api/getCity";
import { ICity } from "@/types/city.interface";
import { useQuery } from "@tanstack/react-query";

const queryCity = (cityName: string, limit: number) => {
  return useQuery<ICity[], Error>({
    queryKey: ["cityQuery", cityName],
    queryFn: () => cityAPI.getCity(cityName, limit),
    enabled: cityName.length >= 3 && !!cityName,
  });
};

export const useQueryCity = {
    queryCity,
};
