import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import { COUNTRIESAPI } from "./constant";

const useCountries = () => {
  const [countryList, setCountryList] = useState([]);
  const [continent, setContinent] = useState([]);

  const { data, error, loading } = useFetch(COUNTRIESAPI);

  useEffect(() => {
    setCountryList(
      data &&
        data
          .map((countries) => countries)
          .sort((country1, country2) =>
            country1.name.common.localeCompare(country2.name.common)
          )
    );

    setContinent(
      data &&
        data
          .map(({ region }) => region)
          .filter((continent, id, self) => self.indexOf(continent) === id)
      //   .filter((continent) => continent != "Europe, Asia")
    );
  }, [data]);

  return { countryList, continent, loading };
};

export default useCountries;
