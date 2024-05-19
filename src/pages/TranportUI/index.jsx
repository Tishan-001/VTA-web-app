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
      <div className="bg-bg1-20  flex flex-col font-inter items-center mx-auto pt-3 w-full">
        <div className="h-[723px] md:h-[755px] mx-auto md:px-5 w-full px-10">
          
          <Img
            className="h-[800px] object-cover rounded-[30px] w-full"
            src="images/img_rectangle4_723x1418.png"
            alt="rectangleFour"
          />
         
         
         
      </div>




        
        <div className="flex flex-col gap-[50px] items-start justify-start max-w-[1308px] mt-[150px] mx-auto md:px-5 w-full">
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
                    <button
                      className="cursor-pointer font-light leading-[normal] mb-[5px] min-w-[130px] text-center text-xl bg-slate-200 h-[40px] rounded-[10px] hover:bg-blue-300"
                      shape="round"
                    >
                      Book Now
                    </button>
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
        <Footer/>
      </div>
    </>
  );
};

export default TranportUIPage;
