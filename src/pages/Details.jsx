import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useCountries from "../utils/useCountries";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { countryList } = useCountries();

  const countryDetail = countryList?.find(
    (country) => country.area.toString() === id
  );

  let curr = countryDetail && countryDetail?.currencies;

  const currency = curr && Object.keys(curr).join("");

  const border = countryDetail?.borders
    ?.map((cntry) => {
      return countryList?.filter((country) => country?.fifa === cntry);
    })
    .map((obj) => obj[0])
    ?.map((objName) => objName?.name?.common);

  return (
    <section className="min-h-screen px-4 py-6 lg:px-24 dark:bg-bgDark dark:text-white">
      <button
        className="px-10 py-1 my-8 rounded-md shadow-md dark:shadow-black dark:bg-elDark"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
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
            <div className="flex flex-wrap gap-4 pt-4">
              {border?.map((bd, id) => {
                if (bd === undefined) return null;
                // countryList.filter((country) => {
                //   country?.name.common === bd;
                //   console.log(country);
                // });

                return (
                  <Link
                    key={id}
                    className="px-6 py-1 shadow-md w-fit dark:bg-elDark"
                    // to={`${}`}
                  >
                    {bd}
                  </Link>
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
