import React from "react";

import { Button, Img, Line, List, Text } from "../../components";

const filter =()=>{

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
                Popular filters
              </Text>




              <div className="flex flex-row gap-[13px] items-start justify-start mt-[23px] w-[74%] md:w-full">
              <input type="checkbox" className="border border-gray-400 border-solid h-[29px] rounded-[5px] w-[29px]" />
               
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                  size="txtInterMedium25Black900"
                >
                  Family rooms
                </Text>
              </div>

              
              <div className="flex flex-row gap-[13px] items-start justify-start mt-[15px] w-[79%] md:w-full">
              <input type="checkbox" className="border border-gray-400 border-solid h-[29px] rounded-[5px] w-[29px]" />
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                  size="txtInterMedium25Black900"
                >
                  Split Old Town
                </Text>
              </div>
              <div className="flex flex-row gap-[13px] items-center justify-start mt-3.5 w-[87%] md:w-full">
              <input type="checkbox" className="border border-gray-400 border-solid h-[29px] rounded-[5px] w-[29px]" />
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                  size="txtInterMedium25Black900"
                >
                  Pool with a view
                </Text>
              </div>
              <div className="flex flex-row gap-[13px] items-start justify-start mt-[17px] w-[76%] md:w-full">
              <input type="checkbox" className="border border-gray-400 border-solid h-[29px] rounded-[5px] w-[29px]" />
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                  size="txtInterMedium25Black900"
                >
                  Couple rooms
                </Text>
              </div>







              <Text
                className="md:ml-[0] ml-[3px] mt-[33px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                size="txtInterBold25Black900"
              >
                Facilities
              </Text>



              <div className="flex flex-row gap-[13px] items-start justify-start mt-6 w-[49%] md:w-full">
              <input type="checkbox" className="border border-gray-400 border-solid h-[29px] rounded-[5px] w-[29px]" />
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                  size="txtInterMedium25Black900"
                >
                  Parking
                </Text>
              </div>


              <div className="flex flex-row gap-[13px] items-center justify-start mt-3.5 w-[57%] md:w-full">
              <input type="checkbox" className="border border-gray-400 border-solid h-[29px] rounded-[5px] w-[29px]" />
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                  size="txtInterMedium25Black900"
                >
                  Free WiFi
                </Text>
              </div>


              <div className="flex flex-row gap-[13px] items-center justify-start mt-[17px] w-[64%] md:w-full">
              <input type="checkbox" className="border border-gray-400 border-solid h-[29px] rounded-[5px] w-[29px]" />
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                  size="txtInterMedium25Black900"
                >
                  Restaurant
                </Text>
              </div>


              <div className="flex flex-row gap-[13px] items-center justify-start mt-4 w-3/4 md:w-full">
              <input type="checkbox" className="border border-gray-400 border-solid h-[29px] rounded-[5px] w-[29px]" />
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                  size="txtInterMedium25Black900"
                >
                  Room service
                </Text>
              </div>



              <Text
                className="md:ml-[0] ml-[3px] mt-[33px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                size="txtInterBold25Black900"
              >
                Property Type
              </Text>


              
              <div className="flex flex-row gap-[13px] items-start justify-start mt-6 w-[49%] md:w-full">
              <input type="checkbox" className="border border-gray-400 border-solid h-[29px] rounded-[5px] w-[29px]" />
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                  size="txtInterMedium25Black900"
                >
                  Apartment
                </Text>
              </div>


              <div className="flex flex-row gap-[13px] items-center justify-start mt-3.5 w-[57%] md:w-full">
              <input type="checkbox" className="border border-gray-400 border-solid h-[29px] rounded-[5px] w-[29px]" />
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                  size="txtInterMedium25Black900"
                >
                  Hotels
                </Text>
              </div>


              <div className="flex flex-row gap-[13px] items-center justify-start mt-[17px] w-[64%] md:w-full">
              <input type="checkbox" className="border border-gray-400 border-solid h-[29px] rounded-[5px] w-[29px]" />
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                  size="txtInterMedium25Black900"
                >
                  Villas
                </Text>
              </div>


             



             















             
            
           
              <Text
                className="md:ml-[0] ml-[3px] mt-[38px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                size="txtInterBold25Black900"
              >
                Rates
              </Text>


              <div className="flex flex-row gap-[13px] items-center justify-start mt-[21px] w-[41%] md:w-full">
              <input type="checkbox" className="border border-gray-400 border-solid h-[29px] rounded-[5px] w-[29px]" />
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                  size="txtInterMedium25Black900"
                >
                  1 Star
                </Text>
              </div>

              <div className="flex flex-row gap-[13px] items-center justify-start mt-[17px] w-[47%] md:w-full">
              <input type="checkbox" className="border border-gray-400 border-solid h-[29px] rounded-[5px] w-[29px]" />
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                  size="txtInterMedium25Black900"
                >
                  2 Stars
                </Text>
              </div>

              <div className="flex flex-row gap-[13px] items-center justify-start mt-[17px] w-[47%] md:w-full">
              <input type="checkbox" className="border border-gray-400 border-solid h-[29px] rounded-[5px] w-[29px]" />
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                  size="txtInterMedium25Black900"
                >
                  3 Stars
                </Text>
              </div>

              <div className="flex flex-row gap-[13px] items-center justify-start mt-[17px] w-[47%] md:w-full">
              <input type="checkbox" className="border border-gray-400 border-solid h-[29px] rounded-[5px] w-[29px]" />
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                  size="txtInterMedium25Black900"
                >
                  4 Stars
                </Text>
              </div>


              <div className="flex flex-row gap-[13px] items-center justify-start mt-[18px] w-[51%] md:w-full">
              <input type="checkbox" className="border border-gray-400 border-solid h-[29px] rounded-[5px] w-[29px]" />
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                  size="txtInterMedium25Black900"
                >
                  Unrated
                </Text>
              </div>


              <Text
                className="md:ml-[0] ml-[3px] mt-[23px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                size="txtInterBold25Black900"
              >
                Room facilities
              </Text>


              <div className="flex flex-row gap-[13px] items-start justify-start mt-6 w-[68%] md:w-full">
              <input type="checkbox" className="border border-gray-400 border-solid h-[29px] rounded-[5px] w-[29px]" />
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                  size="txtInterMedium25Black900"
                >
                  Private pool
                </Text>
              </div>


              <div className="flex flex-row gap-[13px] items-start justify-start mt-[15px] w-[85%] md:w-full">
              <input type="checkbox" className="border border-gray-400 border-solid h-[29px] rounded-[5px] w-[29px]" />
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                  size="txtInterMedium25Black900"
                >
                  Air conditioning
                </Text>
              </div>


              <div className="flex flex-row gap-[13px] items-center justify-start mt-3.5 w-[91%] md:w-full">
              <input type="checkbox" className="border border-gray-400 border-solid h-[29px] rounded-[5px] w-[29px]" />
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                  size="txtInterMedium25Black900"
                >
                  Private bathroom
                </Text>
              </div>


              <div className="flex flex-row gap-[13px] items-start justify-start mt-[17px] w-1/2 md:w-full">
              <input type="checkbox" className="border border-gray-400 border-solid h-[29px] rounded-[5px] w-[29px]" />
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                  size="txtInterMedium25Black900"
                >
                  Balcony
                </Text>
              </div>


              <div className="flex flex-row gap-[13px] items-center justify-start mt-[15px] w-[55%] md:w-full">
              <input type="checkbox" className="border border-gray-400 border-solid h-[29px] rounded-[5px] w-[29px]" />
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                  size="txtInterMedium25Black900"
                >
                  Sea view
                </Text>
              </div>
            </div>

            
            <Text
              className="mt-[26px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
              size="txtInterBold25Black900"
            >
              Price Range
            </Text>



            <div className="flex flex-col gap-[13px] items-center justify-start mt-[18px] w-[71%] md:w-full">
              <div className="flex flex-row gap-[35px] items-start justify-between w-full">
                <Text
                  className="mt-[3px] sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                  size="txtInterMedium25Black900"
                >
                  Max
                </Text>


                <input type="text" className="border border-blue_gray-100 border-solid h-[29px] rounded-[10px] w-[57%]"></input>
              </div>



              <div className="flex flex-row items-start justify-between w-full">
                <Text
                  className="mt-1 sm:text-[21px] md:text-[23px] text-[25px] text-black-900 w-auto"
                  size="txtInterMedium25Black900"
                >
                  Min
                </Text>

                <input type="text" className="border border-blue_gray-100 border-solid h-[29px] rounded-[10px] w-[57%]"></input>
     
              </div>
            </div>
          </div>
        </div>

     </div>





    );
};

export default filter;