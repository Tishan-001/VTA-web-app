import React from "react";


import { Link } from "react-router-dom";

import { AiFillStar } from "react-icons/ai";

import { Button, Img, Line, List, Text } from "../../components";



const HotelListCard=({tour})=>{


    const {id,Name,photo,price,Rate}=tour;

    

    return(




<div className="h-[500px] relative rounded-[20px] shadow-bs w-full">
<Img
  className="h-[500px] m-auto object-cover rounded-[20px] w-full"
  src={photo}
  alt="FiftyTwo"
/>
<div className="absolute flex flex-col md:gap-10 gap-[352px] h-max inset-[0] justify-center m-auto w-[93%]">
  <div className="bg-gray-700_66_01 flex flex-row gap-2.5 items-center justify-end md:ml-[0] ml-[245px] mr-2 p-[5px] rounded-[18px] w-[29%] md:w-full">
    <Img
      className="h-[21px] w-[22px]"
      src="images/img_star6.svg"
      alt="starSix"
    />
    <Text
      className="mr-4 text-white-A700_01 text-xl"
      size="txtInterMedium20WhiteA70001"
    >
      {Rate}
    </Text>
  </div>
  <div className="bg-gray-600_99 flex flex-col items-center justify-end p-3.5 rounded-[20px] w-full">
    <div className="flex flex-row items-start justify-between mt-[5px] w-[94%] md:w-full">
      <div className="flex flex-col items-start justify-start">
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
          $150
        </Text>
      </div>
      <Button
        className="cursor-pointer font-light leading-[normal] mb-[5px] min-w-[130px] text-center text-xl"
        shape="round"
      >
        Book Now
      </Button>
    </div>
  </div>
</div>
</div>





       
    );
};

export default HotelListCard;



























<div className="h-[500px] relative rounded-[20px] shadow-bs w-full">
<Img
  className="h-[500px] m-auto object-cover rounded-[20px] w-full"
  src="images/img_52_t.png"
  alt="FiftyTwo"
/>
<div className="absolute flex flex-col md:gap-10 gap-[352px] h-max inset-[0] justify-center m-auto w-[93%]">
  <div className="bg-gray-700_66_01 flex flex-row gap-2.5 items-center justify-end md:ml-[0] ml-[245px] mr-2 p-[5px] rounded-[18px] w-[29%] md:w-full">
    <Img
      className="h-[21px] w-[22px]"
      src="images/img_star6.svg"
      alt="starSix"
    />
    <Text
      className="mr-4 text-white-A700_01 text-xl"
      size="txtInterMedium20WhiteA70001"
    >
      4.9
    </Text>
  </div>
  <div className="bg-gray-600_99 flex flex-col items-center justify-end p-3.5 rounded-[20px] w-full">
    <div className="flex flex-row items-start justify-between mt-[5px] w-[94%] md:w-full">
      <div className="flex flex-col items-start justify-start">
        <Text
          className="text-white-A700 text-xl"
          size="txtInterSemiBold20"
        >
          James Petter
        </Text>
        <Text
          className="text-white-A700 text-xl"
          size="txtInterMedium20WhiteA700"
        >
          $150
        </Text>
      </div>
      <Button
        className="cursor-pointer font-light leading-[normal] mb-[5px] min-w-[130px] text-center text-xl"
        shape="round"
      >
        Book Now
      </Button>
    </div>
  </div>
</div>
</div>