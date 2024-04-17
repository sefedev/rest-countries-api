import { Menu, Transition } from "@headlessui/react";
import { RxCaretUp, RxCaretDown } from "react-icons/rx";
import { FaSpinner } from "react-icons/fa6";
import { Fragment } from "react";
import useCountries from "../utils/useCountries";

const Filter = ({ selectedContinent, setSelectedContinent }) => {
  const { continent, loading } = useCountries();
  return (
    <Menu as="div" className="relative inline-block w-48 text-left">
      {({ open }) => (
        <>
          <Menu.Button className="inline-flex items-center justify-around gap-x-1.5 p-3 w-full rounded-md ring-1 ring-gray-300 bg-white dark:bg-elDark shadow-md">
            {selectedContinent}
            {open ? <RxCaretUp /> : <RxCaretDown />}
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-elDark">
              <div className="flex flex-col py-2">
                {continent?.map((cont, id) => (
                  <Menu.Item key={id}>
                    {({ active }) => (
                      <a
                        className={`${
                          active && "bg-gray-300"
                        } px-4 py-1.5 cursor-pointer text-sm`}
                        onClick={() => setSelectedContinent(cont)}
                      >
                        {cont}
                      </a>
                    )}
                  </Menu.Item>
                ))}
                {loading && (
                  <div className="grid w-full py-1 place-items-center">
                    <FaSpinner className="transition animate-spin" />
                  </div>
                )}
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export default Filter;
