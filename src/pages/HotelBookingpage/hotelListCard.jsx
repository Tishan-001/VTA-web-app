import React from "react";


import { Link } from "react-router-dom";

import { AiFillStar } from "react-icons/ai";

import { Button, Img, Line, List, Text } from "../../components";



const HotelListCard=({tour})=>{

    const {id,name,photo,pricePerNight,starRating}=tour;
    console.log(photo)
    return(
        <div className="h-[404px] sm:w-[320px] sm:ml-[-30px] relative w-full">
        <Img
          className="h-[404px] m-auto object-cover rounded-[30px] w-full"
          src={photo}
          alt="rectangle173"
        />
        <div className="absolute bg-gray-600_99 bottom-[4%] flex flex-col items-center justify-end right-[5%] p-1.5 rounded-[20px] w-[400px] md:w-[300px] md:right-[2%] h-[90px] md:h-[110px]">
                
                    <div className="flex flex-row items-start justify-between mt-[5px] w-[98%] md:w-[100px]">
                      <div className="flex flex-col items-start gap-[15px] md:gap-[20px] justify-start">
                        <Text className="text-white-A700 text-xl md:ml-[-80px]" size="txtInterSemiBold20">
                        {name}
                        </Text>
                        <Text className="text-white-A700 text-xl md:ml-[-80px] md:w-[300px] md:mb-[8px]" size="txtInterMedium20WhiteA700">
                        ${pricePerNight}
                        </Text>
                      </div>
                      <Button
                        className="absolute hover:bg-[#CAF4FF] hover:text-black-900 cursor-pointer font-bold h-max inset-y-[0] leading-[normal] min-w-[130px] my-auto right-[7%] rounded-[15px] text-center text-1xl mb-[10px]"
                        shape="round"
                       
                      >
                         <Link to ={`/tours/${id}`}>Book Now</Link>
                      </Button>
                    </div>
                  
         
         
         
         
         
         
          

        </div>

       
      </div>
      
    );
};

export default HotelListCard;