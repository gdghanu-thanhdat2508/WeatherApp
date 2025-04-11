import { useContextWeather } from "@/context/weather-context";

export const Location = () => {
  const WeatherData = useContextWeather();
  if (!WeatherData) return <div>LOADING... SKIBIDI</div>
  
  return (
    <div>
      <div className="text-[24px] font-[600]">{WeatherData.name}</div>
      {WeatherData.base}
    </div>
  );
};
