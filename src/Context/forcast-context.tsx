import { useQueryForeCast } from "@/hooks/getForcast";
import { IForcastData } from "@/types/forcast.interface";
import React from "react";
import { useCoordContext } from "./city-context";

interface Props {
  children: React.ReactNode;
}

const ForecastContext = React.createContext<IForcastData | null>(null);

export const ForcastDataProvider = ({ children }: Props) => {
  const { coord } = useCoordContext();
  const weatherQuery = useQueryForeCast.queryGetForecast(coord);
  return (
    <ForecastContext.Provider value={weatherQuery.data || null}>
      {children}
    </ForecastContext.Provider>
  );
};

export const useContextForcast = () => {
  const forcastContext = React.useContext(ForecastContext);

  return forcastContext;
};
