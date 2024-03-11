import React from "react";

import { Button, Img ,Text } from "../../components";

import { Heading } from "components/Heading";
import Navbar  from "../HotelBookingpage/nav"


export default function HotelBookingpagePage() {
  return (
    <>
     
      <div className="flex flex-col items-start justify-start w-full pt-2.5 bg-gray-100_01">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-row justify-start w-full pt-2 px-2 md:px-5 bg-teal2-400_01 max-w-[1418px] rounded-[30px]">
            <div className="flex flex-row justify-start w-full mt-[31px]">
              <div className="flex flex-row md:flex-col justify-start items-start w-full md:gap-5">
               
               
               
                <Img
                  src="images/img_1b52fd81c2282b4.png"
                  alt="1b52fd81c2282bf"
                  className="w-[33%] md:w-full md:h-[684px] z-[1] object-cover"
                />


                <div className="flex flex-col items-start justify-start w-[76%] md:w-full mt-1.5 ml-[-60px] gap-[73px] md:ml-0 md:mt-0">
                  
                      <section>
                        <Navbar />
                      </section>
                    

                    <div className="flex flex-col items-start justify-start ml-4 gap-[51px] md:ml-0">
                      <Heading size="4xl" as="h1" >
                        Find Your Best Doctor For Better Treatment
                      </Heading>
                      
                      <Text size="xl" as="p" className="!text-white-A700_b2">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration in some form, by injected humour.
                      </Text>

                      <Button size="lg1" shape="round" className="sm:px-5 font-medium min-w-[220px] sm:min-w-full  bg-gray-700_b5 hover:text-white-A700_01 text-xl">
                        Find The Doctor
                      </Button>
                    </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>




        <Heading size="3xl" as="h2" className="mt-[103px] ml-[81px] md:ml-5 !text-black-900_02">
          Our Specialist
        </Heading>

        <div className="flex flex-col items-center justify-start w-full gap-14">
          
          <div
            className="flex flex-col items-center justify-start w-[92%] md:w-full mt-[51px]"
            selectedTabClassName="!text-gray-200 bg-white-A700_01 shadow-xs rounded-[20px]"
            selectedTabPanelClassName="mt-[100px] relative tab-panel--selected"
          >
            
            <div className="justify-center w-[80%] ml-20 h-[50%] gap-14 grid-cols-3 md:grid-cols-2 md:gap-5 md:px-5 sm:grid-cols-1 grid max-w-[1314px]">
             
             
              <div className="flex flex-col items-start justify-start h-[260px] w-[85%] sm:w-full sm:h-auto gap-10 p-[35px] sm:p-5 bg-cyan-400 shadow-sm">
                <Img
                  src="images/img_brain_icon_png.png"
                  alt="brainiconpng"
                  className="w-[35%] md:h-auto sm:w-full ml-[79px] md:ml-5 object-cover"
                />
                <div className="flex flex-col items-start justify-start mb-[39px] ml-[16px] gap-[2px] md:ml-0 sm:ml-5 wl-[10%]  ">
                  <Heading size="xl" as="h2" className="!text-black-900_02 text-center ">
                    Brain Specialist
                  </Heading>
                  <Heading size="1xl" as="h3" className="!text-black-900_02 !font-semibold text-center ">
                    Available on 35/50
                  </Heading>
                </div>
                
              </div>


              <div className="flex flex-col items-start justify-start h-[260px] w-[85%] sm:w-full sm:h-auto gap-10 p-[35px] sm:p-5 bg-cyan-400 shadow-sm">
                <Img
                  src="images/img_brain_icon_png_175x181.png"
                  alt="brainiconpng"
                  className="w-[35%] md:h-auto sm:w-full ml-[69px] md:ml-5 object-cover"
                />
                <div className="flex flex-col items-start justify-start mb-[39px] ml-[16px] gap-[2px] md:ml-0 sm:ml-5">
                  <Heading size="xl" as="h2" className="!text-black-900_02 ">
                    Lung Specialist
                  </Heading>
                  <Heading size="1xl" as="h5" className="!text-black-900_02 !font-semibold ">
                    Available on 32/50
                  </Heading>
                </div>
              </div>


              <div className="flex flex-col items-start justify-start h-[260px] w-[85%] sm:w-full sm:h-auto gap-8 p-[35px] sm:p-5 bg-cyan-400 shadow-sm">
                <Img
                  src="images/img_brain_icon_png_201x185.png"
                  alt="brainiconpng"
                  className="w-[35%] md:h-auto sm:w-full ml-[69px] md:ml-5 object-cover"
                />
                <div className="flex flex-col items-start justify-start mb-[39px] ml-[16px] gap-[2px] md:ml-0 sm:ml-5">
                  <Heading size="xl" as="h6" className="!text-black-900_02  ">
                    Skin Specialist
                  </Heading>
                  <Heading size="1xl" as="h4" className="!text-black-900_02 !font-semibold ">
                    Available on 15/20
                  </Heading>
                </div>
              </div>


              <div className="flex flex-col items-start justify-start h-[260px] w-[85%] sm:w-full sm:h-auto gap-10 p-[35px] sm:p-5 bg-cyan-400 shadow-sm">
                <Img
                  src="images/img_brain_icon_png_175x161.png"
                  alt="brainiconpng"
                  className="w-[35%] md:h-auto sm:w-full ml-[79px] md:ml-5 object-cover"
                />
                <div className="flex flex-col items-start justify-start mb-[39px] ml-[16px] gap-[2px] md:ml-0 sm:ml-5 wl-[10%]  ">
                  <Heading size="xl" as="h2" className="!text-black-900_02 text-center ">
                    Hart Specialist
                  </Heading>
                  <Heading size="1xl" as="h3" className="!text-black-900_02 !font-semibold text-center ">
                    Available on 35/50
                  </Heading>
                </div>
                
              </div>


              <div className="flex flex-col items-start justify-start h-[260px] w-[85%] sm:w-full sm:h-auto gap-10 p-[35px] sm:p-5 bg-cyan-400 shadow-sm">
                <Img
                  src="images/img_brain_icon_png_198x182.png"
                  alt="brainiconpng"
                  className="w-[35%] md:h-auto sm:w-full ml-[69px] md:ml-5 object-cover"
                />
                <div className="flex flex-col items-start justify-start mb-[39px] ml-[16px] gap-[2px] md:ml-0 sm:ml-5">
                  <Heading size="xl" as="h2" className="!text-black-900_02 ">
                    Dentist Specialist
                  </Heading>
                  <Heading size="1xl" as="h5" className="!text-black-900_02 !font-semibold ">
                    Available on 32/50
                  </Heading>
                </div>
              </div>


              <div className="flex flex-col items-start justify-start h-[260px] w-[85%] sm:w-full sm:h-auto gap-8 p-[35px] sm:p-5 bg-cyan-400 shadow-sm">
                <Img
                  src="images/img_brain_icon_png.png"
                  alt="brainiconpng"
                  className="w-[35%] md:h-auto sm:w-full ml-[69px] md:ml-5 object-cover"
                />
                <div className="flex flex-col items-start justify-start mb-[39px]  gap-[1px] md:ml-0 sm:ml-5">
                  <Heading size="xl" as="h2" className="!text-black-900_02  ">
                   Other Specialist
                  </Heading>
                  <Heading size="1xl" as="h2" className="!text-black-900_02 !font-semibold ">
                    Available on 15/20
                  </Heading>
                </div>
              </div>


            </div>



            <Heading size="3xl" as="h1" className="mt-[114px] !text-black-900_02">
              Doctors
            </Heading>
          
          
            <a
              href="#"
              className="flex justify-center items-center w-[190px] h-[53px] mt-[54px] px-[35px] py-3.5 sm:px-5 bg-black-900 rounded-[10px]"
            >
              <Text size="lg" as="p">
                view more
              </Text>
            </a>
          </div>
          <footer className="flex justify-center items-center w-full pl-14 pr-[97px] py-[97px] md:p-5 bg-black-900_01">
            <div className="flex flex-row justify-center w-full mx-auto max-w-[1048px]">
              <div className="flex flex-row md:flex-col justify-between items-center w-full md:gap-10">
                <div className="flex flex-col items-start justify-start mt-0.5 gap-[31px] md:mt-0">
                  <a href="#">
                    <Heading size="xl" as="h4">
                      Company
                    </Heading>
                  </a>
                  <ul className="flex flex-col items-start justify-start gap-[27px]">
                    <li>
                      <a href="#">
                        <Text as="p" className="!text-red-50">
                          Blog
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="!text-red-50" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="!text-red-50">
                          Privacy Policy
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="!text-red-50" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="!text-red-50">
                          FAQ’s
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="!text-red-50" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="!text-red-50">
                          Contact
                        </Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-row sm:flex-col justify-between items-start w-[72%] md:w-full sm:gap-10">
                  <div className="flex flex-col items-start justify-start mt-[3px] gap-[30px] sm:mt-0">
                    <a href="#">
                      <Heading size="xl" as="h4">
                        Contact Us
                      </Heading>
                    </a>
                    <ul className="flex flex-col items-start justify-start ml-[3px] gap-7 md:ml-0">
                      <li>
                        <a href="#">
                          <Text as="p">NO: 1, Main Street, Galle,</Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p">Sri Lanka</Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p">+9411-111-111</Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p">vta@gmail.com</Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col items-start justify-start mt-[3px] gap-[30px] sm:mt-0">
                    <a href="#">
                      <Heading size="xl" as="h4">
                        Quick Link
                      </Heading>
                    </a>
                    <ul className="flex flex-col items-start justify-start gap-[29px]">
                      <li>
                        <a href="#">
                          <Text as="p">Packages</Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p">Services</Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text as="p">Gallery</Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-row justify-center w-[25%] sm:w-full">
                    <div className="flex flex-col items-end justify-start w-full">
                      <a href="#" className="mr-1 z-[1]">
                        <Heading size="xl" as="h4">
                          Social Share
                        </Heading>
                      </a>
                      <div className="flex flex-row justify-end items-start w-full mt-[-12px]">
                        <div className="flex flex-row justify-end items-center w-[70%]">
                          <Img
                            src="images/img_facebook.png"
                            alt="facebook_one"
                            className="w-[101px] md:h-auto object-cover"
                          />
                          <Button shape="square" className="w-[39%] ml-[-23px]">
                            <Img src="images/img_instagram.png" />
                          </Button>
                        </div>
                        <Button size="md" shape="square" className="w-[58px] mt-[19px] ml-[-2px]">
                          <Img src="images/img_twitter.png" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>

      </div>
    </>
  );
}
