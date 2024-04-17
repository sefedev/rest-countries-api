import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
  // console.log("from card", country.area);
  return (
    <Link
      to={`${country.area}`}
      className="w-[80%] rounded-md dark:bg-elDark shadow-md md:w-56 hover:scale-95 transition duration-150 ease-in"
    >
      <div className=" h-36">
        <img src={country.flags.png} className=" size-full" />
      </div>
      <div className="p-6 text-left">
        <h3 className="mb-4 font-semibold">{country.name.common}</h3>
        <p className="text-sm mb-0.5">
          Population: {country.population.toLocaleString()}
        </p>
        <p className="text-sm mb-0.5">Region: {country.region}</p>
        <p className="text-sm mb-0.5">Capital: {country.capital}</p>
      </div>
    </Link>
  );
};

export default CountryCard;
