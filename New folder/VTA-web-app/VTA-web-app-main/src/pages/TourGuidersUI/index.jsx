import React from "react";

import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";
import Navbar  from "../HotelBookingpage/nav"
import { Input } from "postcss";
import SearchBar from "./searchbar";
import Tour from "./tourGuidListCard";
import { Link } from "react-router-dom";

const TourGuidersUIPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-end mx-auto pt-3 w-full">
       
        <div className="h-[723px] max-w-[1418px] mx-auto md:px-5 relative w-full">
         
          <div className="absolute h-[723px] inset-[0] justify-center m-auto w-full">
            <Img
              className="h-[723px] m-auto object-cover rounded-[30px] w-full"
              src="images/img_rectangle4_1.png"
              alt="rectangleFour"
            />


            <div className="absolute flex flex-col md:gap-10 gap-[399px] justify-start right-[8%] top-[5%] w-[76%]">
             
             
             
                  <section>
                    <Navbar/>
                  </section>

                  <section>
                    <SearchBar/>
                  </section>

            </div>

          </div>
        </div>



        <div className="flex flex-col items-start justify-start max-w-[1334px] mt-[83px] mx-auto md:px-5 w-full">
          <Text className="text-black-900_b2 text-xl" size="txtInterMedium20">
            Tour Guiders
          </Text>
          <Text
            className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
            size="txtInterBold40"
          >
            Our Best Tour Guiders
          </Text>
         
         
         
          <div className="md:gap-5 gap-[91px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] mt-9 w-[88%] ml-20 md:w-full md:ml-auto  ">
           
         
           
            <div className="h-[500px] relative rounded-[20px] shadow-bs w-full">
              <Img
                className="h-[500px] m-auto object-cover rounded-[20px] w-full"
                src="images/img_52_t.png"
                alt="FiftyTwo"
              />
              <div className="absolute flex flex-col md:gap-10 gap-[352px] h-max inset-[0] justify-center m-auto w-[93%]">
                <div className="bg-gray-700_66_01 flex flex-row gap-2.5 items-center justify-end md:ml-[0] ml-[220px] mr-8 p-[5px] rounded-[18px] w-[29%] md:w-full">
                  <Img
                    className="h-[21px] w-[22px] "
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
                      <Link to="/guidedetil">Book Now</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>



            <div className="h-[500px] relative rounded-[20px] shadow-bs w-full">
              <Img
                className="h-[500px] m-auto object-cover rounded-[20px] w-full"
                src="images/img_52_t.png"
                alt="FiftyTwo"
              />
              <div className="absolute flex flex-col md:gap-10 gap-[352px] h-max inset-[0] justify-center m-auto w-[93%]">
                <div className="bg-gray-700_66_01 flex flex-row gap-2.5 items-center justify-end md:ml-[0] ml-[220px] mr-2 p-[5px] rounded-[18px] w-[29%] md:w-full">
                  <Img
                    className="h-[21px] w-[22px]"
                    src="images/img_star6_21x22.svg"
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




            <div className="h-[500px] relative rounded-[20px] shadow-bs w-full">
              <Img
                className="h-[500px] m-auto object-cover rounded-[20px] w-full"
                src="images/img_52_t.png"
                alt="FiftyTwo"
              />
              <div className="absolute flex flex-col md:gap-10 gap-[352px] h-max inset-[0] justify-center m-auto w-[93%]">
                <div className="bg-gray-700_66_01 flex flex-row gap-2.5 items-center justify-end md:ml-[0] ml-[220px] mr-2 p-[5px] rounded-[18px] w-[29%] md:w-full">
                  <Img
                    className="h-[21px] w-[22px]"
                    src="images/img_star6_1.svg"
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



            <div className="h-[500px] relative rounded-[20px] shadow-bs w-full">
              <Img
                className="h-[500px] m-auto object-cover rounded-[20px] w-full"
                src="images/img_52_t.png"
                alt="FiftyTwo"
              />
              <div className="absolute flex flex-col md:gap-10 gap-[352px] h-max inset-[0] justify-center m-auto w-[93%]">
                <div className="bg-gray-700_66_01 flex flex-row gap-2.5 items-center justify-end md:ml-[0] ml-[220px] mr-2 p-[5px] rounded-[18px] w-[29%] md:w-full">
                  <Img
                    className="h-[21px] w-[22px]"
                    src="images/img_star6_2.svg"
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



            <div className="h-[500px] relative rounded-[20px] shadow-bs w-full">
              <Img
                className="h-[500px] m-auto object-cover rounded-[20px] w-full"
                src="images/img_52_t.png"
                alt="FiftyTwo"
              />
              <div className="absolute flex flex-col md:gap-10 gap-[352px] h-max inset-[0] justify-center m-auto w-[93%]">
                <div className="bg-gray-700_66_01 flex flex-row gap-2.5 items-center justify-end md:ml-[0] ml-[220px] mr-2 p-[5px] rounded-[18px] w-[29%] md:w-full">
                  <Img
                    className="h-[21px] w-[22px]"
                    src="images/img_star6_3.svg"
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


            <div className="h-[500px] relative rounded-[20px] shadow-bs w-full">
              <Img
                className="h-[500px] m-auto object-cover rounded-[20px] w-full"
                src="images/img_52_t.png"
                alt="FiftyTwo"
              />
              <div className="absolute flex flex-col md:gap-10 gap-[352px] h-max inset-[0] justify-center m-auto w-[93%]">
                <div className="bg-gray-700_66_01 flex flex-row gap-2.5 items-center justify-end md:ml-[0] ml-[220px] mr-2 p-[5px] rounded-[18px] w-[29%] md:w-full">
                  <Img
                    className="h-[21px] w-[22px]"
                    src="images/img_star6_4.svg"
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
            <div className="h-[500px] relative rounded-[20px] shadow-bs w-full">
              <Img
                className="h-[500px] m-auto object-cover rounded-[20px] w-full"
                src="images/img_52_t.png"
                alt="FiftyTwo"
              />
              <div className="absolute flex flex-col md:gap-10 gap-[352px] h-max inset-[0] justify-center m-auto w-[93%]">
                <div className="bg-gray-700_66_01 flex flex-row gap-2.5 items-center justify-end md:ml-[0] ml-[220px] mr-2 p-[5px] rounded-[18px] w-[29%] md:w-full">
                  <Img
                    className="h-[21px] w-[22px]"
                    src="images/img_star6_5.svg"
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
            <div className="h-[500px] relative rounded-[20px] shadow-bs w-full">
              <Img
                className="h-[500px] m-auto object-cover rounded-[20px] w-full"
                src="images/img_52_t.png"
                alt="FiftyTwo"
              />
              <div className="absolute flex flex-col md:gap-10 gap-[352px] h-max inset-[0] justify-center m-auto w-[93%]">
                <div className="bg-gray-700_66_01 flex flex-row gap-2.5 items-center justify-end md:ml-[0] ml-[220px] mr-2 p-[5px] rounded-[18px] w-[29%] md:w-full">
                  <Img
                    className="h-[21px] w-[22px]"
                    src="images/img_star6_6.svg"
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
            <div className="h-[500px] relative rounded-[20px] shadow-bs w-full">
              <Img
                className="h-[500px] m-auto object-cover rounded-[20px] w-full"
                src="images/img_52_t.png"
                alt="FiftyTwo"
              />
              <div className="absolute flex flex-col md:gap-10 gap-[352px] h-max inset-[0] justify-center m-auto w-[93%]">
                <div className="bg-gray-700_66_01 flex flex-row gap-2.5 items-center justify-end md:ml-[0] ml-[220px] mr-2 p-[5px] rounded-[18px] w-[29%] md:w-full">
                  <Img
                    className="h-[21px] w-[22px]"
                    src="images/img_star6_7.svg"
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
          </div>
        </div>
        <Footer className="bg-black-900_01 flex items-center justify-center mt-[220px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default TourGuidersUIPage;
