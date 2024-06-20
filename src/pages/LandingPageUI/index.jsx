import React, {useEffect, useState} from "react";

import { Button, Img, Line, List, Text } from "components";

import { Heading } from "components/Heading/index.jsx";

import { Link } from "react-router-dom";
import Header from'../../components/Navbar.jsx';
import Footer from "components/Footer";

const LandingPageUIPage = () => {

  const [hotelCount, setHotelCount] = useState("");
  const [guidersCount, setGuidersCount] = useState("");
  const [customerCount, setCustormerCount] = useState("");

  useEffect(() => {
    fetchHotelCount();
    fetGuidersCount();
    fetCustomerCount();
  }, []);

  const fetchHotelCount = async () => {
    try {
      const response = await fetch("http://localhost:5000/hotels/count");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setHotelCount(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetGuidersCount = async () => {
    try {
      const response = await fetch("http://localhost:5000/tourguides/count");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setGuidersCount(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const fetCustomerCount = async () => {
    try {
      const response = await fetch("http://localhost:5000/auth/count");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setCustormerCount(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return ( 
    <>
    <Header/>

      <div className=" bg-bg1-20 flex flex-col font-inter items-center justify-start mx-auto pt-3 w-full">

        <div className="md:h-[1024px] md:flex-col sm:h-[703px] h-[756px]   w-full mx-auto md:px-5 relative ">
           <div className="absolute md:h-[1024px] h-[703px] inset-x-[0] mx-auto top-[0] w-full px-3">

              <Img
                className="h-[703px] m-auto object-cover rounded-[30px] w-full"
                src="images/img_rectangle4.png"
                alt="heropicture"
              />

              <div className="absolute flex flex-col justify-start right-[7%] top-[4%] w-[76%]">

                <Text
                  className="ml-2 md:ml-[10]  md:text-5xl sm:mt-[-20%] text-6xl text-black-900 text-center justify-start absolute mt-[100px] right-[14%] top-[10%]"
                  size="txtInterBold60"
                >
                  Traveling opens the doors to creating memories
                </Text>
                
                <Text
                  className=" md:ml-[0] ml-[-100px] mt-[300px] sm:mt-60 mr-[50px] sm:text-[21px] md:text-[23px] text-[25px] text-center text-white-A700 "
                  size="txtInterMedium25"
                >
                  Exploring Sri Lanka is an unforgettable adventure
                </Text>
              </div>

          </div>

        </div>

        <div className="flex flex-row md:flex-col w-[92%] mt-[-115px] gap-[52px] z-[5]">
            <div className="flex flex-col ml-12 sm:ml-[0px] md:ml-[0px] sm:mt-[200px] md:mt-[-80px] items-center justify-center w-[22%] md:w-full gap-[9px] p-[17px] bg-white-A700 shadow-bs2 rounded-[20px]">

              <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
                  size="txtInterMedium40"
              >
                {customerCount !== null ? customerCount : 0} +
              </Text>
              <Text
                  className="text-black-900 text-center text-xl"
                  size="txtInterMedium20"
              >
                  Total Customer
              </Text>
          </div>

            <div className="flex flex-col items-center justify-start w-[22%] md:w-full gap-[9px] p-[17px] bg-white-A700 shadow-bs2 rounded-[20px]">

              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
                size="txtInterMedium40"
              >
                {guidersCount !== null ? guidersCount : 0} +
              </Text>
              <Text
                className="text-black-900 text-center text-xl"
                size="txtInterMedium20"
              >
                Tour Guiders
              </Text>
            </div>

            <div className="flex flex-col items-center justify-center w-[22%] md:w-full gap-[9px] p-[17px] bg-white-A700 shadow-bs2 rounded-[20px]">

              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
                size="txtInterMedium40"
              >
                {hotelCount !== null ? hotelCount : 0} +
              </Text>
              <Text
                className="text-black-900 text-center text-xl"
                size="txtInterMedium20"
              >
                Hotels
              </Text>
            </div>

            

            <div className="flex flex-col mr-12 items-center justify-center w-[22%] md:w-full gap-[9px] p-[17px] bg-white-A700_01 shadow-bs2 rounded-[20px]">

              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
                size="txtInterMedium40"
              >
                700 +
              </Text>
              <Text
                className="text-black-900 text-center text-xl"
                size="txtInterMedium20"
              >
                Places
              </Text>
            </div>
          </div>

        <div className="flex flex-col items-center justify-start max-w-[1268px] mt-[106px] mx-auto md:px-5 w-full">
         
         
          <div className="flex flex-col items-center justify-start w-full">
           
           
            <div className="flex flex-col items-start justify-start w-full">
             
             
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
             
              <div className="flex flex-col ml-5 mr-5 items-start justify-start w-full">

              <List

                className="sm:flex-col   flex-row md:gap-10 gap-16 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center mt-[70px] md:ml-[-15px] md:w-full  w-[100%] "
                orientation="horizontal">


                <div className="h-[400px] relative rounded-[20px] shadow-bs w-full duration-1000 transform hover:scale-105 cursor-pointer">
                  <Img
                    className="h-[400px] w-full m-auto object-cover rounded-[20px] sm:w-full "
                    src="images/img_52.png"
                    alt="FiftyTwo"
                  />
                  <div className="absolute flex flex-col  gap-[230px] md:gap-[200px] h-max inset-[0] items-center justify-center m-auto w-[93%]">
                    <div className="flex flex-row items-center mt-[10px] justify-between w-[97%] md:w-full" >
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
                    </div>


                    <div className="bg-gray-600_99  flex flex-col items-center justify-end p-[11px] rounded-[20px] w-full ">
                      <div className="flex flex-col items-start justify-start mt-[9px] w-[97%] md:w-full">
                        <Text
                          className="text-[15px] text-white-A700"
                          size="txtInterLight15"
                        >
                          29 AUGUST - 29 AUGUST
                        </Text>
                        <div className="flex flex-row gap-[39px] items-start justify-between w-full">
                          <Text
                            className="text-white-A700 text-xl"
                            size="txtInterSemiBold20"
                          >
                            Minneriya National Park
                          </Text>
                          <Text
                            className="text-white-A700 text-xl"
                            size="txtInterMedium20WhiteA700"
                          >
                            $285
                          </Text>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>

                <div className="h-[400px] relative rounded-[20px] shadow-bs w-full duration-1000 transform hover:scale-105 cursor-pointer">

                  <Img
                    className="h-[400px] w-full m-auto object-cover rounded-[20px] sm:w-full "
                    src="images/img_51.png"
                    alt="FiftyOne"
                  />

                  <div className="absolute flex flex-col  gap-[230px] md:gap-[200px] h-max inset-[0] items-center justify-center m-auto w-[93%]">
                   
                   
                    <div className="flex flex-row items-center mt-[10px] justify-between w-[97%] md:w-full" >
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
                      
                    </div>


                    <div className="bg-gray-600_99  flex flex-col items-center justify-end p-[11px] rounded-[20px] w-full">
                      <div className="flex flex-col items-start justify-start mt-[9px] w-[97%] md:w-full">
                        <Text
                          className="text-[15px] text-white-A700"
                          size="txtInterLight15"
                        >
                          29 AUGUST - 29 AUGUST
                        </Text>
                        <div className="flex flex-row gap-[39px] items-start justify-between w-full">
                          <Text
                            className="text-white-A700 text-xl"
                            size="txtInterSemiBold20"
                          >
                            Minneriya National Park
                          </Text>
                          <Text
                            className="text-white-A700 text-xl"
                            size="txtInterMedium20WhiteA700"
                          >
                            $285
                          </Text>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>

                <div className="h-[400px] relative rounded-[20px] shadow-bs w-full duration-1000 transform hover:scale-105 cursor-pointer">
                  <Img
                    className="h-[400px] w-full m-auto object-cover rounded-[20px] sm:w-full "
                    src="images/img_52_500x380.png"
                    alt="FiftyTwo"
                  />
                  <div className="absolute flex flex-col  gap-[230px] md:gap-[200px] h-max inset-[0] items-center justify-center m-auto w-[93%]">
                    <div className="flex flex-row items-center mt-[10px] justify-between w-[97%] md:w-full" >
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
                      
                    </div>


                    <div className="bg-gray-600_99  flex flex-col items-center justify-end p-[11px] rounded-[20px] w-full">
                      <div className="flex flex-col items-start justify-start mt-[9px] w-[97%] md:w-full">
                        <Text
                          className="text-[15px] text-white-A700"
                          size="txtInterLight15"
                        >
                          29 AUGUST - 29 AUGUST
                        </Text>
                        <div className="flex flex-row gap-[39px] items-start justify-between w-full">
                          <Text
                            className="text-white-A700 text-xl"
                            size="txtInterSemiBold20"
                          >
                            Minneriya National Park
                          </Text>
                          <Text
                            className="text-white-A700 text-xl"
                            size="txtInterMedium20WhiteA700"
                          >
                            $285
                          </Text>
                        </div>
                      </div>
                    </div>

                  </div>


                </div>

                <div className="h-[400px] relative rounded-[20px] shadow-bs w-full duration-1000 transform hover:scale-105 cursor-pointer">
                  <Img
                    className="h-[400px] w-full m-auto object-cover rounded-[20px] sm:w-full "
                    src="images/img_52.png"
                    alt="FiftyTwo"/>
                  <div className="absolute flex flex-col  gap-[230px] md:gap-[200px] h-max inset-[0] items-center justify-center m-auto w-[93%]">
                    <div className="flex flex-row items-center mt-[10px] justify-between w-[97%] md:w-full" >
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
                      
                    </div>


                    <div className="bg-gray-600_99  flex flex-col items-center justify-end p-[11px] rounded-[20px] w-full">
                      <div className="flex flex-col items-start justify-start mt-[9px] w-[97%] md:w-full">
                        <Text
                          className="text-[15px] text-white-A700"
                          size="txtInterLight15"
                        >
                          29 AUGUST - 29 AUGUST
                        </Text>
                        <div className="flex flex-row gap-[39px] items-start justify-between w-full">
                          <Text
                            className="text-white-A700 text-xl"
                            size="txtInterSemiBold20"
                          >
                            Minneriya National Park
                          </Text>
                          <Text
                            className="text-white-A700 text-xl"
                            size="txtInterMedium20WhiteA700"
                          >
                            $285
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </List>

              </div>

            </div>

          </div>

          <Button

            className="cursor-pointer  hover:bg-[#5AB2FF] hover:text-black-900 font-medium leading-[normal] min-w-[190px] mt-[90px] ml-[50px] rounded-[15px] text-center text-xl"

            color="black_900_01"
            size="lg1"
          >
            <Link to="/allpackagespageui">view more</Link>
            
          </Button>

          <div className="flex flex-row  w-[72%] md:w-full mt-[140px] sm:mt-[70px] md:mt-[70px] ml-[10px]">

            <div className="flex md:flex-col flex-row md:gap-[41px] items-center justify-between w-full">
              
              
              <Img
                 src="images/travel2.webp"
                alt="image"
                className="w-[50%] h-[650px] md:w-full md:h-auto object-cover rounded-[20px]"
              />


              <div className="flex flex-col ml-[15px] items-start justify-start w-[47%] md:w-full  bg-c" >
                <Text size="txtInterMedium20Black900b2" as="p" className="text-black-900_b2 text-xl ml-10">
                  How it works
                </Text>
                <Text size="txtInterMedium50" as="p" className="text-black-900 w-max text-[41px] ml-10 ">
                  One Click For You
                </Text>

                  <Link to="tourguidersui"> 


                  <div className="flex flex-row justify-end w-[350px] md:w-[400px] mt-[19px] p-[10px] bg-white-A700_01 rounded-[20px] ml-10 sm:ml-auto md:ml-[120px]  hover:bg-[#A0DEFF]  ">

                     <div className="flex flex-row sm:flex-Row justify-start items-start w-[100%] mb-3.5 gap-[28px] sm:gap-1">
                       
                        <Img
                             src="images/img_icon.png"
                             alt="tour_guide_one"
                             className="w-[55px] md:h-auto mt-px sm:mt-0 object-cover"
                        />
                       
                       
                        <div className="flex flex-col items-start justify-start w-[100%] sm:w-full gap-[10px] mt-[18px] md:ml-[50px] ">
                           <Heading as="h5" className="!text-black-900_cc">
                             Tour Guide
                            </Heading>
                            
                        </div>


                    </div>
                 </div>


                 </Link>


                 <Link to="/tranportui"> 


                 <div className="flex flex-row justify-end w-[350px] md:w-[400px] mt-[12px] p-[8px] bg-white-A700_01  rounded-[20px] ml-10 sm:ml-auto md:ml-[120px]  hover:bg-[#A0DEFF] ">

                     <div className="flex flex-row sm:flex-Row justify-start items-start w-[100%] mb-3.5 gap-[28px] sm:gap-1">
                        <Img
                             src="images/img_image2.png"
                             alt="imageTwo"
                             className="w-[55px] md:h-auto mt-px sm:mt-0 object-cover"
                        />
                         <div className="flex flex-col items-start justify-start w-[100%] sm:w-full gap-[10px] mt-[18px] md:ml-[50px]">
                           <Heading as="h5" className="!text-black-900_cc">
                             Transport
                            </Heading>
                            
                        </div>
                    </div>
                 </div>
                 </Link>




                 <Link to="/hotelbookingpage"> 


                <div className="flex flex-row justify-end w-[350px] md:w-[400px] mt-[12px] p-[8px] bg-white-A700_01 rounded-[20px] ml-10 sm:ml-auto md:ml-[120px]  hover:bg-[#A0DEFF]">

                  <div className="flex flex-row sm:flex-row justify-start items-start w-[100%] mb-3.5 gap-[28px] sm:gap-1">
                    <Img
                       src="images/img_image3.png"
                       alt="imageThree"
                       className="w-[55px] md:h-auto mt-px sm:mt-0 object-cover"
                    />
                    <div className="flex flex-col items-start justify-start w-[100%] sm:w-full gap-[1px] mt-[18px] md:ml-[50px]">
                      <Heading as="h5" className="!text-black-900_cc">
                      Hotel Reservation
                      </Heading>
                     
                    </div>
                  </div>
                </div>

                </Link>

                <Link to="/medical">

                <div className="flex flex-row justify-end w-[350px] md:w-[400px] mt-[12px] p-[8px] bg-white-A700_01 rounded-[20px] ml-10 sm:ml-auto md:ml-[120px] hover:bg-[#A0DEFF]">

                  <div className="flex flex-row sm:flex-row  justify-start items-start w-[100%] mb-3.5 gap-[28px] sm:gap-1">
                    <Img
                      src="images/img_image4.png"
                      alt="imageFour"

                      className="w-[55px] md:h-auto mt-px sm:mt-0 object-cover"
                    />
                    <div className="flex flex-col items-start justify-start w-[100%] sm:w-full gap-[1px] mt-[18px] md:ml-[50px]">
                      <Heading as="h5" className="!text-black-900_cc">
                        Health Care
                      </Heading>
                     
                    </div>
                  </div>
                </div>
                </Link>

                

                <Link to="/allpackagespageui">

                <div className="flex flex-row justify-end w-[350px] md:w-[400px] mt-[19px] p-[8px] bg-white-A700_01 rounded-[20px] ml-10 sm:ml-auto md:ml-[120px] hover:bg-[#A0DEFF]">

                  <div className="flex flex-row  justify-start items-start w-[100%] mb-3.5 gap-[28px] sm:gap-1">
                    <Img

                      src="images/img_image5.png"
                      alt="imageFive"

                      className="w-[55px] md:h-auto mt-px sm:mt-0 object-cover"
                    />
                    <div className="flex flex-col items-start justify-start w-[100%] sm:w-full md:ml-[50px] gap-[1px] mt-[18px]">
                      <Heading as="h5" className="!text-black-900_cc">
                          Travel Plan
                      </Heading>
                      
                    </div>
                  </div>
                </div>

                </Link>
 
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start justify-start mt-[150px] w-[100%]">
          <Text
              className="text-black-900_b2 text-xl"
              size="txtInterMedium20Black900b2"
            >
              Best Location
            </Text>
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
              size="txtInterBold40"
            >
              Sri Lankan tourism
            </Text>
            </div>

          <div className="flex flex-col items-start justify-start mt-[2px] w-[90%] ">
           
            <div className="gap-5 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[20%] mt-[58px] w-full">
              <div className="h-[200px] relative w-full duration-300 transform hover:scale-105 cursor-pointer">
                <Img
                  className="h-[200px] m-auto object-cover rounded-[30px] w-full"
                  src="images/img_71.png"
                  alt="SeventyOne"
                />
                <Button
                  className="absolute bottom-[9%] cursor-pointer font-bold leading-[normal] left-[4%] min-w-[145px] rounded-[15px] text-center text-xl"
                  shape="round"
                  color="gray_600_99"
                  
                >
                  <Link to="/locationdetails"> Galle Fort{" "}</Link>
                 
                </Button>
              </div>
              <div className="h-[200px] relative w-full duration-300 transform hover:scale-105 cursor-pointer">
                <Img
                  className="h-[200px] m-auto object-cover rounded-[30px] w-full"
                  src="images/img_72.png"
                  alt="SeventyTwo"
                />
                <Button
                  className="absolute bottom-[7%] cursor-pointer font-bold leading-[normal] left-[5%] min-w-[191px] rounded-[20px] text-center text-xl"
                  shape="round"
                  color="gray_600_99"
                >
                  Ambuluwawa
                </Button>
              </div>
              <div className="h-[200px] relative w-full duration-300 transform hover:scale-105 cursor-pointer">
                <Img
                  className="h-[200px] m-auto object-cover rounded-[30px] w-full"
                  src="images/img_73.png"
                  alt="SeventyThree"
                />
                <Button
                  className="absolute bottom-[7%] cursor-pointer font-bold leading-[normal] left-[4%] min-w-[124px] rounded-[20px] text-center text-xl"
                  shape="round"
                  color="gray_600_99"
                >
                  Ella Rock
                </Button>
              </div>
              <div className="h-[200px] relative w-full duration-300 transform hover:scale-105 cursor-pointer">
                <Img
                  className="h-[200px] m-auto object-cover rounded-[30px] w-full"
                  src="images/img_71_323x444.png"
                  alt="SeventyOne"
                />
                <Button
                  className="absolute bottom-[6%] cursor-pointer font-bold leading-[normal] left-[4%] min-w-[145px] rounded-[20px] text-center text-xl"
                  shape="round"
                  color="gray_600_99"
                >
                  Trinkomali
                </Button>
              </div>
              <div className="h-[200px] relative w-full duration-300 transform hover:scale-105 cursor-pointer">
                <Img
                  className="h-[200px] m-auto object-cover rounded-[30px] w-full"
                  src="images/img_73_323x444.png"
                  alt="SeventyThree"
                />
                <Button
                  className="absolute bottom-[6%] cursor-pointer font-bold leading-[normal] left-[5%] min-w-[108px] rounded-[20px] text-center text-xl"
                  shape="round"
                  color="gray_600_99"
                >
                  Yaala
                </Button>
              </div>
              <div className="h-[200px] relative w-full duration-300 transform hover:scale-105 cursor-pointer">
                <Img
                  className="h-[200px] m-auto object-cover rounded-[30px] w-full"
                  src="images/img_72_323x300.png"
                  alt="SeventyTwo"
                />
                <Button
                  className="absolute bottom-[6%] cursor-pointer font-bold leading-[normal] left-[5%] min-w-[145px] rounded-[20px] text-center text-xl"
                  shape="round"
                  color="gray_600_99"
                >
                  Lion Rock
                </Button>
              </div>
              <div className="h-[200px] relative w-full duration-300 transform hover:scale-105 cursor-pointer">
                <Img
                  className="h-[200px] m-auto object-cover rounded-[30px] w-full"
                  src="images/img_73_323x444.png"
                  alt="SeventyThree"
                />
                <Button
                  className="absolute bottom-[6%] cursor-pointer font-bold leading-[normal] left-[5%] min-w-[108px] rounded-[20px] text-center text-xl"
                  shape="round"
                  color="gray_600_99"
                >
                  Yaala
                </Button>
              </div>
              <div className="h-[200px] relative w-full duration-300 transform hover:scale-105 cursor-pointer">
                <Img
                  className="h-[200px] m-auto object-cover rounded-[30px] w-full"
                  src="images/img_72_323x300.png"
                  alt="SeventyTwo"
                />
                <Button
                  className="absolute bottom-[6%] cursor-pointer font-bold leading-[normal] left-[5%] min-w-[145px] rounded-[20px] text-center text-xl"
                  shape="round"
                  color="gray_600_99"
                >
                  Lion Rock
                </Button>
              </div>
            </div>
          </div>
          <Button
             className="cursor-pointer  hover:bg-[#5AB2FF] hover:text-black-900 font-medium leading-[normal] min-w-[190px] mt-[90px]  rounded-[15px] text-center text-xl"
             color="black_900_01"
             size="lg1"
          >
            <Link to="/location"> view more</Link>
          </Button>
        </div>

        <Footer/>

      </div>
    </>
  );
};

export default LandingPageUIPage;

         
