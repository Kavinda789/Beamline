import React from "react";
import { assets, Menu } from "../../assets/assets";
import { IoIosInformationCircle, IoMdSearch } from "react-icons/io";
import DarkMode from "./DarkMode";

function Navbar() {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* Header */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={assets.logo} alt="logo" className="w-10 uppercase" />
              Beamline
            </a>
          </div>
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] transition-all duration-300 
                rounded-full border border-gray-300 group-hover:w-[300px] 
                px-2 py-1 focus:outline-none focus:border-1 
                focus:border-primary dark:border-gray-500
                dark:bg-gray-800"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            <button
              onClick={() => {
                alert("not avalable yet");
              }}
            >
              <IoIosInformationCircle className="text-xl drop-shadow-sm text-black cursor-pointer dark:text-white" />
            </button>
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {/* Menu List */}
      <div className="flex justify-center">
        <ul className="flex">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="px-4 text-sm
              hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
