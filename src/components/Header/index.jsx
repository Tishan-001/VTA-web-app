import React from "react";
import { Img } from "./..";
import { Heading } from "components/Heading1";

export default function Header({ ...props }) {
  return (
    <header {...props}>
      <div className="flex sm:flex-col self-end justify-between items-center w-full mt-1 gap-5 mx-auto md:p-5 max-w-[991px]">
        <Heading size="2xl" as="h4">
          Dashboard
        </Heading>
        <div className="flex justify-between items-center w-[45%] sm:w-full gap-5 ">
          <Heading size="xl1" as="h5" className=" ">
          Virtual Travel Assistance
          </Heading>
          <Img src="images/img_image_75.png" alt="imageseventyfiv" className="h-[55px] w-[56px] rounded-[50%]" />
        </div>
      </div>
    </header>
  );
}
