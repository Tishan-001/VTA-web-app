import React, { useState } from "react";
import { Button, Img, Line, List, Text } from "../../components";
import './hotel.css'

const SearchBar = ({ hotelListRef, filterHotelListByDestination }) => {
  const [destination, setDestination] = useState("");
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState("");

  const handleDateChange = (e) => {
    setCheckInDate(e.target.value);
  };

  const handleCheckOutDateChange = (e) => {
    setCheckOutDate(e.target.value);
  };

  const handleSearchNow = () => {
    if (hotelListRef && hotelListRef.current) {
      hotelListRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (destination.trim() !== "" && checkInDate !== "" && checkOutDate !== "") {
      filterHotelListByDestination(destination, checkInDate, checkOutDate); // Call the filter function with all parameters
    }
  };

  return (
    <div className="bg-gray-700_66_01 absolute right-[12%] md:right-[7%] flex md:flex-col flex-row md:gap-5 items-center justify-start p-[13px] rounded-[44px] w-[88%] border-2 border-solid md:w-full white_A700_black_900_00_border3" style={{backgroundColor: "rgba(110,106,106,0.5)"}}>
      <input
        type="text"
        className="ml-2 md:ml-[0] text-center text-gray-200 text-xl border-none focus:outline-none bg-transparent placeholder-white"
        placeholder="where are you going..."  
        onChange={(e) => setDestination(e.target.value)}
      />
      <Line className="bg-blue-100 h-[51px] md:h-px mb-[7px] md:ml-[0] ml-1 rotate-[-0deg] md:w-full w-[2.5px]" />
      <input
        type="date"
        className="ml-2 text-gray-200 text-center text-xl border-none focus:outline-none bg-transparent"
        value={checkInDate}
        onChange={handleDateChange}
      />
      <Text className="md:ml-[0] ml-0 text-center text-gray-50 text-xl" size="txtInterBold20Gray50">
        To
      </Text>
      <input
        type="date"
        className="ml-2 text-gray-200 text-center text-xl border-none focus:outline-none bg-transparent"
        value={checkOutDate}
        onChange={handleCheckOutDateChange}
      />
      <Line className="bg-blue-100 h-[51px] md:h-px mb-[7px] ml-1 md:ml-[0] rotate-[-0deg] md:w-full w-[2.5px]" />
      <Button
        className="cursor-pointer font-bold leading-[normal] mb-[5px] min-w-[168px] md:ml-[0] ml-5 md:mt-0 mt-[9px] rounded-[23px] text-center text-xl"
        color="white_A700"
        onClick={handleSearchNow}
      >
        Search Now
      </Button>
    </div>
  );
};

export default SearchBar;
