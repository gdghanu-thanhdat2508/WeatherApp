import { useContextWeather } from "@/context/weather-context";

export const DetailInformation = () => {
  const IWeatherData = useContextWeather();
  if (!IWeatherData) return <div>LOADING... SKIBIDI</div>;

  return (
    <div className="grid grid-cols-2 gap-10">
      <div className="flex justify-between border-b-1 pb-3">
        <div>Wind Speed</div>
        <div>{IWeatherData.wind.speed} M/c</div>
      </div>

      <div className="flex justify-between border-b-1 pb-3">
        <div>Wind Deg</div>
        <div>{IWeatherData.wind.deg}</div>
      </div>

      <div className="flex justify-between border-b-1 pb-3">
        <div>Wind Gust</div>
        <div>{IWeatherData.wind.gust} M/c</div>
      </div>

      <div className="flex justify-between border-b-1 pb-3">
        <div>Pressure</div>
        <div>{IWeatherData.main.pressure} hPa</div>
      </div>

      <div className="flex justify-between border-b-1 pb-3">
        <div>Humidity</div>
        <div>{IWeatherData.main.humidity}%</div>
      </div>

      <div className="flex justify-between border-b-1 pb-3">
        <div>Sea Level</div>
        <div>{IWeatherData.main.sea_level}%</div>
      </div>

      <div className="flex justify-between border-b-1 pb-3">
        <div>Precipitation probability</div>
        <div>{IWeatherData.main.sea_level}%</div>
      </div>
    </div>
  );
};
