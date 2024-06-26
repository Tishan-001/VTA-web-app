import React from "react";
import { Button, Img, Text } from "components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const VehicleCard = ({ vehicle}) => {
  const navigate = useNavigate();
  return (
    <div className="h-[450px] sm:h-[400px] sm:w-full sm:ml-[-10px] relative rounded-[20px] shadow-bs w-full md:w-[90%]">
      <Img
        className="h-[450px] sm:h-[400px] sm:w-full m-auto object-cover rounded-[20px] w-full"
        src={vehicle.photo}
        alt="Vehicle"
      />
      <div className="absolute flex flex-col md:gap-[252px] gap-[290px] h-max mt-[10px] inset-[0] justify-center m-auto w-[93%] :w-[] ">
        <div className="bg-gray-700_66_01 flex flex-row gap-2.5 sm:w-[30%]  sm:ml-[10px] items-center justify-end md:ml-[0] ml-[200px] mr-2 p-[5px] rounded-[18px] w-[29%] md:w-[29%]">
          {/* <Img
            className="h-[21px] w-[22px]"
            src="images/img_star6_9.svg"
            alt="starSix"
          />
          <Text
            className="mr-4 text-white-A700_01 text-xl"
            size="txtInterMedium20WhiteA70001"
          >
            {vehicle.ratings}
          </Text> */}
        </div>
        <div className="bg-gray-600_99 flex flex-col items-center justify-end p-3.5 rounded-[20px] w-full">
          <div className="flex flex-row items-start justify-between mt-[5px] w-[94%] md:w-full">
            <div className="flex flex-col items-start justify-start">
              <Text className="text-white-A700 text-xl" size="txtInterSemiBold20">
                {vehicle.type}
              </Text>
              <Text className="text-white-A700 text-xl" size="txtInterMedium20WhiteA700">
                ${vehicle.price}
              </Text>
            </div>
            <Button
              className="absolute hover:bg-[#CAF4FF] hover:text-black-900 cursor-pointer font-bold h-max inset-y-[0] leading-[normal] min-w-[130px] my-auto right-[7%] rounded-[15px] text-center text-1xl mb-[5px]"
              shape="round" onClick={()=>{navigate("/taxidetil",{ state: {vehicle: vehicle}})}}
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
