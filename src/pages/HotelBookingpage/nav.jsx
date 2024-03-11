import React from "react";

import { Button, Img, Line, List, Text } from "../../components";
const nav=()=>{
    return(

        <div className="flex md:flex md:items-center flex-row md:gap-2 items-center justify-between ml-36 md:ml-[0] w-[87%] ">
               
               
                <div className="bg-gray-700_66_01 0_b5  md:flex-col md:items-center md:text-center  border-2 border-solid flex flex-row items-center justify-between p-[17px] rounded-[30px] w-[67%]  white_A700_black_900_00_border3">
                  <Text
                    className="ml-6 my-[3px] text-center text-white-A700_7f text-xl md:ml-[0] text-cente"
                    size="txtInterBold20WhiteA7007f"
                  >
                    Home
                  </Text>
                  <Text
                    className="ml-6 my-[3px] text-center text-white-A700 text-xl md:ml-[0] text-cente"
                    size="txtInterBold20"
                  >
                    Services
                  </Text>
                  <Text
                    className="my-[3px] text-center text-white-A700_7f text-xl md:ml-[0] ml-6 text-cente"
                    size="txtInterBold20WhiteA7007f"
                  >
                    Gallery
                  </Text>
                  <Text
                    className="ml-6 mr-[30px] my-[3px] text-center text-white-A700_7f text-xl "
                    size="txtInterBold20WhiteA7007f"
                  >
                    About Us
                  </Text>
                </div>
                <Button
                  className="cursor-pointer font-bold leading-[normal] min-w-[134px] rounded-[30px] text-center text-xl"
                  color="white_A700_72"
                  size="lg"
                >
                  LogOut
                </Button>
              </div>





    );
};

export default nav;