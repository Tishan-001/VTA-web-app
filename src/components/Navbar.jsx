import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineDown } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is signed in by looking for the token in local storage
    const token = localStorage.getItem('token');
    setIsSignedIn(!!token);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  const toggleServices = () => {
    setShowServices(!showServices);
  };

  const handleSignOut = () => {
    localStorage.removeItem('token');
    setIsSignedIn(false);
    navigate('/');
  };

  const navItems = [
    { id: 1, text: 'Home', link: '/' },
    {
      id: 2,
      text: 'Services',
      hasDropdown: true,
      dropdownItems: [
        { text: 'Tour Guide', link: '/tourguidersui' },
        { text: 'Transport', link: '/tranportui' },
        { text: 'Hotel Reservation', link: '/hotelbookingpage' },
        { text: 'Health care', link: '/medical' },
        { text: 'Travel plan', link: '/allpackagespageui' }
      ]
    },
    { id: 3, text: 'Gallery', link: '/location' },
    { id: 4, text: 'About us', link: '/aboutus' },
    ...(!isSignedIn
      ? [
          { id: 5, text: 'Sign in', link: '/login' },
          { id: 6, text: 'Sign Up', link: '/signup' },
        ]
      : [{ id: 7, text: 'Sign out', link: '/tourguidersui', onClick: handleSignOut }]),

      { id: 1, text: 'Offer Services', link: '/chooseserviceproviders' }


  ];

  return (
    <div className='bg-black flex justify-between items-center h-24 max-w-[1110px] mx-auto px-5 text-white'>
      <a href="/">
        <div>
          <h1 className="text-4xl font-bold ml-[-110%]">VTA</h1>
          <h1 className="ml-[-140%] mt-[5px]">Viertual Travel Assistance</h1>
        </div>
      </a>
      <ul className='flex mr-[-25%] md:hidden'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 ml-[10px] text-[20px] hover:bg-[#A0DEFF] rounded-xl h-[60px] m-2 cursor-pointer duration-300 hover:text-black hover:text-1xl hover:text-black-900_01 relative z-50'
            onClick={() => item.hasDropdown && toggleServices()}
          >
            {item.link ? (
              item.onClick ? (
                <button onClick={item.onClick}>{item.text}</button>
              ) : (
                <Link to={item.link}>{item.text}</Link>
              )
            ) : (
              item.text
            )}
            {item.hasDropdown && showServices && <AiOutlineDown size={10} />}
            {item.hasDropdown && showServices && (
              <ul className="absolute left-1 top-full mt-1 bg-white-A700 border border-gray-600 rounded-lg z-50">
                {item.dropdownItems.map((dropdownItem, index) => (
                  <li key={index} className="px-6 py-2 hover:bg-[#A0DEFF] hover:text-black cursor-pointer">
                    <Link to={dropdownItem.link}>{dropdownItem.text}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <div onClick={handleNav} className=' md:mr-10 hidden md:flex'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? 'fixed left-0 top-[24px] w-[60%] h-[600px] border rounded-[15px] border-gray-900 bg-white-A700 ease-in-out duration-500 z-50'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {navItems.map(item => (
          <li
            key={item.id}
            className=' p-4 border-b rounded-xl hover:bg-[#A0DEFF] duration-300 hover:text-black cursor-pointer border-gray-600 relative'
            onClick={() => item.hasDropdown && toggleServices()}
          >
            {item.link ? (
              item.onClick ? (
                <button onClick={item.onClick}>{item.text}</button>
              ) : (
                <Link to={item.link}>{item.text}</Link>
              )
            ) : (
              item.text
            )}
            {item.hasDropdown && showServices && <AiOutlineDown size={20} />}
            {item.hasDropdown && showServices && (
              <ul className="mt-[20px] bg-white-A700 border border-gray-600 rounded-lg z-50 ">
                {item.dropdownItems.map((dropdownItem, index) => (
                  <li key={index} className="px-4 py-2 hover:bg-[#A0DEFF] hover:text-black cursor-pointer">
                    <Link to={dropdownItem.link}>{dropdownItem.text}</Link>
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
