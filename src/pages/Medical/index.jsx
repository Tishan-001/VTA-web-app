import React from "react";

import { Button, Img ,Text } from "../../components";

import { Heading } from "components/Heading";
import Navbar  from "../HotelBookingpage/nav"
import { Link } from "react-router-dom";
import Footer from "components/Footer";
import Header from "../../components/Navbar.jsx";


export default function HotelBookingpagePage() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-start justify-start w-full pt-2.5 bg-bg1-20 ">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-row justify-start pt-2 px-2 md:px-5 bg-teal2-400_01 w-full rounded-[30px]">
            <div className="flex flex-row justify-start w-full mt-[31px]">
              <div className="flex flex-row md:flex-col justify-start items-start w-full md:gap-5">
               
               
               
                <Img
                  src="images/img_1b52fd81c2282b4.png"
                  alt="1b52fd81c2282bf"
                  className="w-[25%] ml-[100px] md:w-full md:h-[684px] z-[1] object-cover"
                />


                <div className="flex flex-col items-start justify-start w-[76%] md:w-full mt-1.5 ml-[20px] mr-[100px] gap-[73px] md:ml-0 md:mt-0">

                    <div className="flex flex-col items-start justify-start ml-4 gap-[51px] md:ml-0">
                      <Heading size="4xl" as="h1" >
                        Find Your Best Doctor For Better Treatment
                      </Heading>
                      
                      <Text size="xl" as="p" className="!text-white-A700_b2">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration in some form, by injected humour.
                      </Text>

                      <Button size="lg1" shape="round" className="sm:px-5 font-medium min-w-[220px] sm:min-w-full text-white-A700  bg-blue-900 hover:bg-blue-300 hover:text-black-900 text-xl">
                        <Link to="/medicaldetial">Find The Doctor</Link>
                      </Button>
                    </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>




        <Heading size="3xl" as="h2" className="mt-[103px] ml-[200px] md:ml-5 !text-black-900_02">
          Our Specialist
        </Heading>

        <div className="flex flex-col items-center w-full ml-[0px] justify-center bg-black-900gap-14">
          
          <div
            className="flex flex-col items-center justify-start w-[92%] md:w-full mt-[51px]"
            selectedTabClassName="!text-gray-200 bg-white-A700_01 shadow-xs rounded-[20px]"
            selectedTabPanelClassName="mt-[100px] relative tab-panel--selected"
          >
            
            <div className="justify-center items-center w-[85%] h-[50%] gap-14 grid-cols-3 md:grid-cols-2 md:gap-5 md:px-5 sm:grid-cols-1 grid max-w-[1314px] pl-[30px]">
             
             
              <div className="flex flex-col items-center justify-center h-[260px] w-[85%] sm:w-full sm:h-auto gap-10 p-[35px] sm:p-5 bg-cyan-400 shadow-sm duration-1000 transform hover:scale-105 cursor-pointer">
                <Img
                  src="images/img_brain_icon_png.png"
                  alt="brainiconpng"
                  className="w-[35%] md:h-auto sm:w-full md:ml-5 object-cover mt-[30px]"
                />
                <div className="flex flex-col items-center justify-center mb-[39px] gap-[2px] md:ml-0 sm:ml-5 wl-[10%]  ">
                  <Heading size="xl" as="h2" className="!text-black-900_02 text-center ">
                    Brain Specialist
                  </Heading>
                  <Heading size="1xl" as="h3" className="!text-black-900_02 !font-semibold text-center ">
                    Available on 35/50
                  </Heading>
                </div>
                
              </div>


              <div className="flex flex-col items-center justify-center h-[260px] w-[85%] sm:w-full sm:h-auto gap-10 p-[35px] sm:p-5 bg-cyan-400 shadow-sm duration-1000 transform hover:scale-105 cursor-pointer">
                <Img
                  src="images/img_brain_icon_png_175x181.png"
                  alt="brainiconpng"
                  className="w-[35%] md:h-auto sm:w-full mt-[30px] md:ml-5 object-cover"
                />
                <div className="flex flex-col items-center justify-center mb-[39px] gap-[2px] md:ml-0 sm:ml-5">
                  <Heading size="xl" as="h2" className="!text-black-900_02 ">
                    Lung Specialist
                  </Heading>
                  <Heading size="1xl" as="h5" className="!text-black-900_02 !font-semibold ">
                    Available on 32/50
                  </Heading>
                </div>
              </div>


              <div className="flex flex-col items-center justify-center h-[260px] w-[85%] sm:w-full sm:h-auto gap-8 p-[35px] sm:p-5 bg-cyan-400 shadow-sm duration-1000 transform hover:scale-105 cursor-pointer">
                <Img
                  src="images/img_brain_icon_png_201x185.png"
                  alt="brainiconpng"
                  className="w-[35%] md:h-auto sm:w-full mt-[30px] md:ml-5 object-cover"
                />
                <div className="flex flex-col items-center justify-center mb-[39px] gap-[2px] md:ml-0 sm:ml-5">
                  <Heading size="xl" as="h6" className="!text-black-900_02  ">
                    Skin Specialist
                  </Heading>
                  <Heading size="1xl" as="h4" className="!text-black-900_02 !font-semibold ">
                    Available on 15/20
                  </Heading>
                </div>
              </div>


              <div className="flex flex-col items-center justify-center h-[260px] w-[85%] sm:w-full sm:h-auto gap-10 p-[35px] sm:p-5 bg-cyan-400 shadow-sm duration-1000 transform hover:scale-105 cursor-pointer">
                <Img
                  src="images/img_brain_icon_png_175x161.png"
                  alt="brainiconpng"
                  className="w-[35%] md:h-auto sm:w-full mt-[30px] md:ml-5 object-cover"
                />
                <div className="flex flex-col items-center justify-center mb-[39px] gap-[2px] md:ml-0 sm:ml-5 wl-[10%]  ">
                  <Heading size="xl" as="h2" className="!text-black-900_02 text-center ">
                    Hart Specialist
                  </Heading>
                  <Heading size="1xl" as="h3" className="!text-black-900_02 !font-semibold text-center ">
                    Available on 35/50
                  </Heading>
                </div>
                
              </div>


              <div className="flex flex-col items-center justify-center h-[260px] w-[85%] sm:w-full sm:h-auto gap-10 p-[35px] sm:p-5 bg-cyan-400 shadow-sm duration-1000 transform hover:scale-105 cursor-pointer">
                <Img
                  src="images/img_brain_icon_png_198x182.png"
                  alt="brainiconpng"
                  className="w-[35%] md:h-auto sm:w-full mt-[30px] md:ml-5 object-cover"
                />
                <div className="flex flex-col items-center justify-center mb-[39px] ml-[16px] gap-[2px] md:ml-0 sm:ml-5">
                  <Heading size="xl" as="h2" className="!text-black-900_02 ">
                    Dentist Specialist
                  </Heading>
                  <Heading size="1xl" as="h5" className="!text-black-900_02 !font-semibold ">
                    Available on 32/50
                  </Heading>
                </div>
              </div>


              <div className="flex flex-col items-center justify-center h-[260px] w-[85%] sm:w-full sm:h-auto gap-8 p-[35px] sm:p-5 bg-cyan-400 shadow-sm duration-1000 transform hover:scale-105 cursor-pointer">
                <Img
                  src="images/img_brain_icon_png.png"
                  alt="brainiconpng"
                  className="w-[35%] md:h-auto sm:w-full mt-[30px] md:ml-5 object-cover"
                />
                <div className="flex flex-col items-center justify-center mb-[39px]  gap-[1px] md:ml-0 sm:ml-5">
                  <Heading size="xl" as="h2" className="!text-black-900_02  ">
                   Other Specialist
                  </Heading>
                  <Heading size="1xl" as="h2" className="!text-black-900_02 !font-semibold ">
                    Available on 15/20
                  </Heading>
                </div>
              </div>


            </div>



            
          </div>



        



        




          
      </div>


      <Heading size="3xl" as="h2" className="mt-[103px] ml-[200px] md:ml-5 !text-black-900_02">
          Doctors
        </Heading>
      <div className="md:gap-5  gap-[91px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] mt-9 w-[76%] ml-[200px] md:w-full md:ml-auto  ">
           
         
           
            <div className="h-[500px] relative rounded-[20px] shadow-bs w-full">
              <Img
                className="h-[500px] m-auto object-cover rounded-[20px] w-full"
                src="images/img_5_2_01.png"
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
                        Dr. Pandula Kumara
                      </Text>
                      <Text
                        className="text-white-A700 text-xl"
                        size="txtInterMedium20WhiteA700"
                      >
                         Hart Specialist
                      </Text>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>



            <div className="h-[500px] relative rounded-[20px] shadow-bs w-full">
              <Img
                className="h-[500px] m-auto object-cover rounded-[20px] w-full"
                src="images/img_5_2_1.png"
                alt="image"
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
                        Dr. Ishani Devindi
                      </Text>
                      <Text
                        className="text-white-A700 text-xl"
                        size="txtInterMedium20WhiteA700"
                      >
                        Skin Specialist
                      </Text>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>




            <div className="h-[500px] relative rounded-[20px] shadow-bs w-full">
              <Img
                className="h-[500px] m-auto object-cover rounded-[20px] w-full"
                src="images/img_5_2_500x380.png"
                alt="image"
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
                          Dr. Priyanath Jayasuriya
                      </Text>
                      <Text
                        className="text-white-A700 text-xl"
                        size="txtInterMedium20WhiteA700"
                      >
                         Dentist Specialist
                      </Text>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>


            <div className="h-[500px] relative rounded-[20px] shadow-bs w-full">
              <Img
                className="h-[500px] m-auto object-cover rounded-[20px] w-full"
                src="images/img_5_2_01.png"
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
                        Dr. Pandula Kumara
                      </Text>
                      <Text
                        className="text-white-A700 text-xl"
                        size="txtInterMedium20WhiteA700"
                      >
                         Hart Specialist
                      </Text>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>



            <div className="h-[500px] relative rounded-[20px] shadow-bs w-full">
              <Img
                className="h-[500px] m-auto object-cover rounded-[20px] w-full"
                src="images/img_5_2_1.png"
                alt="image"
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
                        Dr. Ishani Devindi
                      </Text>
                      <Text
                        className="text-white-A700 text-xl"
                        size="txtInterMedium20WhiteA700"
                      >
                        Skin Specialist
                      </Text>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>




            <div className="h-[500px] relative rounded-[20px] shadow-bs w-full">
              <Img
                className="h-[500px] m-auto object-cover rounded-[20px] w-full"
                src="images/img_5_2_500x380.png"
                alt="image"
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
                          Dr. Priyanath Jayasuriya
                      </Text>
                      <Text
                        className="text-white-A700 text-xl"
                        size="txtInterMedium20WhiteA700"
                      >
                         Dentist Specialist
                      </Text>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>


            




            
        </div>
        

        
        <div className="w-full justify-center text-center items-center">
              <Button
              className="cursor-pointer font-medium leading-[normal] hover:bg-blue-300 hover:text-black-900 min-w-[190px] mt-[59px] w-[200px] justify-center items-center rounded-[26px] text-center text-xl"
              color="black_900_01"
              size="md"
            >
              View More
            </Button>
            </div>


       



          
          
           

        
        <Footer className="bg-black-900_02 flex items-center justify-center mt-[161px] md:px-5 w-[1870px]" />






      </div>
    </>
  );
}
