import { RxMagnifyingGlass } from "react-icons/rx";
import useCountries from "../utils/useCountries";
import Filter from "../components/Filter";
import CountryCard from "../components/CountryCard";
import { FaSpinner } from "react-icons/fa6";
import { useEffect, useState } from "react";

const Home = () => {
  const { countryList, loading } = useCountries();
  const [selectedContinent, setSelectedContinent] =
    useState("Filter by Region");
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState();

  useEffect(() => {
    setCountries(countryList);
  }, [countryList]);

  useEffect(() => {
    setCountries(
      countryList?.filter((country) => country.region === selectedContinent)
    );
    console.log("FILTERED", countries);
  }, [selectedContinent]);

  const onSearchCountry = (e) => {
    setSearchCountry(e.target.value);
    setCountries(
      countryList?.filter((country) =>
        country.name.common.toLowerCase().includes(searchCountry.toLowerCase())
      )
    );
    console.log(countries);
  };

  return (
    <main className="px-4 py-12 lg:px-12 bg-bgLight ">
      <section className="flex flex-col justify-between gap-8 lg:flex-row">
        <div className="relative border rounded-md">
          <input
            className="lg:w-[24rem] w-full p-3 rounded-md shadow-md px-10"
            placeholder="Search for a country..."
            onChange={onSearchCountry}
          />
          <RxMagnifyingGlass
            size={24}
            className="absolute border-red-400 inset-x-2 inset-y-1/4"
          />
        </div>
        <Filter
          selectedContinent={selectedContinent}
          setSelectedContinent={setSelectedContinent}
        />
      </section>

      <section className="flex flex-wrap justify-center py-8 mt-6 md:justify-start md:gap-x-8 gap-y-16">
        {!loading && countries?.length < 1 && <p>No result to Display...</p>}
        {countries?.map((country, id) => (
          <CountryCard key={id} country={country} />
        ))}
        {loading && (
          <div className="grid w-full py-1 place-items-center">
            <FaSpinner size={24} className="transition animate-spin" />
          </div>
        )}
      </section>
    </main>
  );
};

export default Home;
