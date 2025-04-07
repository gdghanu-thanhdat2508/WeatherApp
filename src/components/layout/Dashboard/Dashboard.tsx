import { Weather } from "../../Weather";
import { Location } from "../../Location";
import { DetailInformation } from "../../DetailInformation";
import { TimeZone } from "../../TimeZone";
import { WeatherDataProvider } from "@/Context/weather-context";
import { ForcastDataProvider } from "@/Context/forcast-context";
import { Forcast } from "@/components/Forcast";
import { SearchBox } from "@/components/SearchBox";
import { WeatherCoordProvider } from "@/Context/city-context";

export const Dashboard = () => {
  // const coord = { lat: 21.0245, lon: 105.8412 };
  // const weatherQuery = useQueryWeather.queryCurrentWeather(coord);

  return (
    <WeatherCoordProvider>
      <ForcastDataProvider>
        <WeatherDataProvider>
          <div className="w-full py-[10%] flex flex-col justify-center items-center">
            <div className="w-[808px] flex item-start mb-10">
              <SearchBox />
            </div>
            <div className="w-[808px] h-fit border p-10 border-[#E4E4E7] rounded-[6px]">
              <div className="flex justify-between">
                <Location />
                <TimeZone />
              </div>
              <div className="mb-10">
                <Weather />
              </div>
              <DetailInformation />
            </div>
            <div>
              <Forcast />
            </div>
          </div>
        </WeatherDataProvider>
      </ForcastDataProvider>
    </WeatherCoordProvider>
  );
};
