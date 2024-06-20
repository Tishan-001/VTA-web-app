import React from "react";

import { Text, Img } from "../../components";
import { Heading } from "components/Heading";
import Footer from "../../components/Footer";

export default function HotelBookingpageFourPage() {
  return (
    <>
      
      <div className="flex flex-col w-full gap-[60px] sm:gap-[30px] bg-bg1-20">
        <div className="w-full mt-[21px] mx-auto md:p-5 max-w-[1418px]">
          <div className="flex flex-col items-center gap-[52px] sm:gap-[26px]">
            <div className="flex self-stretch p-[31px] sm:p-5 bg-gray-600 rounded-[30px]">
              <div className="flex w-[34%] md:w-full ml-[29px] md:ml-0">
                <Heading size="3xl" as="h1">
                  Dr. Pandula Kumara
                </Heading>
              </div>
            </div>
            <div className="flex md:flex-col justify-between items-start w-[71%] md:w-full gap-5">
              <div className="w-[38%] md:w-full shadow-xs rounded-[20px]">
                <Img
                  src="images/img_5_2_01.png"
                  alt="image"
                  className="h-[500px] w-full md:h-auto object-cover rounded-[20px]"
                />
              </div>
              <div className="flex flex-col w-[51%] md:w-full mt-[25px] gap-[25px]">
                <div className="flex md:flex-row sm:flex-col gap-[39px]">
                  <div className="flex flex-col items-center w-full sm:w-full gap-3 p-2 bg-cyan-400 shadow-md rounded-[10px]">
                    <Heading size="xs" as="h2" className="mt-2.5 !text-black-900">
                      Experience
                    </Heading>
                    <Heading size="s" as="h3" className="mb-4 !text-black-900 !font-semibold">
                      5 yr
                    </Heading>
                  </div>
                  <div className="flex flex-col items-center w-full sm:w-full gap-3 p-4 bg-cyan-400 shadow-md rounded-[10px]">
                    <Heading size="xs" as="h4" className="!text-black-900">
                      Patient
                    </Heading>
                    <Heading size="s" as="h5" className="mb-[9px] !text-black-900 !font-semibold">
                      1.8 k
                    </Heading>
                  </div>
                  <div className="flex flex-col items-center w-full sm:w-full gap-2.5 p-[18px] bg-cyan-400 shadow-md rounded-[10px]">
                    <Heading size="xs" as="h6" className="!text-black-900">
                      Rating
                    </Heading>
                    <Heading size="s" as="h5" className="mb-2 !text-black-900 !font-semibold">
                      4.8
                    </Heading>
                  </div>
                  <div className="flex flex-col items-center w-full sm:w-full gap-2 p-3 bg-cyan-400 shadow-md rounded-[10px]">
                    <Heading size="xs" as="p" className="w-[80%] md:w-full !text-black-900 text-center">
                      <>
                        Working
                        <br />
                        Places
                      </>
                    </Heading>
                    <Heading size="s" as="h5" className="mb-[5px] !text-black-900 !font-semibold">
                      3
                    </Heading>
                  </div>
                </div>
               
               
                <div className="flex w-[70%] md:w-full">
                  <div className="flex flex-col w-full">
                    <Heading size="2xl" as="h1" className="!text-black-900_02">
                      Available Time Slots
                    </Heading>
                    <div className="flex justify-between w-[70%] md:w-[71%] mt-[38px] gap-5">
                      <Text size="lg" as="p" className="!text-black-900_02">
                        Time
                      </Text>
                      <Text size="lg" as="p" className="!text-black-900_02">
                        Plasce
                      </Text>
                    </div>
                    <div className="flex justify-between w-[78%] md:w-[78%] mt-[25px] gap-2">
                      <Text size="1xl" as="p" className="self-start mb-0.5 !text-black-900_b2">
                        4.00 PM
                      </Text>
                      <Text size="s" as="p" className="self-end  !text-black-900_b2">
                        Asiri Hostpital
                      </Text>
                    </div>
                    <div className="flex justify-between w-[83.5%] md:w-[82.5%] mt-[22px] gap-5">
                      <Text size="s" as="p" className="self-start mb-0.5 !text-black-900_b2">
                        6.00 PM
                      </Text>
                      <Text size="s" as="p" className="self-end !text-black-900_b2">
                        Shakya Hostpital
                      </Text>
                    </div>
                    <div className="flex justify-between mt-[22px]  w-[90%]  md:w-[87%] gap-5 ">
                      <Text size="s" as="p" className="self-start mb-0.5 !text-black-900_b2">
                        8.00 PM
                      </Text>
                      <Text size="s" as="p" className="self-end !text-black-900_b2 ">
                        Coparative Hostpital
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center w-[75%] md:w-full p-[21px] sm:p-5 bg-gray-500_33 rounded-[20px] bg-gray-500">
              <Text size="md" as="p" className="w-[97%] mb-[34px] !text-black-900_02 !font-light">
                <span className="text-black-900_02">
                  <>
                    <br />
                  </>
                </span>
                <span className="text-black-900_02 font-bold">
                  <>
                    Description:
                    <br />
                    <br />
                    Experience unmatched luxury at [Hotel Name], where refined elegance meets exceptional service.
                    Immerse yourself in a world of comfort and sophistication in the heart of [City or Location].
                  </>
                </span>
              </Text>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}
