import { useState } from "react";
import { useQueryCity } from "@/hooks/use-choose-city";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCoordContext } from "@/context/city-context";
import { ICity } from "@/types/city.interface";

export const SearchBox = () => {
  const [city, setCity] = useState("");
  const [searchKey, setSearchKey] = useState("");

  const {mutate, isPending} = useQueryCity.mutateCity();
  const { setCoord } = useCoordContext();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (city) {
      // setSearchKey(city);
      mutate({cityName : city, limit : 1}, {
        onSuccess : (data : ICity[]) => {
          const lat = data && data[0] ? data[0].lat : null;
          const lon = data && data[0] ? data[0].lon : null;
          setCoord({ lat: Number(lat), lon: Number(lon)});
        }
      })
    }
  };

  const { data, isLoading } = useQueryCity.queryCity(searchKey, 1);

  // console.log(data);
  // const { setCoord } = useCoordContext();
  // useEffect(() => {
  //   if (data && Array.isArray(data) && data.length > 0) {
  //     setCoord({ lat: Number(lat), lon: Number(lon)});
  //   }
  // }, [data]);

  return (
    <>
      <div>
        <form onSubmit={handleSearch} className="flex w-full gap-2">
          <Input
            placeholder="Tìm cái gì ??"
            value={city}
            onChange={handleInputChange}
          />
          <Button type="submit">Search</Button>
        </form>

        {isPending && <p>Đang tìm kiếm...</p>}
      </div>
    </>
  );
};
