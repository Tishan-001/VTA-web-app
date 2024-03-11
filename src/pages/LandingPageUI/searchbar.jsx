import React, { useState } from "react";
import { Button, Img, Line, List, Text } from "../../components";
import './hotel.css'


const SearchBar = ({ hotelListRef, filterHotelListByDestination }) => {
  const [destination, setDestination] = useState("");
 

  

  const handleSearchNow = () => {
   
    if (destination.trim() !== "") {
      filterHotelListByDestination(destination); // Call the filter function
    }
};

  return (
    /*<div className="bg-gray-700_66_01 flex mt-8 ml-5 mr-5  md:flex-col flex-row md:gap-5 items-center justify-start  p-[13px] rounded-[44px] w-[50%]  border-2 border-solid md:w-full white_A700_black_900_00_border3"   style={{backgroundColor: "rgba(110,106,106,0.5)"}}>

      <input
        type="text"
        className="ml-2 md:ml-[0] text-center text-gray-200 text-xl border-none focus:outline-none bg-transparent placeholder-white"
        placeholder="wher are you going..."  
        onChange={(e) => setDestination(e.target.value)}
      />


      <Line className="bg-blue-100 h-[51px] md:h-px mb-[7px] md:ml-[0] ml-1 rotate-[-0deg] md:w-full w-[2.5px]" />




      



      <Button
        className="cursor-pointer font-bold leading-[normal] mb-[5px] min-w-[168px] md:ml-[0] ml-5 md:mt-0 mt-[9px] rounded-[23px] text-center text-xl"
        color="white_A700"

         onClick={handleSearchNow}
      >
        Search Now
      </Button>
    </div>*/


         <div className="bg-gray-700_66_01 flex md:flex-col flex-row md:gap-5  justify-start mr-10 mt-8 p-[10px] rounded-[44px] shadow-bs w-[88%]  border-2 border-solid md:w-full white_A700_black_900_00_border3 ">
                <input
                    type="text"
                    className="ml-20 md:ml-[0] text-center text-gray-200 text-xl border-none focus:outline-none bg-transparent placeholder-white"
                    placeholder="wher are you going..."  
                    onChange={(e) => setDestination(e.target.value)}
                />
                <Line className="bg-blue-100 h-[51px] md:h-px mb-[7px] md:ml-[0] ml-20   rotate-[-0deg] md:w-full w-[2.5px]" />

                 <Button
                        className="cursor-pointer font-bold leading-[normal] mb-[5px] min-w-[168px] md:ml-[0] ml-40  md:mt-0 mt-[6px] rounded-[23px] text-center text-xl"
                        color="white_A700"
 
                 onClick={handleSearchNow}
                 >   Explora Now </Button>
        </div>





  );
};

export default SearchBar;
