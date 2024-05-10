import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Footer from "components/Footer";
import { Link } from "react-router-dom";

const AllpackagesPageUIPage = () => {
  return (
    <>
      <div className="bg-gray-100_01 flex flex-col font-inter items-center justify-start mx-auto pt-3 px-3 w-full">


       <div className="md:h-[1024px] md:flex-col sm:h-[703px] h-[700px]   w-full mx-auto md:px-5 relative ">
          <div className="absolute md:h-[1024px] h-[703px] inset-x-[0] mx-auto top-[0] w-full">
              <Img
                className="h-[660px] m-auto object-cover rounded-[30px] w-full"
                src="images/travel4.jpg"
                alt="rectangleFour"
              />
            <div className="absolute flex flex-col md:gap-10 gap-[388px] justify-start right-[4%] top-[5%] w-[77%]">
             
                    <div className="bg-gray-700_66_01 flex md:flex-col flex-row md:gap-5 items-center justify-start mr-[219px] p-[15px] rounded-[44px] w-4/5 md:w-full">
                      <Text
                        className="md:ml-[0] ml-[79px] text-center text-white-A700 text-xl"
                        size="txtInterBold20"
                      >
                        Location
                      </Text>
                      <Line className="bg-blue-100 h-[51px] md:h-px mb-1.5 md:ml-[0] ml-[102px] rotate-[-91deg] md:w-full w-px" />
                      <Text
                        className="md:ml-[0] ml-[114px] text-center text-gray-200 text-xl"
                        size="txtInterBold20Gray200"
                      >
                        Date
                      </Text>
                      <Line className="bg-blue-100 h-[51px] md:h-px mb-1.5 md:ml-[0] ml-[114px] rotate-[-91deg] md:w-full w-px" />
                      <Button
                        className="cursor-pointer font-bold leading-[normal] min-w-[179px] md:ml-[0] ml-[74px] md:mt-0 my-1.5 rounded-[23px] text-center text-xl"
                        color="white_A700"
                      >
                        Search Now
                      </Button>
                    </div>
             </div>
          </div>
        </div>



        <div className="flex flex-col items-start justify-start max-w-[1271px] mt-[68px] mx-auto md:px-5 w-full">
          <Text
            className="text-black-900_b2 text-xl"
            size="txtInterMedium20Black900b2"
          >
            Tour Packages
          </Text>
          <Text
            className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
            size="txtInterBold40"
          >
            Our Best Package
          </Text>
          <div className="gap-16 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] mt-[49px] w-[90%] ml-20 md:w-full md:ml-auto">
            <div className="hover:cursor-pointer h-[500px] hover:relative relative rounded-[20px] hover:shadow-bs shadow-bs hover:w-full w-full">
              <Img
                className="h-[500px] m-auto object-cover rounded-[20px] w-full"
                src="images/img_52.png"
                alt="FiftyTwo"
              />
              <div className="absolute flex flex-col md:gap-10 gap-[352px] h-max inset-[0] items-center justify-center m-auto w-[93%]">
                <div className="flex flex-row items-center justify-between w-[97%] md:w-full">
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[100px] text-center text-xl"
                    shape="round"
                    color="gray_700_66"
                    size="xs"
                  >
                    7 Days
                  </Button>
                  <div className="bg-gray-700_66 flex flex-row gap-2.5 items-center justify-center p-[5px] rounded-[18px]">
                    <Img
                      className="h-[21px] ml-[9px] w-[22px]"
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
                </div>
                <div className="bg-gray-600_99 md:h-12 h-[87px] p-[5px] relative rounded-[20px] w-full">
                  <Text
                    className="absolute left-[6%] text-white-A700 text-xl top-[8%]"
                    size="txtInterSemiBold20"
                  >
                    <>
                      Nuwara Eliya
                    </>
                  </Text>
                  <Text
                    className="absolute bottom-[6%] left-[6%] text-white-A700 text-xl"
                    size="txtInterMedium20WhiteA700"
                  >
                    $285
                  </Text>
                  <Button className="absolute cursor-pointer font-light h-max inset-y-[0] leading-[normal] min-w-[130px] my-auto right-[7%] rounded-[23px] text-center text-xl">
                   <Link to="/packagedetails">Book Now</Link> 
                  </Button>
                </div>
              </div>
            </div>
            <div className="hover:cursor-pointer h-[500px] hover:relative relative hover:shadow-bs hover:w-full w-full">
              <Img
                className="h-[500px] m-auto object-cover rounded-[20px] w-full"
                src="images/img_51.png"
                alt="FiftyOne"
              />
              <div className="absolute flex flex-col md:gap-10 gap-[352px] h-max inset-[0] items-center justify-center m-auto w-[93%]">
                <div className="flex flex-row items-center justify-between w-[97%] md:w-full">
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[100px] text-center text-xl"
                    shape="round"
                    color="gray_700_66"
                    size="xs"
                  >
                    7 Days
                  </Button>
                  <div className="bg-gray-700_66 flex flex-row gap-2.5 items-center justify-center p-[5px] rounded-[18px]">
                    <Img
                      className="h-[21px] ml-[9px] w-[22px]"
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
                </div>
                <div className="bg-gray-600_99 md:h-12 h-[87px] p-[5px] relative rounded-[20px] w-full">
                  <Text
                    className="absolute left-[6%] text-white-A700 text-xl top-[8%]"
                    size="txtInterSemiBold20"
                  >
                    <>
                      Minneriya <br />
                      National Park
                    </>
                  </Text>
                  <Text
                    className="absolute bottom-[6%] left-[6%] text-white-A700 text-xl"
                    size="txtInterMedium20WhiteA700"
                  >
                    $285
                  </Text>
                  <Button className="absolute cursor-pointer font-light h-max inset-y-[0] leading-[normal] min-w-[130px] my-auto right-[7%] rounded-[23px] text-center text-xl">
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
            <div className="hover:cursor-pointer h-[500px] hover:relative relative hover:shadow-bs hover:w-full w-full">
              <Img
                className="h-[500px] m-auto object-cover rounded-[20px] w-full"
                src="images/img_52_500x380.png"
                alt="FiftyTwo"
              />
              <div className="absolute flex flex-col md:gap-10 gap-[352px] h-max inset-[0] items-center justify-center m-auto w-[93%]">
                <div className="flex flex-row items-center justify-between w-[97%] md:w-full">
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[100px] text-center text-xl"
                    shape="round"
                    color="gray_700_66"
                    size="xs"
                  >
                    7 Days
                  </Button>
                  <div className="bg-gray-700_66 flex flex-row gap-2.5 items-center justify-center p-[5px] rounded-[18px]">
                    <Img
                      className="h-[21px] ml-[9px] w-[22px]"
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
                </div>
                <div className="bg-gray-600_99 md:h-12 h-[87px] p-[5px] relative rounded-[20px] w-full">
                  <Text
                    className="absolute left-[6%] text-white-A700 text-xl top-[8%]"
                    size="txtInterSemiBold20"
                  >
                    <>
                      Minneriya <br />
                      National Park
                    </>
                  </Text>
                  <Text
                    className="absolute bottom-[6%] left-[6%] text-white-A700 text-xl"
                    size="txtInterMedium20WhiteA700"
                  >
                    $285
                  </Text>
                  <Button className="absolute cursor-pointer font-light h-max inset-y-[0] leading-[normal] min-w-[130px] my-auto right-[7%] rounded-[23px] text-center text-xl">
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
            <div className="hover:cursor-pointer h-[500px] hover:relative relative rounded-[20px] hover:shadow-bs shadow-bs hover:w-full w-full">
              <Img
                className="h-[500px] m-auto object-cover rounded-[20px] w-full"
                src="images/img_52.png"
                alt="FiftyTwo"
              />
              <div className="absolute flex flex-col md:gap-10 gap-[352px] h-max inset-[0] items-center justify-center m-auto w-[93%]">
                <div className="flex flex-row items-center justify-between w-[97%] md:w-full">
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[100px] text-center text-xl"
                    shape="round"
                    color="gray_700_66"
                    size="xs"
                  >
                    7 Days
                  </Button>
                  <div className="bg-gray-700_66 flex flex-row gap-2.5 items-center justify-center p-[5px] rounded-[18px]">
                    <Img
                      className="h-[21px] ml-[9px] w-[22px]"
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
                </div>
                <div className="bg-gray-600_99 md:h-12 h-[87px] p-[5px] relative rounded-[20px] w-full">
                  <Text
                    className="absolute left-[6%] text-white-A700 text-xl top-[8%]"
                    size="txtInterSemiBold20"
                  >
                    <>
                      Minneriya <br />
                      National Park
                    </>
                  </Text>
                  <Text
                    className="absolute bottom-[6%] left-[6%] text-white-A700 text-xl"
                    size="txtInterMedium20WhiteA700"
                  >
                    $285
                  </Text>
                  <Button className="absolute cursor-pointer font-light h-max inset-y-[0] leading-[normal] min-w-[130px] my-auto right-[7%] rounded-[23px] text-center text-xl">
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
            <div className="hover:cursor-pointer h-[500px] hover:relative relative hover:shadow-bs hover:w-full w-full">
              <Img
                className="h-[500px] m-auto object-cover rounded-[20px] w-full"
                src="images/img_51.png"
                alt="FiftyOne"
              />
              <div className="absolute flex flex-col md:gap-10 gap-[352px] h-max inset-[0] items-center justify-center m-auto w-[93%]">
                <div className="flex flex-row items-center justify-between shadow-bs w-[97%] md:w-full">
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[100px] text-center text-xl"
                    shape="round"
                    color="gray_700_66"
                    size="xs"
                  >
                    7 Days
                  </Button>
                  <div className="bg-gray-700_66 flex flex-row gap-2.5 items-center justify-center p-[5px] rounded-[18px]">
                    <Img
                      className="h-[21px] ml-[9px] w-[22px]"
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
                </div>
                <div className="bg-gray-600_99 md:h-12 h-[87px] p-[5px] relative rounded-[20px] w-full">
                  <Text
                    className="absolute left-[6%] text-white-A700 text-xl top-[8%]"
                    size="txtInterSemiBold20"
                  >
                    <>
                      Minneriya <br />
                      National Park
                    </>
                  </Text>
                  <Text
                    className="absolute bottom-[6%] left-[6%] text-white-A700 text-xl"
                    size="txtInterMedium20WhiteA700"
                  >
                    $285
                  </Text>
                  <Button className="absolute cursor-pointer font-light h-max inset-y-[0] leading-[normal] min-w-[130px] my-auto right-[7%] rounded-[23px] text-center text-xl">
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
            <div className="hover:cursor-pointer h-[500px] hover:relative relative hover:shadow-bs hover:w-full w-full">
              <Img
                className="h-[500px] m-auto object-cover rounded-[20px] w-full"
                src="images/img_52_500x380.png"
                alt="FiftyTwo"
              />
              <div className="absolute flex flex-col md:gap-10 gap-[352px] h-max inset-[0] items-center justify-center m-auto w-[93%]">
                <div className="flex flex-row items-center justify-between shadow-bs w-[97%] md:w-full">
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[100px] text-center text-xl"
                    shape="round"
                    color="gray_700_66"
                    size="xs"
                  >
                    7 Days
                  </Button>
                  <div className="bg-gray-700_66 flex flex-row gap-2.5 items-center justify-center p-[5px] rounded-[18px]">
                    <Img
                      className="h-[21px] ml-[9px] w-[22px]"
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
                </div>
                <div className="bg-gray-600_99 md:h-12 h-[87px] p-[5px] relative rounded-[20px] w-full">
                  <Text
                    className="absolute left-[6%] text-white-A700 text-xl top-[8%]"
                    size="txtInterSemiBold20"
                  >
                    <>
                      Minneriya <br />
                      National Park
                    </>
                  </Text>
                  <Text
                    className="absolute bottom-[6%] left-[6%] text-white-A700 text-xl"
                    size="txtInterMedium20WhiteA700"
                  >
                    $285
                  </Text>
                  <Button className="absolute cursor-pointer font-light h-max inset-y-[0] leading-[normal] min-w-[130px] my-auto right-[7%] rounded-[23px] text-center text-xl">
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
            <div className="hover:cursor-pointer h-[500px] hover:relative relative rounded-[20px] hover:shadow-bs shadow-bs hover:w-full w-full">
              <Img
                className="h-[500px] m-auto object-cover rounded-[20px] w-full"
                src="images/img_52.png"
                alt="FiftyTwo"
              />
              <div className="absolute flex flex-col md:gap-10 gap-[350px] h-max inset-[0] items-center justify-center m-auto w-[93%]">
                <div className="flex flex-row items-center justify-between w-[97%] md:w-full">
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[100px] text-center text-xl"
                    shape="round"
                    color="gray_700_66"
                    size="xs"
                  >
                    7 Days
                  </Button>
                  <div className="bg-gray-700_66 flex flex-row gap-2.5 items-center justify-center p-[5px] rounded-[18px]">
                    <Img
                      className="h-[21px] ml-[9px] w-[22px]"
                      src="images/img_star6_8.svg"
                      alt="starSix"
                    />
                    <Text
                      className="mr-4 text-white-A700_01 text-xl"
                      size="txtInterMedium20WhiteA70001"
                    >
                      4.9
                    </Text>
                  </div>
                </div>
                <div className="bg-gray-600_99 md:h-12 h-[87px] p-[5px] relative rounded-[20px] w-full">
                  <Text
                    className="absolute left-[6%] text-white-A700 text-xl top-[8%]"
                    size="txtInterSemiBold20"
                  >
                    <>
                      Minneriya <br />
                      National Park
                    </>
                  </Text>
                  <Text
                    className="absolute bottom-[6%] left-[6%] text-white-A700 text-xl"
                    size="txtInterMedium20WhiteA700"
                  >
                    $285
                  </Text>
                  <Button className="absolute cursor-pointer font-light h-max inset-y-[0] leading-[normal] min-w-[130px] my-auto right-[7%] rounded-[23px] text-center text-xl">
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
            <div className="hover:cursor-pointer h-[500px] hover:relative relative hover:shadow-bs hover:w-full w-full">
              <Img
                className="h-[500px] m-auto object-cover rounded-[20px] w-full"
                src="images/img_51.png"
                alt="FiftyOne"
              />
              <div className="absolute flex flex-col md:gap-10 gap-[350px] h-max inset-[0] items-center justify-center m-auto w-[93%]">
                <div className="flex flex-row items-center justify-between shadow-bs w-[97%] md:w-full">
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[100px] text-center text-xl"
                    shape="round"
                    color="gray_700_66"
                    size="xs"
                  >
                    7 Days
                  </Button>
                  <div className="bg-gray-700_66 flex flex-row gap-2.5 items-center justify-center p-[5px] rounded-[18px]">
                    <Img
                      className="h-[21px] ml-[9px] w-[22px]"
                      src="images/img_star6_9.svg"
                      alt="starSix"
                    />
                    <Text
                      className="mr-4 text-white-A700_01 text-xl"
                      size="txtInterMedium20WhiteA70001"
                    >
                      4.9
                    </Text>
                  </div>
                </div>
                <div className="bg-gray-600_99 md:h-12 h-[87px] p-[5px] relative rounded-[20px] w-full">
                  <Text
                    className="absolute left-[6%] text-white-A700 text-xl top-[8%]"
                    size="txtInterSemiBold20"
                  >
                    <>
                      Minneriya <br />
                      National Park
                    </>
                  </Text>
                  <Text
                    className="absolute bottom-[6%] left-[6%] text-white-A700 text-xl"
                    size="txtInterMedium20WhiteA700"
                  >
                    $285
                  </Text>
                  <Button className="absolute cursor-pointer font-light h-max inset-y-[0] leading-[normal] min-w-[130px] my-auto right-[7%] rounded-[23px] text-center text-xl">
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
            <div className="hover:cursor-pointer h-[500px] hover:relative relative hover:shadow-bs hover:w-full w-full">
              <Img
                className="h-[500px] m-auto object-cover rounded-[20px] w-full"
                src="images/img_52_500x380.png"
                alt="FiftyTwo"
              />
              <div className="absolute flex flex-col md:gap-10 gap-[350px] h-max inset-[0] items-center justify-center m-auto w-[93%]">
                <div className="flex flex-row items-center justify-between shadow-bs w-[97%] md:w-full">
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[100px] text-center text-xl"
                    shape="round"
                    color="gray_700_66"
                    size="xs"
                  >
                    7 Days
                  </Button>
                  <div className="bg-gray-700_66 flex flex-row gap-2.5 items-center justify-center p-[5px] rounded-[18px]">
                    <Img
                      className="h-[21px] ml-[9px] w-[22px]"
                      src="images/img_star6_10.svg"
                      alt="starSix"
                    />
                    <Text
                      className="mr-4 text-white-A700_01 text-xl"
                      size="txtInterMedium20WhiteA70001"
                    >
                      4.9
                    </Text>
                  </div>
                </div>
                <div className="bg-gray-600_99 md:h-12 h-[87px] p-[5px] relative rounded-[20px] w-full">
                  <Text
                    className="absolute left-[6%] text-white-A700 text-xl top-[8%]"
                    size="txtInterSemiBold20"
                  >
                    <>
                      Minneriya <br />
                      National Park
                    </>
                  </Text>
                  <Text
                    className="absolute bottom-[6%] left-[6%] text-white-A700 text-xl"
                    size="txtInterMedium20WhiteA700"
                  >
                    $285
                  </Text>
                  <Button className="absolute cursor-pointer font-light h-max inset-y-[0] leading-[normal] min-w-[130px] my-auto right-[7%] rounded-[23px] text-center text-xl">
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Footer className="bg-black-900_02 flex items-center justify-center mt-[161px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default AllpackagesPageUIPage;
