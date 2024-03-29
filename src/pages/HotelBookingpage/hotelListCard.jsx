import React from "react";


import { Link } from "react-router-dom";

import { AiFillStar } from "react-icons/ai";

import { Button, Img, Line, List, Text } from "../../components";



const HotelListCard=({tour})=>{


    const {id,Name,photo,price,Rate}=tour;

    

    return(



        <div className="h-[404px] relative w-full">
        <Img
          className="h-[404px] m-auto object-cover rounded-[30px] w-full"
          src={photo}
          alt="rectangle173"
        />
        <div className="absolute bg-gray-600_99 bottom-[6%] flex flex-col items-center justify-end left-[5%] p-1.5 rounded-[20px] w-[50%]">
          <div className="flex flex-row gap-[7px] items-center justify-start w-[93%] md:w-full">
            <div className="flex flex-col gap-[25px] items-start justify-start">
              <Text
                className="text-white-A700 text-xl"
                size="txtInterSemiBold20"
              >
                {Name}
              </Text>
              <Text
                className="text-white-A700 text-xl"
                size="txtInterMedium20WhiteA700"
              >
                ${price}
              </Text>
            </div>
            
            <Button className="cursor-pointer font-light leading-[normal] min-w-[130px] my-[13px] rounded-[23px] text-center text-xl">
              <Link to ={`/tours/${id}`}>Book Now</Link>
            </Button>
          </div>

        </div>

        <div className="absolute bg-gray-700_66 flex flex-row gap-2.5 items-center justify-center p-[5px] right-[3%] rounded-[18px] top-[5%] w-[22%]">
                  

                    <span className="flex">
            
                        <AiFillStar className="fill-yellow-400" />
             
                     </span>
                  <Text
                    className="mr-4 text-white-A700_01 text-xl"
                    size="txtInterMedium20WhiteA70001"
                  >
                    {Rate}
                  </Text>
         </div>






       

      </div>







       
    );
};

export default HotelListCard;