import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Footer from "components/Footer";

import Navbar  from "../HotelBookingpage/nav"
import { Link } from "react-router-dom";
import Header from'../../components/Navbar.jsx';

const TranportUIPage = () => {
  return (
    <>
      <Header/>
      <div className="bg-bg1-20  flex flex-col font-inter items-center justify-end mx-auto pt-3 w-full">
       
       
        <div className="h-[723px] md:h-[755px] max-w-[1418px] mx-auto md:px-5 relative w-full">
          
          
          <Img
            className="h-[723px] m-auto object-cover rounded-[30px] w-[1500px]"
            src="images/img_rectangle4_723x1418.png"
            alt="rectangleFour"
          />
         
         
         
          <div className="absolute flex flex-col md:gap-10 gap-[402px] justify-start right-[1%] top-[5%] w-[85%]">
            <div className="  bg-gray-600_99 mt-[500px] border border-white-A700_01 flex flex-col items-center justify-start mr-[59px] rounded-[44px] shadow-bs w-[86%] md:w-full">
              <div className="bg-gray-700_66 flex md:flex-col flex-row md:gap-5 items-center justify-start p-3.5 rounded-[44px] w-full">
                <Text
                  className="md:ml-[0] ml-[54px] text-center text-white-A700 text-xl"
                  size="txtInterBold20WhiteA700"
                >
                  Location
                </Text>
                <Line className="bg-blue-100 md:h-0.5 h-[51px] mb-1.5 ml-11 md:ml-[0] w-0.5 md:w-full" />
                <Text
                  className="ml-8 md:ml-[0] text-center text-gray-200 text-xl"
                  size="txtInterBold20Gray200"
                >
                  Check in Date
                </Text>
                <Line className="bg-blue-100 md:h-0.5 h-[51px] md:ml-[0] ml-[33px] md:mt-0 my-[3px] w-0.5 md:w-full" />
                <Text
                  className="md:ml-[0] ml-[37px] text-center text-gray-50 text-xl"
                  size="txtInterBold20Gray50"
                >
                  Check out Date
                </Text>
                <Line className="bg-blue-100 md:h-0.5 h-[51px] mb-1.5 md:ml-[0] ml-[38px] w-0.5 md:w-full" />
                <Text
                  className="ml-12 md:ml-[0] text-center text-gray-50 text-xl"
                  size="txtInterBold20Gray50"
                >
                  Category
                </Text>
                <Line className="bg-blue-100 md:h-0.5 h-[51px] md:ml-[0] ml-[47px] md:mt-0 my-[3px] w-0.5 md:w-full" />
                <Button
                  className="cursor-pointer font-bold leading-[normal] mb-[3px] min-w-[200px] md:ml-[0] ml-[37px] md:mt-0 mt-2 text-center text-xl"
                  shape="round"
                  color="white_A700"
                >
                  Search Now
                </Button>
              </div>
            </div>



        </div>
      </div>




        <div className="flex flex-col items-start md:px-10 sm:px-5 px-[75px] w-full">
          <Line className="bg-white-A700 h-[5px] w-[24%]" />
        </div>
        <div className="flex flex-col gap-[50px] items-start justify-start max-w-[1308px] mt-[114px] mx-auto md:px-5 w-full">
          <Text className="text-black-900_b2 text-xl" size="txtInterMedium20">
            Categories
          </Text>
         
         
         
         
          <List
            className="sm:flex-col flex-row md:gap-10 gap-[66px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center w-[100%] md:w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col items-center justify-start rounded-lg shadow-bs w-full cursor-pointer">
              <div className="h-72 relative w-full overflow-hidden rounded-lg transition-transform duration-300 transform hover:scale-105">
                <Img
                  className="h-full w-full object-cover"
                  src="images/img_52_283x208.png"
                  alt="FiftyTwo"
                />
                <Button
                  className="absolute left-6 top-6 font-semibold leading-normal min-w-20 rounded-lg text-center text-xs text-gray-600 bg-gray-100 bg-opacity-50 px-2 py-1"
                >
                  Tuk Tuk
                </Button>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start rounded-[20px] shadow-bs w-full cursor-pointer">
              <div className="h-72 relative w-full overflow-hidden rounded-lg transition-transform duration-300 transform hover:scale-105">
                <Img
                  className="h-full m-auto object-cover rounded-[20px] w-full"
                  src="images/img_52_1_0.png"
                  alt="FiftyTwo"
                />
                <Button
                  className="absolute cursor-pointer font-semibold leading-[normal] left-[6%] min-w-[62px] rounded-[14px] text-center text-xs top-[5%]"
                  color="gray_600_99"
                  size="xs"
                >
                  Van
                </Button>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start rounded-[20px] shadow-bs w-full cursor-pointer">
              <div className="h-72 relative w-full overflow-hidden rounded-lg transition-transform duration-300 transform hover:scale-105">
                <Img
                  className="h-full m-auto object-cover rounded-[20px] w-full"
                  src="images/img_52_2_0.png"
                  alt="FiftyTwo"
                />
                <Button
                  className="absolute cursor-pointer font-semibold leading-[normal] left-[6%] min-w-[62px] rounded-[14px] text-center text-xs top-[5%]"
                  color="gray_600_99"
                  size="xs"
                >
                  Scooter
                </Button>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start rounded-[20px] shadow-bs w-full cursor-pointer">
              <div className="h-72 relative w-full overflow-hidden rounded-lg transition-transform duration-300 transform hover:scale-105">
                <Img
                  className="h-full m-auto object-cover rounded-[20px] w-full"
                  src="images/img_52_3_0.png"
                  alt="FiftyTwo"
                />
                <Button
                  className="absolute cursor-pointer font-semibold leading-[normal] left-[6%] min-w-[62px] rounded-[14px] text-center text-xs top-[5%]"
                  color="gray_600_99"
                  size="xs"
                >
                  Car
                </Button>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start rounded-[20px] shadow-bs w-full cursor-pointer">
            <div className="h-72 relative w-full overflow-hidden rounded-lg transition-transform duration-300 transform hover:scale-105">
                <Img
                  className="h-full m-auto object-cover rounded-[20px] w-full"
                  src="images/img_52_4.png"
                  alt="FiftyTwo"
                />
                <Button
                  className="absolute cursor-pointer font-semibold leading-[normal] left-[6%] min-w-[62px] rounded-[14px] text-center text-xs top-[5%]"
                  color="gray_600_99"
                  size="xs"
                >
                  Safari
                </Button>
              </div>
            </div>
          </List>
        </div>
       
       
        <div className="flex flex-col items-start justify-start max-w-[1323px] mt-[161px] mx-auto md:px-5 w-full">
        
        
          <Text className="text-black-900_b2 text-xl" size="txtInterMedium20">
            Transpotaion
          </Text>
          <Text
            className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
            size="txtInterBold40"
          >
            Our Best Transpotation
          </Text>
         
         
          <div className="md:gap-5 gap-[91px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] mt-[45px] w-[88%] ml-20  md:ml-auto md:w-full">
            <div className="h-[500px] relative rounded-[20px] shadow-bs w-full">
              <Img
                className="h-[500px] m-auto object-cover rounded-[20px] w-full"
                src="images/img_52_500x380_0.png"
                alt="FiftyTwo"
              />
              <div className="absolute flex flex-col md:gap-10 gap-[352px] h-max inset-[0] justify-center m-auto w-[93%]">
                <div className="bg-gray-700_66_01 flex flex-row gap-2.5 items-center justify-end md:ml-[0] ml-[220px] mr-2 p-[5px] rounded-[18px] w-[29%] md:w-full">
                  <Img
                    className="h-[21px] w-[22px]"
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
                src="images/img_52_5.png"
                alt="FiftyTwo"
              />
              <div className="absolute flex flex-col md:gap-10 gap-[352px] h-max inset-[0] justify-center m-auto w-[93%]">
                <div className="bg-gray-700_66_01 flex flex-row gap-2.5 items-center justify-end md:ml-[0] ml-[220px] mr-2 p-[5px] rounded-[18px] w-[29%] md:w-full">
                  <Img
                    className="h-[21px] w-[22px]"
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
                      <Link to="/taxidetil">Book Now</Link>
                      
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[500px] relative rounded-[20px] shadow-bs w-full">
              <Img
                className="h-[500px] m-auto object-cover rounded-[20px] w-full"
                src="images/img_52_4.png"
                alt="FiftyTwo"
              />
              <div className="absolute flex flex-col md:gap-10 gap-[352px] h-max inset-[0] justify-center m-auto w-[93%]">
                <div className="bg-gray-700_66_01 flex flex-row gap-2.5 items-center justify-end md:ml-[0] ml-[220px] mr-2 p-[5px] rounded-[18px] w-[29%] md:w-full">
                  <Img
                    className="h-[21px] w-[22px]"
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
                src="images/img_52_500x380_0.png"
                alt="FiftyTwo"
              />
              <div className="absolute flex flex-col md:gap-10 gap-[352px] h-max inset-[0] justify-center m-auto w-[93%]">
                <div className="bg-gray-700_66_01 flex flex-row gap-2.5 items-center justify-end md:ml-[0] ml-[220px] mr-2 p-[5px] rounded-[18px] w-[29%] md:w-full">
                  <Img
                    className="h-[21px] w-[22px]"
                    src="images/img_star6_11.svg"
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
                src="images/img_52_5.png"
                alt="FiftyTwo"
              />
              <div className="absolute flex flex-col md:gap-10 gap-[352px] h-max inset-[0] justify-center m-auto w-[93%]">
                <div className="bg-gray-700_66_01 flex flex-row gap-2.5 items-center justify-end md:ml-[0] ml-[220px] mr-2 p-[5px] rounded-[18px] w-[29%] md:w-full">
                  <Img
                    className="h-[21px] w-[22px]"
                    src="images/img_star6_12.svg"
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
                src="images/img_52_4.png"
                alt="FiftyTwo"
              />
              <div className="absolute flex flex-col md:gap-10 gap-[352px] h-max inset-[0] justify-center m-auto w-[93%]">
                <div className="bg-gray-700_66_01 flex flex-row gap-2.5 items-center justify-end md:ml-[0] ml-[220px] mr-2 p-[5px] rounded-[18px] w-[29%] md:w-full">
                  <Img
                    className="h-[21px] w-[22px]"
                    src="images/img_star6_13.svg"
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
                src="images/img_52_500x380_0.png"
                alt="FiftyTwo"
              />
              <div className="absolute flex flex-col md:gap-10 gap-[352px] h-max inset-[0] justify-center m-auto w-[93%]">
                <div className="bg-gray-700_66_01 flex flex-row gap-2.5 items-center justify-end md:ml-[0] ml-[220px] mr-2 p-[5px] rounded-[18px] w-[29%] md:w-full">
                  <Img
                    className="h-[21px] w-[22px]"
                    src="images/img_star6_14.svg"
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
                src="images/img_52_5.png"
                alt="FiftyTwo"
              />
              <div className="absolute flex flex-col md:gap-10 gap-[352px] h-max inset-[0] justify-center m-auto w-[93%]">
                <div className="bg-gray-700_66_01 flex flex-row gap-2.5 items-center justify-end md:ml-[0] ml-[220px] mr-2 p-[5px] rounded-[18px] w-[29%] md:w-full">
                  <Img
                    className="h-[21px] w-[22px]"
                    src="images/img_star6_15.svg"
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
                src="images/img_52_4.png"
                alt="FiftyTwo"
              />
              <div className="absolute flex flex-col md:gap-10 gap-[352px] h-max inset-[0] justify-center m-auto w-[93%]">
                <div className="bg-gray-700_66_01 flex flex-row gap-2.5 items-center justify-end md:ml-[0] ml-[220px] mr-2 p-[5px] rounded-[18px] w-[29%] md:w-full">
                  <Img
                    className="h-[21px] w-[22px]"
                    src="images/img_star6_16.svg"
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
        <Footer className="bg-black-900_02 flex items-center justify-center mt-[161px] md:px-5 w-[1870px]" />
      </div>
    </>
  );
};

export default TranportUIPage;
