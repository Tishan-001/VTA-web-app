import React from "react";
import { Img } from "..";
import { Heading } from "components/Heading1";

export default function Header({ ...props }) {
  return (
    <header {...props}>
      
      <div className="flex sm:flex-col items-center w-full gap-5 p-5 mx-auto  bg-white-A700 flex-1 max-w-[100%] ">
        <div className="flex justify-center w-[65%] p-[5px] h-[80px]">
          <div className="flex flex-col items-center">
            <Heading size="4xl" as="h1">
              VTA
            </Heading>
            <Heading size="s" as="p" className="mt-[-5px] !text-black-900_99">
              Virtual Travel Assistance
            </Heading>
          </div>
        </div>
        <Heading size="2xl" as="h4" className="w-[30%]">
          Tour Package
        </Heading>
        <div className="flex items-center w-[50%] sm:w-full mr-[3px] gap-10 md:mr-0 ml-[49%]">
          <Heading size="2xl" as="h4" className="w-[300px]" >
            Nuwani Thushari
          </Heading>
          <Img src="images/img_image_75.png" alt="imageseventyfiv" className="h-[55px] w-[56px] rounded-[50%] ml-[-50px] mr-10" />
        </div>
      </div>
      

    </header>
  );
}
