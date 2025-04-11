import { useContextWeather } from "@/context/weather-context";


export const TimeZone = () => {
  const WeatherData = useContextWeather();
  if (!WeatherData) return <div>LOADING... SKIBIDI</div>;

  const hours = Math.floor(Number(WeatherData.timezone) / 3600);
  const sign = hours >= 0 ? "+" : "-";
  return (
    <div className="flex justify-center items-center">
        <div className="text-[20px] font-[400]">UTC {sign}{hours}</div>
    </div>
  );
};
