import React, { useState } from "react";
import { Button, Img, Line, List, Text } from "../../components";
import './Tourguider.css'


const SearchBar = ({ hotelListRef, filterHotelListByDestination }) => {
  const [destination, setDestination] = useState("");
  const [checkInDate, setCheckInDate] = useState('');
  

  const handleDateChange = (e) => {
    setCheckInDate(e.target.value);
  };

 

  

  return (
    <div className="bg-gray-700_66_01 absolute right-[12%] mr-[130px] md:mr-[20px] md:right-[7%] flex md:flex-col flex-row md:gap-5 items-center justify-start  p-[13px] rounded-[44px] w-[75%]  border-2 border-solid md:w-full white_A700_black_900_00_border3"   style={{backgroundColor: "rgba(110,106,106,0.5)"}}>

      <input
        type="text"
        className="ml-1 md:ml-[0] text-center text-gray-200 text-xl border-none focus:outline-none bg-transparent placeholder-white"
        placeholder="Location"  
        onChange={(e) => setDestination(e.target.value)}
      />


      <Line className="bg-blue-100 h-[51px] md:h-px mb-[7px] md:ml-[0] mr-4 rotate-[-0deg] md:w-full w-[2.5px] ml-[50px]" />

      <Text
        className="md:ml-[0] ml-20 text-center text-gray-50 text-xl"
        size="txtInterBold20Gray50"
      >
        Date:
      </Text>


      <input
        type="date"
        className="ml-2 text-gray-200 text-center text-xl border-none focus:outline-none bg-transparent"
        value={checkInDate}
        onChange={handleDateChange}
      />


     


      <Line className="bg-blue-100 h-[51px] md:h-px mb-[7px] ml-[90px] md:ml-[0] rotate-[-0deg] md:w-full w-[2.5px]" />


      <Button
         className="cursor-pointer hover:bg-[#A0DEFF]  font-bold leading-[normal] mb-[5px] min-w-[168px] md:ml-[0] ml-[120px]   md:mt-0 mt-[6px] rounded-[15px] text-center text-xl"

         color="white_A700"

         
      >
        Search Now
      </Button>
    </div>
  );
};

export default SearchBar;