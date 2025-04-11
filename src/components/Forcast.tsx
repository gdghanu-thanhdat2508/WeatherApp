import { useContextForcast } from "@/context/forcast-context";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { API_CONFIG } from "@/api/config";

export const Forcast = () => {
  const forCastData = useContextForcast();
  if (!forCastData) return <div>LOADING... SKIBIDI</div>;

  const listForcast = forCastData.list;
  return (
    <div className="border border-[#E4E4E7] p-13 rounded-[6px] mt-10">
      <div className="text-[20px] font-[400] mb-10">
        Forecast for the next 5 Day / 3 Hour
      </div>
      <div className="flex gap-2">
        <div>{forCastData.city.name}</div>
        <div>{forCastData.city.country}</div>
      </div>
      <div className="">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-[700px]"
        >
          <CarouselContent>
            {listForcast.map((item) => {
              const weatherIcon = item.weather[0]?.icon;
              const iconUrl = `${API_CONFIG.iconUrl}/${weatherIcon}.png`;
              return (
                <>
                  <CarouselItem
                    key={item.pop}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="w-fit">
                      <div className="flex justify-center items-center">
                        <img
                          src={iconUrl}
                          className="w-[59px] h-[59px]"
                          alt={item.weather[0]?.description}
                        />
                        <div>
                          {Math.round((item?.main.temp - 273.15) * 10) / 10}°C
                        </div>
                      </div>
                      <div className="font-[300] text-[20px]">{item.dt_txt}</div>
                    </div>
                  </CarouselItem>
                </>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};
