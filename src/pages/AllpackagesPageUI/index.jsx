import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Footer from "components/Footer";
import { Link } from "react-router-dom";
import Header from'../../components/Navbar.jsx';
import SearchBar from "./searchbar.jsx";

import Searchbar from "./searchbar.jsx";

const AllpackagesPageUIPage = () => {
  return (
    <>


      <Header/>
      <div className=" bg-bg1-20 flex flex-col font-inter items-center justify-start mx-auto pt-3 sm:px-3 px-20 w-full">


       <div className="md:h-[1024px] md:flex-col sm:h-[703px] h-[700px]   w-full mx-auto md:px-5 relative ">
          <div className="absolute md:h-[1024px] h-[703px] inset-x-[0] mx-auto top-[0] w-full">
              <Img
                className="h-[660px] m-auto object-cover rounded-[30px] w-full"
                src="images/travel4.jpg"
                alt="rectangleFour"
              />
            <div className="absolute flex flex-col md:gap-10 gap-[388px] justify-start right-[5%] top-[5%] w-[77%] mt-[450px] md:mt-[300px]">
             
                    
               
                    <SearchBar/>
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
          <div className="gap-16 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] mt-[49px] w-[105%]  md:w-full md:ml-auto">
            
            
            
            
            <div className="hover:cursor-pointer h-[450px]  hover:relative relative rounded-[20px] hover:shadow-bs shadow-bs hover:w-full w-[100%]">
              <Img
                className="h-[450px] m-auto object-cover rounded-[20px] w-full"
                src="images/img_52.png"
                alt="FiftyTwo"
              />
              <div className="absolute flex flex-col md:gap-90 gap-[300px] h-max inset-[0] items-center justify-center m-auto w-[93%]">
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
                <div className="bg-gray-600_99 md:h-30 md:mb-[-10px] h-[87px] p-[5px] relative rounded-[20px] w-full">
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
                  <Button 
                  className="absolute hover:bg-[#CAF4FF] hover:text-black-900 cursor-pointer font-bold h-max inset-y-[0] leading-[normal] min-w-[130px] my-auto right-[7%] rounded-[15px] text-center text-1xl mb-[6px]">
                   
                   
                   <Link to="/packagedetails">Book Now</Link> 
                  </Button>
                </div>
              </div>
            </div>





            <div className="hover:cursor-pointer h-[450px]  hover:relative relative rounded-[20px] hover:shadow-bs shadow-bs hover:w-full w-[100%]">
              <Img
                className="h-[450px] m-auto object-cover rounded-[20px] w-full"
                src="images/img_51.png"
                alt="FiftyTwo"
              />
              <div className="absolute flex flex-col md:gap-90 gap-[300px] h-max inset-[0] items-center justify-center m-auto w-[93%]">
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
                <div className="bg-gray-600_99 md:h-30 md:mb-[-10px] h-[87px] p-[5px] relative rounded-[20px] w-full">
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
                  <Button 
                  className="absolute hover:bg-[#CAF4FF] hover:text-black-900 cursor-pointer font-bold h-max inset-y-[0] leading-[normal] min-w-[130px] my-auto right-[7%] rounded-[15px] text-center text-1xl mb-[6px]">
                   
                   
                   <Link to="/packagedetails">Book Now</Link> 
                  </Button>
                </div>
              </div>
            </div>






            <div className="hover:cursor-pointer h-[450px]  hover:relative relative rounded-[20px] hover:shadow-bs shadow-bs hover:w-full w-[100%]">
              <Img
                className="h-[450px] m-auto object-cover rounded-[20px] w-full"
                src="images/img_52_500x380.png"
                alt="FiftyTwo"
              />
              <div className="absolute flex flex-col md:gap-90 gap-[300px] h-max inset-[0] items-center justify-center m-auto w-[93%]">
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
                <div className="bg-gray-600_99 md:h-30 md:mb-[-10px] h-[87px] p-[5px] relative rounded-[20px] w-full">
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
                  <Button 
                  className="absolute hover:bg-[#CAF4FF] hover:text-black-900 cursor-pointer font-bold h-max inset-y-[0] leading-[normal] min-w-[130px] my-auto right-[7%] rounded-[15px] text-center text-1xl mb-[6px]">
                   
                   
                   <Link to="/packagedetails">Book Now</Link> 
                  </Button>
                </div>
              </div>
            </div>




            <div className="hover:cursor-pointer h-[450px]  hover:relative relative rounded-[20px] hover:shadow-bs shadow-bs hover:w-full w-[100%]">
              <Img
                className="h-[450px] m-auto object-cover rounded-[20px] w-full"
                src="images/img_52.png"
                alt="FiftyTwo"
              />
              <div className="absolute flex flex-col md:gap-90 gap-[300px] h-max inset-[0] items-center justify-center m-auto w-[93%]">
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
                <div className="bg-gray-600_99 md:h-30 md:mb-[-10px] h-[87px] p-[5px] relative rounded-[20px] w-full">
                  <Text
                    className="absolute left-[6%] text-white-A700 text-xl top-[8%]"
                    size="txtInterSemiBold20"
                  >
                    <>
                      Nuwara Eliyaa 
                    </>
                  </Text>
                  <Text
                    className="absolute bottom-[6%] left-[6%] text-white-A700 text-xl"
                    size="txtInterMedium20WhiteA700"
                  >
                    $285
                  </Text>
                  <Button 
                  className="absolute hover:bg-[#CAF4FF] hover:text-black-900 cursor-pointer font-bold h-max inset-y-[0] leading-[normal] min-w-[130px] my-auto right-[7%] rounded-[15px] text-center text-1xl mb-[6px]">
                   
                   
                   <Link to="/packagedetails">Book Now</Link> 
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
