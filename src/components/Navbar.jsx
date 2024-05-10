import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineDown } from 'react-icons/ai';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);
  const [showServices, setShowServices] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Toggle function to handle showing/hiding the services dropdown
  const toggleServices = () => {
    setShowServices(!showServices);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home', link: '/' }, // Add Link to Home
    { id: 2, text: 'Services', hasDropdown: true, dropdownItems: [ 'Tour Guide', 'Transport','Hotel Reservation','Health care', 'Travel plan'] },


    { id: 3, text: 'Gallery',link:'/location' },
    { id: 4, text: 'About us' },
    { id: 5, text: 'Sign in',link:'/sinin'  },
    { id: 6, text: 'Sign Up',link:'/sinup' },
  ];

  return (
    <div className='bg-black flex justify-between items-center h-24 max-w-[1150px] mx-auto px-5 text-white'>
      {/* Logo */}
      <img className="h-20 w-20 ml-[-150px] md:ml-[40px]" src="images/img_image_75.png" alt="" />

      {/* Desktop Navigation */}
      <ul className='flex mr-[-230px] md:hidden'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 ml-[10px] text-[20px] hover:bg-[#A0DEFF] rounded-xl h-[60px] m-2 cursor-pointer duration-300 hover:text-black hover:text-1xl hover:text-black-900_01 relative z-50'
            onClick={() => item.hasDropdown && toggleServices()}
          >
            {item.link ? ( // Check if item has a link
              <Link to={item.link}>{item.text}</Link> // Render Link if available
            ) : (
              item.text // Otherwise just render the text
            )}
            {item.hasDropdown && <AiOutlineDown size={10} />}
            {item.hasDropdown && showServices && (
              <ul className="absolute left-1 top-full mt-1 bg-white-A700 border border-gray-600 rounded-lg z-50">
                {item.dropdownItems.map((dropdownItem, index) => (
                  <li key={index} className="px-6 py-2 hover:bg-[#A0DEFF] hover:text-black cursor-pointer">
                    {dropdownItem}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className=' md:mr-10 hidden md:flex'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed left-0 top-0 w-[60%] h-[600px] border rounded-[15px] border-gray-900 bg-white-A700 ease-in-out duration-500 z-50'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <img className="h-20 w-20 ml-[-100px] md:ml-[40px]" src="images/img_image_75.png" alt="" />

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className=' p-4 border-b rounded-xl hover:bg-[#A0DEFF] duration-300 hover:text-black cursor-pointer border-gray-600 relative'
            onClick={() => item.hasDropdown && toggleServices()}
          >
            {item.link ? ( // Check if item has a link
              <Link to={item.link}>{item.text}</Link> // Render Link if available
            ) : (
              item.text // Otherwise just render the text
            )}
            {item.hasDropdown && <AiOutlineDown size={20} />}
            {item.hasDropdown && showServices && (
              <ul className="mt-[20px] bg-white-A700 border border-gray-600 rounded-lg z-50 ">
                {item.dropdownItems.map((dropdownItem, index) => (
                  <li key={index} className="px-4 py-2 hover:bg-[#A0DEFF] hover:text-black cursor-pointer">
                    {dropdownItem}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
