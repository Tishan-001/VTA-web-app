import React, { useState } from "react";

import { CloseSVG } from "../../assets/images";
import { Img } from "components/Img";
import { Button } from "components/Button_Second";
import { Heading } from "components/Heading1";
import Header from "components/Header";
import { Input } from "components/Input";
import { Text } from "components";
import { TextArea } from "components/TextArea";

import Sidebar1 from "components/Sidebar1";
import { articleData } from "../../assets/data/articleData";

export default function ArticalPage(...props) {
  const [searchBarValue, setSearchBarValue] = React.useState("");
  const [showPopup, setShowPopup] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 10;

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const filteredArticles = articleData.filter((article) => {
    // Filter based on search bar value
    const isTitleMatch =
      article.title.toLowerCase().includes(searchBarValue.toLowerCase()) ||
      searchBarValue === "";

    // Filter based on selected service

    return isTitleMatch;
  });

  // Logic to get current articles based on currentPage

  return (
    <>
      <div className="relative w-full bg-gray-300">
        {showPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            {/* Popup content */}
            <div className="bg-white p-8 rounded-lg">
              <div className="w-[700px] h-[600px] p-[37px] sm:p-5 bg-white-A700_01 rounded-[30px] shadow-bs2">
                <div className="flex flex-col justify-center items-center gap-[20px] md:ml-0">
                  <svg
                    class="h-8 w-8 text-green-500 ml-auto cursor-pointer"
                    onClick={togglePopup}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M0 0h24v24H0z" />
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                  <div>
                    <div className="flex flex-col items-center">
                      <div className="flex md:flex-col self-stretch justify-between items-start text-center gap-2">
                        <Heading size="2xl" as="h1" className="mt-[1px]">
                          Booking Summary
                        </Heading>
                      </div>
                    </div>
                  </div>

                  <div className="flex md:flex-col self-stretch justify-between items-start mt-[1px] gap-1">
                    <Heading
                      size="1xl"
                      as="h2"
                      className="mt-2 ml-[100px]"
                    >
                      Full Name :
                    </Heading>
                  </div>
                  <div className="flex md:flex-col self-stretch justify-between items-start mt-[1px] gap-1">
                    <Heading
                      size="1xl"
                      as="h2"
                      className="mt-1 ml-[100px]"
                    >
                      Email Address :
                    </Heading>
                  </div>
                  <div className="flex md:flex-col self-stretch justify-between items-start mt-[1px] gap-1">
                    <Heading
                      size="1xl"
                      as="h2"
                      className="mt-1 ml-[100px]"
                    >
                      Phone Number :
                    </Heading>
                  </div>
                  <div className="flex md:flex-col self-stretch justify-between items-start mt-[1px] gap-1">
                    <Heading size="1xl" as="h2" className="mt-1 ml-[100px]">
                      place :
                    </Heading>
                  </div>
                  <div className="flex md:flex-col self-stretch justify-between items-start mt-[1px] gap-1">
                    <Heading
                      size="1xl"
                      as="h2"
                      className="mt-1 ml-[100px]"
                    >
                      Arrival Date and Time :
                    </Heading>
                  </div>
                  <div className="flex md:flex-col self-stretch justify-between items-start mt-[1px] gap-1">
                    <Heading
                      size="1xl"
                      as="h2"
                      className="mt-1 ml-[100px]"
                    >
                      Depature Date and Time :
                    </Heading>
                  </div>

                  <div className="flex flex-row justify-center w-[41%] p-[11px] bg-teal-A100_99">
                    <div className="flex flex-col items-end justify-start w-[91%]  ml-5 mr-4 gap-0.5">
                      <div className="flex flex-row justify-between w-full">
                        <Text
                          className="text-2xl text-black-900  ml-0.5 mt-2"
                          size="txtInterBold60"
                        >
                          Paid LKR 23000
                        </Text>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center  gap-3">
                    <Button className="flex items-center justify-center w-[200px] h-[40px] bg-green-500 rounded-[5px]">
                      Cancel Booking
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex md:flex-col justify-center items-start">
          <div className="flex flex-col gap-[18px] flex-1">
            <header {...props}>
              <div className="flex sm:flex-col self-end h-[100px] justify-between items-center w-full  gap-10 mx-auto md:p-5 max-w-full bg-white-A700 ">
                <Heading size="2xl" as="h4" className="ml-[100px]">
                  Transport Dashboard
                </Heading>
                <div className="flex justify-between items-center w-[25%] sm:w-full gap-5 ">
                  <Heading size="xl1" as="h5" className=" mr-[20]">
                    Nuwani Thushari
                  </Heading>
                  <Img
                    src="images/img_image_75.png"
                    alt="imageseventyfiv"
                    className="h-[55px] w-[56px] rounded-[50%] mr-[30px]"
                  />
                </div>
              </div>
            </header>

            <div className="flex justify-center  w-[98%] md:w-full ml-[9px]">
              <div className="flex flex-col items-center justify-center w-[95%]  gap-[18px] p-[11px] bg-gray-100 rounded-[20px] ">
                <div className="flex flex-col w-[96%] md:w-full mt-[5px] gap-[23px]">
                  <div className="flex sm:flex-col justify-between gap-5"></div>

                  <div>
                    <div className="w-[100%] ml-[20px] h-px bg-blue_gray-200" />

                    <table className="flex sm:flex-col justify-between items-start gap-5 p-[7px]">
                      <thead>
                        <tr>
                          <div className="flex md:flex-col justify-center items-center mb-[5px] mr-[140px]">
                            <div className="flex self-start justify-center items-center ml-[100px] gap-[11px]">
                              <th>Email</th>
                            </div>

                            <div className="flex self-start justify-center items-center ml-[210px] gap-[20px]">
                              <th>Name</th>
                            </div>

                            <div className="flex self-start justify-center items-center  ml-[110px] gap-[11px]">
                              <Heading as="h5" className="ml-[13px]">
                                <th>Room No</th>
                              </Heading>
                            </div>

                            <div className="flex self-start justify-center items-center ml-[140px] gap-[11px]">
                              <th></th>
                            </div>
                          </div>
                        </tr>
                      </thead>
                    </table>

                    <div className="w-[100%] ml-[20px] h-px bg-blue_gray-200" />

                    <div className="w-full h-[470px] overflow-y-auto">
                      <table>
                        <tbody>
                          {filteredArticles.map((article, index) => (
                            <tr key={index}>
                              <div className="flex flex-col gap-[15px] p-2.5">
                                <div className="flex md:flex-col justify-center items-end  mr-[20px] flex-1">
                                  <td style={{ width: "300px" }}>
                                    {article.title}
                                  </td>

                                  <td style={{ width: "190px" }}>
                                    {article.views}
                                  </td>
                                  <td style={{ width: "190px" }}>
                                    {article.likes}
                                  </td>

                                  <div className="flex justify-center  gap-2">
                                    <td>
                                      <div className="flex justify-center ml-[90px] gap-3">
                                        <Button
                                          onClick={togglePopup}
                                          className="flex items-center justify-center w-[100px] h-[40px] bg-green-500 rounded-[5px]"
                                        >
                                          View
                                        </Button>
                                      </div>
                                    </td>
                                  </div>
                                </div>
                              </div>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="w-[100%] ml-[20px] h-px bg-blue_gray-200" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
