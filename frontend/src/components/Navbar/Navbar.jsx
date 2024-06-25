import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const menuLinks = [
  {
    id: 1,
    link: "/#",
    name: "Home",
  },
  {
    id: 2,
    link: "/#shop",
    name: "Shop",
  },
  {
    id: 3,
    link: "/#about",
    name: "About",
  },
  {
    id: 4,
    link: "/#blog",
    title: "Blogs",
  },
];

const dropdownLinks = [
  {
    id: 1,
    link: "#",
    name: "Trending Products",
  },
  {
    id: 2,
    link: "#",
    name: "Best Selling",
  },
  {
    id: 3,
    link: "#",
    name: "Top Rated",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white ">
        <div className="py-4">
          <div className="container flex justify-between pl-4 pr-4">
            {/* Logo and Links sectiion */}
            <div className=" flex items-center gap-4">
              <a
                href="#"
                className=" text-primary font-semibold tracking-widest 
              text-2xl uppercase sm:text-3xl"
              >
                Eshop
              </a>
              {/* Menu Items */}
              <div className=" hidden lg:block">
                <ul className=" flex items-center gap-4">
                  {menuLinks.map((item, index) => (
                    <li key={index}>
                      <a
                        className=" inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                        href={item.link}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                  {/* Drop-down */}
                  <li className=" ml-[-25px] relative cursor-pointer group">
                    <a
                      href="#"
                      className="flex items-center gap-[2px] font-semibold
                     text-gray-500 dark:hover:text-white py-2"
                    >
                      Quick Links
                      <span>
                        <FaCaretDown className="group-hover:rotate-180 duration-300" />
                      </span>
                    </a>

                    {/* Drop-down list */}
                    <div
                      className=" absolute z-[9999] hidden group-hover:block w-[200px]
                            rounded-md bg-white shadow-md dark:bg-gray-900 p-2 text-black dark:text-white"
                    >
                      <ul className="space-y-2">
                        {dropdownLinks.map((item, index) => (
                          <li key={index}>
                            <a
                              href={item.link}
                              className="text-gray-500 hover:text-black dark:hover:text-white
                        duration-200 w-full p-2 inline-block  hover:bg-primary/20 font-semibold"
                            >
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Navbar right section */}
            <div className="flex justify-between items-center gap-4">
              {/* Search Bar section */}
              <div className="relative group hidden sm:block">
                <input
                  type="text"
                  placeholder="Search"
                  className="search-bar"
                />
                <IoMdSearch
                  className=" text-xl text-gray-600 group-hover:text-primary cursor-pointer dark:text-gray-400 
              absolute top-1/2 -translate-y-1/2 right-3 duration-200"
                />
              </div>
              <button className=" relative p-3" onClick={handleOrderPopup}>
                <FaCartShopping className=" text-xl text-gray-600 dark:text-gray-400" />
                <div
                  className="w-4 h-4 bg-red-500 text-white rounded-full absolute
              top-0 right-0 flex items-center justify-center text-xs"
                >
                  4
                </div>
              </button>
              {/* Darkmode section */}
              <div>
                <DarkMode />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div>Hero section</div> */}
      <div></div>
    </>
  );
};

export default Navbar;
