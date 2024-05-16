import React, { useState, useEffect } from "react";
import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";
import Navbar  from "../HotelBookingpage/nav"
import { Input } from "postcss";
import SearchBar from "./searchbar";
import Tour from "./tourGuidListCard";
import { Link } from "react-router-dom";

import Header from'../../components/Navbar.jsx';

const TourGuidersUIPage = () => {
  const [tourGuides, setTourGuides] = useState([]);

  useEffect(() => {
    fetchTourGuides();
  }, [])

  const fetchTourGuides = async () => {
    try {
      const response = await fetch("http://localhost:5000/tourguides/");
      if (!response.ok) {
        throw new Error("Failed to fetch tour guides");
      }
      const data = await response.json();
      setTourGuides(data);
    } catch (error) {
      console.error("Error fetching tour guides:", error);
    }
  };

  return (
    <>

      <Header/>
      <div className="bg-bg1-20 flex flex-col font-inter items-center justify-start px-20 mx-auto pt-3 w-full">
       
        <div className="h-[703px] mt-[10px] md:h-[500px] mx-auto md:px-5 relative w-full">
         
          <div className="absolute h-[703px] md:h-[500px] inset-[0] justify-center m-auto w-full">
            <Img
              className="h-[703px] md:h-[500px] m-auto object-cover rounded-[30px] w-full"
              src="images/img_rectangle4_1.png"
              alt="rectangleFour"
            />


            <div className="absolute flex flex-col md:gap-10 gap-[399px] justify-start right-[8%] top-[5%] w-[76%] mt-[450px] md:mt-[100px]">
             
             
             
                  

                  <section>
                    <SearchBar/>
                  </section>
            </div>
          </div>
        </div>



        <div className="flex flex-col items-start justify-start max-w-[1334px] mt-[120px] md:mt-[50px] mx-auto md:px-5 w-full">
          <Text className="text-black-900_b2 text-xl" size="txtInterMedium20">
            Tour Guiders
          </Text>
          <Text
            className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
            size="txtInterBold40"
          >
            Our Best Tour Guiders
          </Text>
         
         
         
          <div className="md:gap-5 gap-[70px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] mt-9 w-[105%]  md:w-full md:ml-auto  ">
           
         
           



            <div className="h-[450px] relative rounded-[20px] shadow-bs w-full">
              <Img
                className="h-[450px] m-auto object-cover rounded-[20px] w-full"
                src="images/img_52_t.png"
                alt="FiftyTwo"
              />
              <div className="absolute flex flex-col md:gap-50 gap-[280px] h-max inset-[0] justify-center m-auto w-[93%]">
                <div className="bg-gray-700_66_01 flex flex-row gap-2.5 items-center justify-end md:ml-[240px] sm:ml-[280px] ml-[188px] mr-1 p-[5px] rounded-[18px] w-[29%] md:w-[29%]">
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
                <div className="bg-gray-600_99 flex flex-col items-center justify-end p-6 rounded-[20px] w-full">
                  <div className="flex flex-row items-start justify-between mt-[5px] w-[98%] md:w-full">
                    <div className="flex flex-col items-start justify-start ">
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
                     className="absolute hover:bg-[#CAF4FF] hover:text-black-900 cursor-pointer font-bold h-max inset-y-[0] leading-[normal] min-w-[130px] my-auto right-[7%] rounded-[15px] text-center text-1xl mb-[10px]"
                      shape="round"
                    >
                      <Link to="/guidedetil">Book Now</Link>
               
                    </Button>
                  </div>
                </div>
              </div>
            </div>




            
            <div className="h-[450px] relative rounded-[20px] shadow-bs w-full">
              <Img
                className="h-[450px] m-auto object-cover rounded-[20px] w-full"
                src="images/img_52_t.png"
                alt="FiftyTwo"
              />
              <div className="absolute flex flex-col md:gap-50 gap-[280px] h-max inset-[0] justify-center m-auto w-[93%]">
                <div className="bg-gray-700_66_01 flex flex-row gap-2.5 items-center justify-end md:ml-[0] ml-[188px] mr-1 p-[5px] rounded-[18px] w-[29%] md:w-full">
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
                <div className="bg-gray-600_99 flex flex-col items-center justify-end p-6 rounded-[20px] w-full">
                  <div className="flex flex-row items-start justify-between mt-[5px] w-[98%] md:w-full">
                    <div className="flex flex-col items-start justify-start ">
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
                     className="absolute hover:bg-[#CAF4FF] hover:text-black-900 cursor-pointer font-bold h-max inset-y-[0] leading-[normal] min-w-[130px] my-auto right-[7%] rounded-[15px] text-center text-1xl mb-[10px]"
                      shape="round"
                    >
                      <Link to="/guidedetil">Book Now</Link>
               
                    </Button>
                  </div>
                </div>
              </div>
            </div>


            
            <div className="h-[450px] relative rounded-[20px] shadow-bs w-full">
              <Img
                className="h-[450px] m-auto object-cover rounded-[20px] w-full"
                src="images/img_52_t.png"
                alt="FiftyTwo"
              />
              <div className="absolute flex flex-col md:gap-50 gap-[280px] h-max inset-[0] justify-center m-auto w-[93%]">
                <div className="bg-gray-700_66_01 flex flex-row gap-2.5 items-center justify-end md:ml-[0] ml-[188px] mr-1 p-[5px] rounded-[18px] w-[29%] md:w-full">
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
                <div className="bg-gray-600_99 flex flex-col items-center justify-end p-6 rounded-[20px] w-full">
                  <div className="flex flex-row items-start justify-between mt-[5px] w-[98%] md:w-full">
                    <div className="flex flex-col items-start justify-start ">
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
                     className="absolute hover:bg-[#CAF4FF] hover:text-black-900 cursor-pointer font-bold h-max inset-y-[0] leading-[normal] min-w-[130px] my-auto right-[7%] rounded-[15px] text-center text-1xl mb-[10px]"
                      shape="round"
                    >
                      <Link to="/guidedetil">Book Now</Link>
               
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="h-[450px] relative rounded-[20px] shadow-bs w-full">
              <Img
                className="h-[450px] m-auto object-cover rounded-[20px] w-full"
                src="images/img_52_t.png"
                alt="FiftyTwo"
              />
              <div className="absolute flex flex-col md:gap-50 gap-[280px] h-max inset-[0] justify-center m-auto w-[93%]">
                <div className="bg-gray-700_66_01 flex flex-row gap-2.5 items-center justify-end md:ml-[0] ml-[188px] mr-1 p-[5px] rounded-[18px] w-[29%] md:w-full">
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
                <div className="bg-gray-600_99 flex flex-col items-center justify-end p-6 rounded-[20px] w-full">
                  <div className="flex flex-row items-start justify-between mt-[5px] w-[98%] md:w-full">
                    <div className="flex flex-col items-start justify-start ">
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
                     className="absolute hover:bg-[#CAF4FF] hover:text-black-900 cursor-pointer font-bold h-max inset-y-[0] leading-[normal] min-w-[130px] my-auto right-[7%] rounded-[15px] text-center text-1xl mb-[10px]"
                      shape="round"
                    >
                      <Link to="/guidedetil">Book Now</Link>
               
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
