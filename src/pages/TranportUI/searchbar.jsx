import React, { useState } from "react";
import { Button, Line, Text } from "../../components";
import './Trancport.css'

const SearchBar = ({ hotelListRef, filterHotelListBylocation }) => {
  const [location, setlocation] = useState("");
  const [bookingStartDate, setbookingStartDate] = useState('');
  const [bookingEndDate, setBookingEndDate] = useState("");
  const [category, setCategory] = useState("");

  const handleDateChange = (e) => {
    setbookingStartDate(e.target.value);
  };

  const handleBookingEndDateChange = (e) => {
    setBookingEndDate(e.target.value);
  };

  const handleSearchNow = () => {
    if (hotelListRef && hotelListRef.current) {
        hotelListRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (location.trim() !== "" || bookingStartDate !== "" || bookingEndDate !== "") {
      filterHotelListBylocation(location, bookingStartDate, bookingEndDate,category); // Call the filter function
    }
  };

  return (
    <div className="bg-gray-700_66_01 absolute right-[15%] md:right-[7%] flex md:flex-col flex-row md:gap-3 items-center justify-start  p-[13px] rounded-[44px]   border-2 border-solid md:w-full  w-[85%] white_A700_black_900_00_border3"   style={{backgroundColor: "rgba(110,106,106,0.5)"}}>

      <input
        type="text"
        className="ml-[20px] md:ml-[0] text-center text-gray-200 text-xl border-none focus:outline-none bg-transparent placeholder-white"
        placeholder="Location"  
        onChange={(e) => setlocation(e.target.value)}
      />

      <Line className="bg-blue-100 ml-5 h-[51px] md:h-px mb-[7px] md:ml-[0] mr-4 rotate-[-0deg] md:w-full w-[2.5px]" />

      <Text
        className="md:ml-[0] ml-4 text-center text-gray-50 text-xl"
        size="txtInterBold20Gray50"
      >
        In:
      </Text>

      <input
        type="date"
        className="ml-[10px] text-gray-200 text-center text-xl border-none focus:outline-none bg-transparent"
        value={bookingStartDate}
        onChange={handleDateChange}
      />

      <Text
        className="md:ml-[0] ml-[10px] text-center text-gray-50 text-xl"
        size="txtInterBold20Gray50"
      >
        out:
      </Text>

      <input
        type="date"
        className="ml-[10px] text-gray-200 text-center text-xl border-none focus:outline-none bg-transparent"
        value={bookingEndDate}
        onChange={handleBookingEndDateChange}
      />

      <Line className="bg-blue-100  h-[51px] md:h-px mb-[7px] ml-[10px] md:ml-[0] rotate-[-0deg] md:w-full w-[2.5px]" />

      <input
        type="text"
        className="ml-[10px] md:ml-[0] text-center text-gray-200 text-xl border-none focus:outline-none bg-transparent placeholder-white"
        placeholder="Category"  
        onChange={(e) => setCategory(e.target.value)}
      />

      <Line className="bg-blue-100  h-[51px] md:h-px mb-[7px] ml-[10px] md:ml-[0] rotate-[-0deg] md:w-full w-[2.5px]" />

      <Button
        className="cursor-pointer font-bold leading-[normal] mb-[5px] min-w-[168px] md:ml-[0] ml-[70px] md:mt-0 mt-[9px] rounded-[15px] text-center text-xl hover:bg-[#A0DEFF] "
        color="white_A700"
        onClick={handleSearchNow}
      >
        Search Now
      </Button>
    </div>
  );
};

export default SearchBar;