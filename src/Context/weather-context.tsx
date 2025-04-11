import { useQueryWeather } from "@/hooks/use-get-current-weather";
import { IWeatherData } from "@/types/weather.interface";
import React from "react";
import { useCoordContext } from "./city-context";

interface Props {
  children: React.ReactNode;
}

const WeatherContext = React.createContext<IWeatherData | null>(null);

export const WeatherDataProvider = ({ children }: Props) => {
  const { coord } = useCoordContext();
  const weatherQuery = useQueryWeather.queryCurrentWeather(coord);
  return (
    <WeatherContext.Provider value={weatherQuery.data || null}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useContextWeather = () => {
  const weatherContext = React.useContext(WeatherContext);

  return weatherContext;
};
