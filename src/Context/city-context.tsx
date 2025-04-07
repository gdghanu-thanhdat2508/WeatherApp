import React, { createContext, useContext, useState } from "react";

interface Coordinate {
  lat: number;
  lon: number;
}

interface CoordContextType {
  coord: Coordinate;
  setCoord: (coord: Coordinate) => void;
}

const CoordContext = createContext<CoordContextType | undefined>(undefined);

export const WeatherCoordProvider = ({ children }: { children: React.ReactNode }) => {
  const [coord, setCoord] = useState<Coordinate>({ lat: 21.0245, lon: 105.8412 });

  return (
    <CoordContext.Provider value={{ coord, setCoord }}>
      {children}
    </CoordContext.Provider>
  );
};

export const useCoordContext = () => {
  const context = useContext(CoordContext);
  if (!context) throw new Error("CoordContext must be used inside WeatherCoordProvider");
  return context;
};
