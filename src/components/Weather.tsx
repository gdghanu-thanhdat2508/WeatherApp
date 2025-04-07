import { API_CONFIG } from "@/api/config";
import { useContextWeather } from "@/Context/weather-context";

export const Weather = () => {
  const WeatherData = useContextWeather();

  const weatherIcon = WeatherData?.weather?.[0]?.icon;
  const iconUrl = `${API_CONFIG.iconUrl}/${weatherIcon}.png`;
  if (!WeatherData) return <div>LOADING... SKIBIDI</div>;
  const description = WeatherData?.weather?.[0]?.description;
  const mainDes = WeatherData?.weather?.[0]?.main;
  const sign = WeatherData?.main.temp >= 0 ? "+" : "-";
  return (
    <div className="flex flex-col">
      <div className="flex gap-4 items-center">
        <div className="text-[48px] font-[400]">
          <div className="flex justify-center items-center text-center">
            {sign} {Math.round((WeatherData?.main.temp - 273.15) * 100) / 100}{" "}
            &deg;
          </div>
        </div>
        <img src={iconUrl} className="w-[100px] h-[100px]" />
      </div>
      <div>
        <div className="text-[16px] font-[400] uppercase">{description}</div>
        <div className="text-[16px] font-[400] uppercase">{mainDes}</div>
      </div>
    </div>
  );
};
