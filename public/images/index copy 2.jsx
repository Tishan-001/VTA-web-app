import React from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Heading, Text } from "../../components";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

export default function HotelBookingpagePage() {
  return (
    <>
      <Helmet>
        <title>Devinda's Application6</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-start justify-start w-full pt-2.5 bg-gray-100_01">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-row justify-start w-full pt-2 px-2 md:px-5 bg-teal-400_01 max-w-[1418px] rounded-[30px]">
            <div className="flex flex-row justify-start w-full mt-[31px]">
              <div className="flex flex-row md:flex-col justify-start items-start w-full md:gap-5">
                <Img
                  src="images/img_1b52fd81c2282b4.png"
                  alt="1b52fd81c2282bf"
                  className="w-[33%] md:w-full md:h-[684px] z-[1] object-cover"
                />
                <div className="flex flex-col items-start justify-start w-[72%] md:w-full mt-1.5 ml-[-60px] gap-[73px] md:ml-0 md:mt-0">
                  <header className="flex flex-row md:flex-col justify-between items-center w-[94%] md:gap-10">
                    <div className="flex flex-row justify-center w-[67%] md:w-full">
                      <ul className="flex flex-row justify-between w-full p-[17px] border-2 border-solid white_A700_01_black_900_00_border bg-gray-700_b5 rounded-[30px]">
                        <li>
                          <a href="#" className="mt-1 mb-[3px] ml-6 sm:ml-5 cursor-pointer hover:text-white-A700_01">
                            <Heading as="h5" className="!text-white-A700_7f text-center !font-bold">
                              Home
                            </Heading>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="mb-[3px]">
                            <Heading as="h5" className="text-center !font-bold">
                              Services
                            </Heading>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="cursor-pointer hover:text-white-A700_01">
                            <Heading as="h5" className="!text-white-A700_7f text-center !font-bold">
                              Gallery
                            </Heading>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="mb-[3px] mr-[30px] sm:mr-5 cursor-pointer hover:text-white-A700_01">
                            <Heading as="h5" className="!text-white-A700_7f text-center !font-bold">
                              About Us
                            </Heading>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <a
                      href="#"
                      className="flex justify-center items-center w-[134px] h-[68px] pt-[25px] pb-[17px] px-[30px] sm:pt-5 sm:px-5 bg-white-A700_72 rounded-[30px]"
                    >
                      <Heading as="h5" className="!text-black-900_02 text-center !font-bold">
                        LogOut
                      </Heading>
                    </a>
                  </header>
                  <div className="flex flex-col items-start justify-start ml-4 gap-[51px] md:ml-0">
                    <Heading size="4xl" as="h1">
                      Find Your Best Doctor For Better Treatment
                    </Heading>
                    <Text size="xl" as="p" className="!text-white-A700_b2">
                      There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                      alteration in some form, by injected humour.
                    </Text>
                    <Button size="lg" shape="round" className="sm:px-5 font-medium min-w-[220px] sm:min-w-full">
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
          <Tabs
            className="flex flex-col items-center justify-start w-[92%] md:w-full mt-[51px]"
            selectedTabClassName="!text-gray-200 bg-white-A700_01 shadow-xs rounded-[20px]"
            selectedTabPanelClassName="mt-[100px] relative tab-panel--selected"
          >
            <div className="justify-center w-full gap-14 grid-cols-3 md:grid-cols-2 md:gap-5 md:px-5 sm:grid-cols-1 grid max-w-[1314px]">
              <div className="flex flex-col items-start justify-start h-[400px] w-full sm:w-full sm:h-auto gap-10 p-[35px] sm:p-5 bg-cyan-400 shadow-sm">
                <Img
                  src="images/img_brain_icon_png.png"
                  alt="brainiconpng"
                  className="w-[49%] md:h-auto sm:w-full ml-[79px] md:ml-5 object-cover"
                />
                <div className="flex flex-col items-start justify-start mb-[39px] ml-[26px] gap-[5px] md:ml-0 sm:ml-5">
                  <Heading size="2xl" as="h2" className="!text-black-900_02">
                    Brain Specialist
                  </Heading>
                  <Heading size="lg" as="h3" className="!text-black-900_02 !font-semibold">
                    Available on 35/50
                  </Heading>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start h-[400px] w-full sm:w-full sm:h-auto gap-10 p-[35px] sm:p-5 bg-cyan-400 shadow-sm">
                <Img
                  src="images/img_brain_icon_png_175x181.png"
                  alt="brainiconpng"
                  className="w-[55%] md:h-auto sm:w-full ml-[69px] md:ml-5 object-cover"
                />
                <div className="flex flex-col items-start justify-start mb-[39px] ml-[26px] gap-[5px] md:ml-0 sm:ml-5">
                  <Heading size="2xl" as="h4" className="!text-black-900_02">
                    Lungs Specialist
                  </Heading>
                  <Heading size="lg" as="h5" className="!text-black-900_02 !font-semibold">
                    Available on 32/50
                  </Heading>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start h-[400px] w-full sm:w-full sm:h-auto gap-[27px] p-[22px] sm:p-5 bg-cyan-400 shadow-sm">
                <Img
                  src="images/img_brain_icon_png_201x185.png"
                  alt="brainiconpng"
                  className="w-[52%] md:h-auto sm:w-full ml-20 md:ml-5 object-cover"
                />
                <div className="flex flex-col items-start justify-start mb-[52px] ml-[39px] gap-[5px] md:ml-0 sm:ml-5">
                  <Heading size="2xl" as="h6" className="!text-black-900_02">
                    Skin Specialist
                  </Heading>
                  <Heading size="lg" as="h4" className="!text-black-900_02 !font-semibold">
                    Available on 15/20
                  </Heading>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start h-[400px] w-full sm:w-full sm:h-auto gap-10 p-[35px] sm:p-5 bg-cyan-400 shadow-sm">
                <Img
                  src="images/img_brain_icon_png_175x161.png"
                  alt="brainiconpng"
                  className="w-[49%] md:h-auto sm:w-full ml-[79px] md:ml-5 object-cover"
                />
                <div className="flex flex-col items-center justify-start mb-[39px] ml-[26px] gap-[5px] md:ml-0 sm:ml-5">
                  <Heading size="2xl" as="h2" className="!text-black-900_02">
                    Hart Specialist
                  </Heading>
                  <Heading size="lg" as="h4" className="!text-black-900_02 !font-semibold">
                    Available on 35/50
                  </Heading>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start h-[400px] w-full sm:w-full sm:h-auto gap-[17px] p-[35px] sm:p-5 bg-cyan-400 shadow-sm">
                <Img
                  src="images/img_brain_icon_png_198x182.png"
                  alt="brainiconpng"
                  className="w-[56%] md:h-auto sm:w-full object-cover"
                />
                <div className="flex flex-col items-start justify-start w-[83%] md:w-full mb-[39px] gap-[5px]">
                  <Heading size="2xl" as="h2" className="!text-black-900_02">
                    Dentist Specialist
                  </Heading>
                  <Heading size="lg" as="h4" className="!text-black-900_02 !font-semibold">
                    Available on 35/50
                  </Heading>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start h-[400px] w-full sm:w-full sm:h-auto gap-10 p-[35px] sm:p-5 bg-cyan-400 shadow-sm">
                <Img
                  src="images/img_brain_icon_png.png"
                  alt="brainiconpng"
                  className="w-[49%] md:h-auto sm:w-full ml-[79px] md:ml-5 object-cover"
                />
                <div className="flex flex-col items-start justify-start mb-[39px] ml-[26px] gap-[5px] md:ml-0 sm:ml-5">
                  <Heading size="2xl" as="h2" className="!text-black-900_02">
                    Other Specialist
                  </Heading>
                  <Heading size="lg" as="h4" className="!text-black-900_02 !font-semibold">
                    Available on 35/50
                  </Heading>
                </div>
              </div>
            </div>
            <Heading size="3xl" as="h1" className="mt-[114px] !text-black-900_02">
              Doctors
            </Heading>
            <TabList className="flex flex-row sm:flex-col justify-between items-end w-[67%] md:w-full mt-[67px] gap-[129px] p-[27px] sm:gap-10 sm:p-5 bg-gray-700_66_01 rounded-[20px]">
              <Tab className="flex flex-row justify-between w-auto mt-0.5 ml-[41px] md:ml-5 sm:mt-0">
                <Heading as="h5" className="mb-1.5 text-center !font-bold">
                  Location
                </Heading>
                <Heading as="h5" className="mt-0.5 !text-gray-200 text-center !font-bold">
                  Check in Date
                </Heading>
                <Heading as="h5" className="mt-1.5 !text-gray-50 text-center !font-bold">
                  Specialist
                </Heading>
              </Tab>
              <Tab className="mr-[70px] md:mr-5 text-black-900_02 text-center text-xl font-bold">Search Now</Tab>
            </TabList>
            {[...Array(2)].map((_, index) => (
              <TabPanel key={`tab-panel${index}`} className="items-center w-full absolute">
                <div className="flex flex-col items-center justify-start w-full mt-[100px]">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="w-full gap-[91px] grid-cols-3 md:grid-cols-2 md:gap-5 sm:grid-cols-1 grid">
                      <div className="h-[500px] w-full shadow-xs cursor-pointer relative rounded-[20px] hover:shadow-xs">
                        <Img
                          src="images/img_5_2_01.png"
                          alt="hart_specialist"
                          className="justify-center h-[500px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[20px]"
                        />
                        <div className="flex flex-col items-end justify-center w-max h-max gap-[352px] left-0 bottom-0 right-0 top-0 m-auto absolute">
                          <div className="flex flex-row justify-start items-center w-[29%] md:w-full mr-2 gap-2.5 p-[5px] bg-gray-700_66 rounded-[18px]">
                            <Img src="images/img_star_6.svg" alt="image" className="h-[21px] w-[22px] ml-[9px]" />
                            <Text size="lg" as="p" className="!text-white-A700">
                              4.9
                            </Text>
                          </div>
                          <div className="flex flex-row justify-end w-full">
                            <div className="flex flex-col items-start justify-center w-full gap-[7px] p-[15px] bg-gray-600_99 rounded-[20px]">
                              <Heading as="h5" className="mt-1 ml-1.5 md:ml-0">
                                Dr. Pandula Kumara
                              </Heading>
                              <Text size="s" as="p" className="ml-1.5 md:ml-0">
                                Hart Specialist
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="h-[500px] w-full shadow-xs cursor-pointer relative rounded-[20px] hover:shadow-xs">
                        <Img
                          src="images/img_5_2_500x380.png"
                          alt="image"
                          className="justify-center h-[500px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[20px]"
                        />
                        <div className="flex flex-col items-end justify-center w-max h-max gap-[352px] left-0 bottom-0 right-0 top-0 m-auto absolute">
                          <div className="flex flex-row justify-start items-center w-[29%] md:w-full mr-2 gap-2.5 p-[5px] bg-gray-700_66 rounded-[18px]">
                            <Img
                              src="images/img_star_6_21x22.svg"
                              alt="image_one"
                              className="h-[21px] w-[22px] ml-[9px]"
                            />
                            <Text size="lg" as="p" className="!text-white-A700">
                              4.9
                            </Text>
                          </div>
                          <div className="flex flex-row justify-end w-full">
                            <div className="flex flex-col items-start justify-start w-full gap-1 p-4 bg-gray-600_99 rounded-[20px]">
                              <Heading as="h5" className="mt-[5px] ml-[5px] md:ml-0">
                                Dr. Priyanath Jayasuriya
                              </Heading>
                              <Text size="s" as="p" className="ml-[5px] md:ml-0">
                                Dentist Specialist
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>



                      <div className="h-[500px] w-full shadow-xs cursor-pointer relative rounded-[20px] hover:shadow-xs">
                        <Img
                          src="images/img_5_2_1.png"
                          alt="image"
                          className="justify-center h-[500px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[20px]"
                        />
                        <div className="flex flex-col items-end justify-center w-max h-max gap-[352px] left-0 bottom-0 right-0 top-0 m-auto absolute">
                          <div className="flex flex-row justify-start items-center w-[29%] md:w-full mr-2 gap-2.5 p-[5px] bg-gray-700_66 rounded-[18px]">
                            <Img src="images/img_star_6_1.svg" alt="image_one" className="h-[21px] w-[22px] ml-[9px]" />
                            <Text size="lg" as="p" className="!text-white-A700">
                              4.9
                            </Text>
                          </div>
                          <div className="flex flex-row justify-end w-full">
                            <div className="flex flex-col items-start justify-center w-full gap-1.5 p-4 bg-gray-600_99 rounded-[20px]">
                              <Heading as="h5" className="mt-[3px] ml-[5px] md:ml-0">
                                Dr. Ishani Devindi
                              </Heading>
                              <Text size="s" as="p" className="ml-[5px] md:ml-0">
                                Skin Specialist
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="h-[500px] w-full cursor-pointer relative hover:shadow-xs">
                        <div className="h-[29px] w-[30%] bottom-[4%] right-1/4 m-auto border-blue_gray-100 border border-solid absolute rounded-[10px]" />
                        <div className="justify-center h-[500px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto shadow-xs absolute rounded-[20px]">
                          <Img
                            src="images/img_5_2.png"
                            alt="image"
                            className="justify-center h-[500px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[20px]"
                          />
                          <div className="flex flex-col items-end justify-center w-max h-max gap-[352px] left-0 bottom-0 right-0 top-0 m-auto absolute">
                            <div className="flex flex-row justify-start items-center w-[29%] md:w-full mr-2 gap-2.5 p-[5px] bg-gray-700_66 rounded-[18px]">
                              <Img
                                src="images/img_star_6_2.svg"
                                alt="image_one"
                                className="h-[21px] w-[22px] ml-[9px]"
                              />
                              <Text size="lg" as="p" className="!text-white-A700">
                                4.9
                              </Text>
                            </div>
                            <div className="flex flex-col items-start justify-center w-full gap-[7px] p-[15px] bg-gray-600_99 rounded-[20px]">
                              <Heading as="h5" className="mt-1 ml-1.5 md:ml-0">
                                Dr. Pandula Kumara
                              </Heading>
                              <Text size="s" as="p" className="ml-1.5 md:ml-0">
                                Hart Specialist
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="h-[500px] w-full shadow-xs cursor-pointer relative rounded-[20px] hover:shadow-xs">
                        <Img
                          src="images/img_5_2_500x380.png"
                          alt="image"
                          className="justify-center h-[500px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[20px]"
                        />
                        <div className="flex flex-col items-end justify-center w-max h-max gap-[352px] left-0 bottom-0 right-0 top-0 m-auto absolute">
                          <div className="flex flex-row justify-start items-center w-[29%] md:w-full mr-2 gap-2.5 p-[5px] bg-gray-700_66 rounded-[18px]">
                            <Img src="images/img_star_6_3.svg" alt="image_one" className="h-[21px] w-[22px] ml-[9px]" />
                            <Text size="lg" as="p" className="!text-white-A700">
                              4.9
                            </Text>
                          </div>
                          <div className="flex flex-row justify-end w-full">
                            <div className="flex flex-col items-start justify-start w-full gap-1 p-4 bg-gray-600_99 rounded-[20px]">
                              <Heading as="h5" className="mt-[5px] ml-[5px] md:ml-0">
                                Dr. Priyanath Jayasuriya
                              </Heading>
                              <Text size="s" as="p" className="ml-[5px] md:ml-0">
                                Dentist Specialist
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="h-[500px] w-full shadow-xs cursor-pointer relative rounded-[20px] hover:shadow-xs">
                        <Img
                          src="images/img_5_2_1.png"
                          alt="image"
                          className="justify-center h-[500px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[20px]"
                        />
                        <div className="flex flex-col items-end justify-center w-max h-max gap-[352px] left-0 bottom-0 right-0 top-0 m-auto absolute">
                          <div className="flex flex-row justify-start items-center w-[29%] md:w-full mr-2 gap-2.5 p-[5px] bg-gray-700_66 rounded-[18px]">
                            <Img src="images/img_star_6_4.svg" alt="image_one" className="h-[21px] w-[22px] ml-[9px]" />
                            <Text size="lg" as="p" className="!text-white-A700">
                              4.9
                            </Text>
                          </div>
                          <div className="flex flex-row justify-end w-full">
                            <div className="flex flex-col items-start justify-center w-full gap-1.5 p-4 bg-gray-600_99 rounded-[20px]">
                              <Heading as="h5" className="mt-[3px] ml-[5px] md:ml-0">
                                Dr. Ishani Devindi
                              </Heading>
                              <Text size="s" as="p" className="ml-[5px] md:ml-0">
                                Skin Specialist
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-[29px] w-[9%] ml-[174px] md:ml-5 border-blue_gray-100 border border-solid rounded-[10px]" />
                  </div>
                </div>
              </TabPanel>
            ))}
            <a
              href="#"
              className="flex justify-center items-center w-[190px] h-[53px] mt-[54px] px-[35px] py-3.5 sm:px-5 bg-black-900 rounded-[10px]"
            >
              <Text size="lg" as="p">
                view more
              </Text>
            </a>
          </Tabs>
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
