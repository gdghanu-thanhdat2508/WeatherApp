import { cityAPI } from "@/api/getCity";
import { ICity } from "@/types/city.interface";
import { useMutation, useQuery } from "@tanstack/react-query";

const queryCity = (cityName: string, limit: number) => {
  return useQuery<ICity[], Error>({
    queryKey: ["cityQuery", cityName],
    queryFn: () => cityAPI.getCity(cityName, limit),
    enabled: cityName.length >= 3 && !!cityName,
  });
};

const mutateCity = () => {
  return useMutation<ICity[], Error, { cityName: string; limit: number }>({
    mutationFn: ({ cityName, limit }) => cityAPI.getCity(cityName, limit),
  });
};

export const useQueryCity = {
    queryCity,
    mutateCity
};
