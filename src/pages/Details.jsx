import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useCountries from "../utils/useCountries";

const Details = () => {
  const [countryDetail, setCountryDetail] = useState();
  const [currency, setCurrency] = useState();
  const { id } = useParams();
  const { countryList } = useCountries();

  useEffect(() => {
    setCountryDetail(() =>
      countryList?.find((country) => country.area.toString() === id)
    );
    let curr = countryDetail && countryDetail?.currencies;

    setCurrency(curr && Object.keys(curr).join(""));

    console.log(curr);

    // console.log(countryDetail?.currencies[currency].name);

    console.log("DETAILS", countryDetail, id);
  }, [countryDetail]);

  return (
    <section className="px-4 py-6 lg:px-24">
      <button className="px-10 py-1 my-8 rounded-md shadow-lg">Back</button>
      <div className="flex flex-col justify-between mt-8 md:flex-row md:gap-0 gap-y-8">
        <img
          src={countryDetail?.flags.png}
          alt={countryDetail?.flags.alt}
          className="md:w-[50%] md:h-[20rem]"
        />

        <div className="md:w-[40%] ">
          <h1 className="mb-8 text-2xl font-bold">
            {countryDetail?.name.common}
          </h1>
          <div className="justify-between block mb-4 md:flex gap-x-8">
            <div>
              {/* <p>Native Name:{countryDetail?.nativeName.eng.official}</p> */}
              <p className="mb-2">
                <strong>Population: </strong>
                {countryDetail?.population.toLocaleString().toString()}
              </p>
              <p className="mb-2">
                <strong>Region: </strong>
                {countryDetail?.region}
              </p>
              <p className="mb-2">
                <strong>Sub Region: </strong>
                {countryDetail?.subregion}
              </p>
              <p className="mb-2">
                <strong>Capital: </strong>
                {countryDetail?.capital[0]}
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <p className="mb-2">
                <strong>Top Level Domain: </strong>
                {countryDetail?.tld[0]}
              </p>
              <p className="mb-2">
                <strong>Currencies: </strong>
                {countryDetail?.currencies[currency] &&
                  countryDetail?.currencies[currency].name}
              </p>
              <p className="mb-2">
                <strong>Language: </strong>
                {countryDetail?.languages.eng}
              </p>
            </div>
          </div>

          <div>
            <strong>Border Countries:</strong>
            <div className="flex gap-4">
              {countryDetail?.borders.map((border, id) => {
                return (
                  <div key={id} className="px-6 py-1 shadow-md w-fit">
                    {border}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;