import React, { useState } from "react";
import { Button, Img, Line, List, Text } from "../../components";
import './Tourguider.css'


const SearchBar = ({ hotelListRef, filterHotelListByDestination }) => {
  const [destination, setDestination] = useState("");
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate,setCheakOutDate]=useState("");

  const handleDateChange = (e) => {
    setCheckInDate(e.target.value);
  };

  const handleCheakOutDateChange = (e) => {
    setCheakOutDate(e.target.value);
  };

  const handleSearchNow = () => {
    if (hotelListRef && hotelListRef.current) {
        hotelListRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (destination.trim() !== "") {
      filterHotelListByDestination(destination); // Call the filter function
    }
};

  return (
    <div className="bg-gray-700_66_01 absolute ml-[100px]  md:right-[7%] flex md:flex-col flex-row md:gap-5 items-center justify-start  p-[13px] rounded-[44px] w-[75%]  border-2 border-solid md:w-full white_A700_black_900_00_border3"   style={{backgroundColor: "rgba(110,106,106,0.5)"}}>

      <input
        type="text"
        className="ml-1 md:ml-[0] text-center text-gray-200 text-xl border-none focus:outline-none bg-transparent placeholder-white"
        placeholder="Location"  
        onChange={(e) => setDestination(e.target.value)}
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
        className="ml-2 text-gray-200 text-center text-xl border-none focus:outline-none bg-transparent"
        value={checkInDate}
        onChange={handleDateChange}
      />


      <Text
        className="md:ml-[0] ml-4 text-center text-gray-50 text-xl"
        size="txtInterBold20Gray50"
      >
        out:
      </Text>


      <input
        type="date"
        className="ml-2 text-gray-200 text-center text-xl border-none focus:outline-none bg-transparent"
        value={checkOutDate}
        onChange={handleCheakOutDateChange}
      />


      <Line className="bg-blue-100  h-[51px] md:h-px mb-[7px] ml-[50px] md:ml-[0] rotate-[-0deg] md:w-full w-[2.5px]" />


      <button
        className="cursor-pointer font-bold leading-[normal] mb-[5px] min-w-[168px] md:ml-[0] h-[40px] bg-white-A700  ml-[100px] md:mt-0 mt-[9px] rounded-[30px] text-center text-xl hover:bg-[#A0DEFF] "
        color="white_A700"

         onClick={handleSearchNow}
      >
        Search Now
      </button>
    </div>
  );
};

export default SearchBar;
