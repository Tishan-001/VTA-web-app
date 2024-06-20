import React, { useState } from "react";
import { Button, Img, Line, List, Text } from "../../components";
import './hotel.css'

import { Link } from "react-router-dom";

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


         <div className="bg-gray-700_66_01 flex md:flex-col flex-row md:gap-5  justify-start  ml-[190px] mt-20 sm:mt-20 p-[10px] rounded-[44px] shadow-bs w-[60%]  border-2 border-solid md:w-full sm:ml-[-20px] md:ml-[-30px] xl:ml-[100px] white_A700_black_900_00_border3 ">
                <input
                    type="text"
                    className="ml-20 md:ml-[0] text-center text-gray-200 text-[50px] border-none focus:outline-none bg-transparent placeholder-white"
                    placeholder="wher are you going..."  
                    onChange={(e) => setDestination(e.target.value)}
                />


                <Line className="bg-blue-100 h-[51px] md:h-px mb-[7px] md:ml-[15px] ml-[50px]  rotate-[-0deg] md:w-[90%] w-[2.5px]" />


                 <Button
                        className="cursor-pointer hover:bg-[#A0DEFF]  font-bold leading-[normal] mb-[5px] min-w-[168px] md:ml-[0] ml-[120px]   md:mt-0 mt-[6px] rounded-[15px] text-center text-xl"
                        color="white_A700"
 
                
                 > 

                 <Link to="/locationdetails">Explora Now </Link>
                 </Button>




         </div>





  );
};

export default SearchBar;
