import React from "react";
import { Img} from "./..";
import { Heading } from "components/Heading1";

export default function Publishbar({ ...props }) {
  return (
    <header {...props}>
        <div className="flex md:flex-col items-center p-[17px] bg-white-A700 text-center">
            <div className="flex flex-col w-[3%] md:w-full md:ml-0 item-center ml-[450px]">
            <Heading
                as="h1"
                className="flex justify-center items-center h-[29px] w-[29px] !text-white-A700 bg-teal-400 text-center rounded-[14px]"
            >
                1
            </Heading>
            </div>
            <Heading as="h2" className=" md:ml-0">
            Overview
            </Heading>
            <Img
            src="images/img_left_chevron_1.png"
            alt="leftchevronone"
            className="w-[13px] ml-[19px] md:ml-0 object-cover"
            />
            <div className="flex flex-col w-[3%] md:w-full ml-2.5 md:ml-0">
            <Heading
                as="h3"
                className="flex justify-center items-center h-[29px] w-[29px] bg-gray-300 text-center rounded-[14px]"
            >
                2
            </Heading>
            </div>
            <Heading as="h2" className="md:ml-0">
            Pricing
            </Heading>
            <Img
            src="images/img_left_chevron_1.png"
            alt="leftchevrontwo"
            className="w-[13px] ml-[19px] md:ml-0 object-cover"
            />
            <div className="flex flex-col w-[3%] md:w-full ml-[23px] md:ml-0">
            <Heading
                as="h5"
                className="flex justify-center items-center h-[29px] w-[29px] bg-gray-300 text-center rounded-[14px]"
            >
                3
            </Heading>
            </div>
            <Heading className="md:ml-0">
            Description & FAQ
            </Heading>
            <Img
            src="images/img_left_chevron_1.png"
            alt="leftchevronthre"
            className="w-[13px] ml-[18px] md:ml-0 object-cover"
            />
            <div className="flex flex-col w-[3%] md:w-full ml-[18px] md:ml-0">
            <Heading
                as="h6"
                className="flex justify-center items-center h-[29px] w-[29px] bg-gray-300 text-center rounded-[14px]"
            >
                4
            </Heading>
            </div>
            <Heading className="md:ml-0">
            Gallery
            </Heading>
            <Img
            src="images/img_left_chevron_1.png"
            alt="leftchevronfour"
            className="w-[13px] ml-[22px] md:ml-0 object-cover"
            />
            <div className="flex flex-col w-[3%] md:w-full ml-2.5 md:ml-0">
            <Heading
                as="h6"
                className="flex justify-center items-center h-[29px] w-[29px] bg-gray-300 text-center rounded-[14px]"
            >
                5
            </Heading>
            </div>
            <Heading as="h6" className="ml-[13px] md:ml-0 !text-black-900_99">
            Publish
            </Heading>
            <Img
            src="images/img_left_chevron_1.png"
            alt="leftchevronfive"
            className="w-[13px] ml-[13px] md:ml-0 object-cover"
            />
        </div>
    </header>
  );
}
