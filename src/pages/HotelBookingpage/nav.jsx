import React, { useState } from "react";

const Nav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex md:flex md:items-center flex-row md:gap-2 items-center justify-between ml-36 md:ml-[0] w-[87%]">
      <div className="bg-gray-700_66_01 0_b5  md:flex-col md:items-center md:text-center  border-2 border-solid flex flex-row items-center justify-between p-[17px] rounded-[30px] w-[67%]  white_A700_black_900_00_border3">
        <a
          href="/signup"
          className="ml-6 my-[3px] text-center text-white-A700_7f text-xl md:ml-[0] "
          size="txtInterBold20WhiteA7007f"
        >
          Home
        </a>
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="px-4 py-2 text-whit rounded-md focus:outline-none"
          >
            Services
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-black-900 rounded-md shadow-lg">
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Service 1
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Service 2
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Service 3
              </a>
            </div>
          )}
        </div>
        <a
          href="#"
          className="my-[3px] text-center text-white-A700_7f text-xl md:ml-[0] ml-6"
          size="txtInterBold20WhiteA7007f"
        >
          Gallery
        </a>
        <a
          href="#"
          className="ml-6 mr-[30px] my-[3px] text-center text-white-A700_7f text-xl "
          size="txtInterBold20WhiteA7007f"
        >
          About Us
        </a>
      </div>
      <button
        className="cursor-pointer font-bold leading-[normal] min-w-[134px] rounded-[30px] text-center text-xl"
        color="white_A700_72"
        size="lg"
      >
        LogOut
      </button>
    </div>
  );
};

export default Nav;
