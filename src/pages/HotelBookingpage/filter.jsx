import React from "react";

import { Button, Img, Line, List, Text } from "../../components";

const filter =({ onRoomTypeChange, onRoomFacilityChange, onPriceRangeChange,onHotelCategoryChange })=>{


  const handleRoomTypeChange = (event) => {
    const { name, checked } = event.target;
    onRoomTypeChange(name, checked);
  };

  const handleRoomFacilityChange = (event) => {
    const { name, checked } = event.target;
    onRoomFacilityChange(name, checked);
  };

  const handlePriceRangeChange = (event) => {
    const { name, checked } = event.target;
    onPriceRangeChange(name, checked);
  };

  const handleHotelCategoryChange = (event) => {
    const { name, checked } = event.target;
    onHotelCategoryChange(name, checked);
  };

    return(


        <div className="flex flex-col items-end justify-start w-auto sm:w-full">


                
        <div className="border border-black-900 border-solid flex flex-col items-start justify-end p-[23px] sm:px-5 rounded-[30px] w-full">
          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[21px] mt-3 w-[74%] md:w-full">
            <div className="flex flex-col items-start justify-start w-[98%] md:w-full">
              <Text
                className="md:ml-[0] ml-[3px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                size="txtInterBold25Black900"
              >
                Filter by:
              </Text>


              
              <Text
                className="md:ml-[0] ml-[3px] mt-[43px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                size="txtInterBold25Black900"
              >
               Room Type
              </Text>




              <div className="flex flex-row gap-[13px] items-start justify-start mt-[23px] w-[74%] md:w-full">
              <input type="checkbox" name="single" onChange={handleRoomTypeChange} className="border border-gray-400 border-solid h-[29px] rounded-[5px] w-[29px]" />
               
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                  size="txtInterMedium25Black900"
                >
                  Single
                </Text>
              </div>

              
              <div className="flex flex-row gap-[13px] items-start justify-start mt-[15px] w-[79%] md:w-full">
              <input type="checkbox" name="double" onChange={handleRoomTypeChange} className="border border-gray-400 border-solid h-[29px] rounded-[5px] w-[29px]" />
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                  size="txtInterMedium25Black900"
                >
                  Double
                </Text>
              </div>
              <div className="flex flex-row gap-[13px] items-center justify-start mt-3.5 w-[87%] md:w-full">
              <input type="checkbox" name="suite" onChange={handleRoomTypeChange} className="border border-gray-400 border-solid h-[29px] rounded-[5px] w-[29px]" />
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                  size="txtInterMedium25Black900"
                >
                  Suite
                </Text>
              </div>
              <div className="flex flex-row gap-[13px] items-start justify-start mt-[17px] w-[76%] md:w-full">
              <input type="checkbox" name="Deluxe Room" onChange={handleRoomTypeChange} className="border border-gray-400 border-solid h-[29px] rounded-[5px] w-[29px]" />
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                  size="txtInterMedium25Black900"
                >
                  Deluxe 
                </Text>
              </div>

              <Text
                className="md:ml-[0] ml-[3px] mt-[33px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                size="txtInterBold25Black900"
              >
                Hotel catagory
              </Text>



             


              <div className="flex flex-row gap-[13px] items-center justify-start mt-3.5 w-[90%] md:w-full">
              <input type="checkbox" name="3 Star" onChange={handleHotelCategoryChange} className="border border-gray-400 border-solid h-[29px] rounded-[5px] w-[29px]" />
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                  size="txtInterMedium25Black900"
                >
                  3 Star
                </Text>
              </div>


              <div className="flex flex-row gap-[13px] items-center justify-start mt-[17px] w-[90%] md:w-full">
              <input type="checkbox" name="4 Star" onChange={handleHotelCategoryChange} className="border border-gray-400 border-solid h-[29px] rounded-[5px] w-[29px]" />
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                  size="txtInterMedium25Black900"
                >
                 4 Star
                </Text>
              </div>


              <div className="flex flex-row gap-[13px] items-center justify-start mt-4 w-3/4 md:w-full">
              <input type="checkbox" name="5 Star" onChange={handleHotelCategoryChange} className="border border-gray-400 border-solid h-[29px] rounded-[5px] w-[29px]" />
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                  size="txtInterMedium25Black900"
                >
                5 Star
                </Text>
              </div>



              <Text
                className="md:ml-[0] ml-[3px] mt-[33px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                size="txtInterBold25Black900"
              >
               Room Facilities
              </Text>


              
              <div className="flex flex-row gap-[13px] items-start justify-start mt-6 w-[49%] md:w-full">
              <input type="checkbox" name="Wifi" onChange={handleRoomFacilityChange} className="border border-gray-400 border-solid h-[29px] rounded-[5px] w-[29px]" />
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                  size="txtInterMedium25Black900"
                >
                  Wifi
                </Text>
              </div>


              <div className="flex flex-row gap-[13px] items-center justify-start mt-3.5 w-[90%] md:w-full">
              <input type="checkbox" name="Hot Water" onChange={handleRoomFacilityChange} className="border border-gray-400 border-solid h-[29px] rounded-[5px] w-[29px]" />
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                  size="txtInterMedium25Black900"
                >
                  Hot Water
                </Text>
              </div>


              <div className="flex flex-row gap-[13px] items-center justify-start mt-[17px] w-[100%] md:w-full">
              <input type="checkbox" name="Beautifull View" onChange={handleRoomFacilityChange} className="border border-gray-400 border-solid h-[29px] rounded-[5px] w-[29px]" />
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                  size="txtInterMedium25Black900"
                >
                  Beautifull View
                </Text>
              </div>

            
           
              <Text
                className="md:ml-[0] ml-[3px] mt-[38px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-full"
                size="txtInterBold25Black900"
              >
                 Price Range
              </Text>


              <div className="flex flex-row gap-[13px] items-center justify-start mt-[21px] w-[90%] md:w-full">
              <input type="checkbox" name="above100" onChange={handlePriceRangeChange} className="border border-gray-400 border-solid h-[29px] rounded-[5px] w-[29px]" />
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                  size="txtInterMedium25Black900"
                >
                  Above 100
                </Text>
              </div>

              <div className="flex flex-row gap-[13px] items-center justify-start mt-[17px] w-[90%] md:w-full">
              <input type="checkbox" name="below100" onChange={handlePriceRangeChange} className="border border-gray-400 border-solid h-[29px] rounded-[5px] w-[29px]" />
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                  size="txtInterMedium25Black900"
                >
                  Below 100
                </Text>
              </div>

              

            </div>

            
            


            <div className="flex flex-col gap-[13px] items-center justify-start mt-[18px] w-[71%] md:w-full">
              



              
            </div>
          </div>
        </div>

     </div>





    );
};

export default filter;