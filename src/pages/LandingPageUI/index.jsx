import React from "react";

import { Button, Img, Line, List, Text } from "components";

import { Heading } from "components/Heading/index.jsx";

import { Link } from "react-router-dom";


import Searchbar from "./searchbar.jsx";

import Navbar  from "../HotelBookingpage/nav"
const LandingPageUIPage = () => {
  return ( 
    <>

      <div className=" bg-bg1-20 flex flex-col font-inter items-center justify-start mx-auto px-3 pt-3 w-full">




        <div className="md:h-[1024px] md:flex-col sm:h-[703px] h-[756px]   w-full mx-auto md:px-5 relative ">

          <div className="absolute md:h-[1024px] h-[703px] inset-x-[0] mx-auto top-[0] w-full">

            <Img
              className="h-[703px] m-auto object-cover rounded-[30px] w-full"
              src="images/img_rectangle4.png"
              alt="heropicture"
            />

            <div className="absolute flex flex-col justify-start right-[7%] top-[4%] w-[76%]">

              <Text
                className="ml-2 md:ml-[10]  md:text-5xl sm:mt-[-20%] text-6xl text-black-900 text-center justify-start absolute right-[14%] top-[10%]"
                size="txtInterBold60"
              >
                Traveling opens the doors to creating memories
              </Text>
              
              <Text
                className=" md:ml-[0] ml-[-100px] mt-60 sm:mt-60 mr-[50px] sm:text-[21px] md:text-[23px] text-[25px] text-center text-white-A700 "
                size="txtInterMedium25"
              >
                Exploring Sri Lanka is an unforgettable adventure
              </Text>

                  <section>
                     <Searchbar/>
                  </section>

            </div>

          </div>

        </div>





        <div className="flex flex-row md:flex-col w-[92%] mt-[-115px] gap-[52px] z-[5]">
            <div className="flex flex-col ml-12 sm:ml-[0px] md:ml-[0px] sm:mt-[200px] md:mt-[-80px] items-center justify-center w-[22%] md:w-full gap-[9px] p-[17px] bg-white-A700 shadow-xs rounded-[20px]">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
                size="txtInterMedium40"
              >
                10M +
              </Text>
              <Text
                className="text-black-900 text-center text-xl"
                size="txtInterMedium20"
              >
                Total Customer
              </Text>
            </div>


            <div className="flex flex-col items-center justify-start w-[22%] md:w-full gap-[9px] p-[17px] bg-white-A700 shadow-xs rounded-[20px]">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
                size="txtInterMedium40"
              >
                24 +
              </Text>
              <Text
                className="text-black-900 text-center text-xl"
                size="txtInterMedium20"
              >
                Tour Guiders
              </Text>
            </div>
            <div className="flex flex-col items-center justify-center w-[22%] md:w-full gap-[9px] p-[17px] bg-white-A700 shadow-xs rounded-[20px]">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
                size="txtInterMedium40"
              >
                200 +
              </Text>
              <Text
                className="text-black-900 text-center text-xl"
                size="txtInterMedium20"
              >
                Hotels
              </Text>
            </div>

            
            <div className="flex flex-col mr-12 items-center justify-center w-[22%] md:w-full gap-[9px] p-[17px] bg-white-A700_01 shadow-xs rounded-[20px]">
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











        <div className="flex flex-col items-center justify-start max-w-[1268px] mt-[70px] mx-auto md:px-5 w-full">
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
                className="sm:flex-col   flex-row md:gap-10 gap-16 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-[70px] ml-20 md:ml-auto md:w-full  w-[88%] "
                orientation="horizontal">

                <div className="h-[400px] relative rounded-[20px] shadow-bs w-full">
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


                <div className="h-[400px] relative rounded-[20px] shadow-bs w-full"> 
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



                <div className="h-[400px] relative rounded-[20px] shadow-bs w-full">
                 
                 
                 
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

              </List>
              </div>
            </div>
          </div>




          <Button
            className="cursor-pointer font-medium leading-[normal] min-w-[190px] mt-[70px] rounded-[26px] text-center text-xl"
            color="black_900_01"
            size="md"
          >
            <Link to="/allpackagespageui">view more</Link>
            
          </Button>



          <div className="flex flex-row  w-[72%] md:w-full mt-[100px] sm:mt-[70px] md:mt-[70px] ml-[10px]">
            <div className="flex md:flex-col flex-row md:gap-[41px] items-center justify-between w-full">
              
              
              <Img
                src="images/travel2.webp"
                alt="image"
                className="w-[50%] h-[650px] md:w-full md:h-auto object-cover rounded-[20px]"
              />


              <div className="flex flex-col ml-[15px] items-start justify-start w-[47%] md:w-full  bg-c" >
                <Text size="txtInterMedium20Black900b2" as="p" className="text-black-900_b2 text-xl ml-10 sm:ml-[-10px] md:ml-[-10px]">
                  How it works
                </Text>
                <Text size="txtInterMedium50" as="p" className="text-black-900 w-max text-[41px] ml-10 sm:ml-[-10px] md:ml-[-10px]">
                  One Click For You
                </Text>


                
                  
                  
                  <Link to="tourguidersui"> 

                  <div className="flex flex-row justify-end w-[350px] md:w-[400px] mt-[19px] p-[10px] bg-white-A700_01 rounded-[20px] ml-10 sm:ml-auto md:ml-[120px]">
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

                 <div className="flex flex-row justify-end w-[350px] md:w-[400px] mt-[12px] p-[8px] bg-white-A700_01 rounded-[20px] ml-10 sm:ml-auto md:ml-[120px]">
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

                <div className="flex flex-row justify-end w-[350px] md:w-[400px] mt-[12px] p-[8px] bg-white-A700_01 rounded-[20px] ml-10 sm:ml-auto md:ml-[120px]">
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
                <div className="flex flex-row justify-end w-[350px] md:w-[400px] mt-[12px] p-[8px] bg-white-A700_01 rounded-[20px] ml-10 sm:ml-auto md:ml-[120px]">
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
                <div className="flex flex-row justify-end w-[350px] md:w-[400px] mt-[19px] p-[8px] bg-white-A700_01 rounded-[20px] ml-10 sm:ml-auto md:ml-[120px]">
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












          <div className="flex flex-col items-start justify-start mt-[129px] w-[100%]">
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
              
              <div className="h-[200px] relative w-full">
                <Img
                  className="h-[200px] m-auto object-cover rounded-[30px] w-full"
                  src="images/img_71.png"
                  alt="SeventyOne"
                />
                <Button
                  className="absolute bottom-[9%] cursor-pointer font-bold leading-[normal] left-[4%] min-w-[145px] rounded-[20px] text-center text-xl"
                  shape="round"
                  color="gray_600_99"
                  
                >
                  <Link to="/locationdetails"> Galle Fort{" "}</Link>
                 
                </Button>
              </div>
              <div className="h-[200px] relative w-full">
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
              <div className="h-[200px] relative w-full">
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
              <div className="h-[200px] relative w-full">
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
              <div className="h-[200px] relative w-full">
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
              <div className="h-[200px] relative w-full">
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

              <div className="h-[200px] relative w-full">
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
              <div className="h-[200px] relative w-full">
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
            className="cursor-pointer font-medium leading-[normal] min-w-[190px] mt-[59px] rounded-[26px] text-center text-xl"
            color="black_900_01"
            size="md"
          >
            <Link to="/location"> view more</Link>
          </Button>
        </div>












        <footer className="bg-black-900_02 flex items-center justify-center mt-28 md:px-5 w-full">
          <div className="flex flex-col items-center justify-center ml-[290px] mr-[103px] my-[98px] w-[73%]">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="flex md:flex-1 flex-col gap-[31px] items-start justify-start md:mt-0 mt-0.5 w-[70%] md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                    size="txtInterBold25"
                  >
                    Company
                  </Text>
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                    size="txtInterBold25WhiteA700"
                  >
                    Contact Us
                  </Text>
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                    size="txtInterBold25"
                  >
                    Quick Link
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[91%] md:w-full">
                  <Text
                    className="text-[13px] text-red-50"
                    size="txtInterRegular13"
                  >
                    <>
                      Blog
                      <br />
                      <br />
                      Privacy Policy
                      <br />
                      <br />
                      FAQ’s
                      <br />
                      <br />
                      Contact
                    </>
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[213px] text-[13px] text-white-A700"
                    size="txtInterRegular13WhiteA700"
                  >
                    <>
                      NO: 1, Main Street, Galle,
                      <br />
                      Sri Lanka
                      <br />
                      <br />
                      +9411-111-111
                      <br />
                      <br />
                      vta@gmail.com
                    </>
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[147px] text-[13px] text-white-A700"
                    size="txtInterRegular13WhiteA700"
                  >
                    <>
                      Packages
                      <br />
                      <br />
                      Services
                      <br />
                      <br />
                      Gallery
                    </>
                  </Text>
                </div>
              </div>
              <div className="md:h-[101px] h-[114px] relative w-[18%] md:w-full">
                <div className="md:h-[101px] h-[114px] m-auto w-full">
                  <Text
                    className="absolute right-[2%] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700 top-[0]"
                    size="txtInterBold25"
                  >
                    Social Share
                  </Text>
                  <Img
                    className="absolute bottom-[20%] h-[59px] object-cover right-[0] w-[58px]"
                    src="images/img_twitter.png"
                    alt="twitter"
                  />
                  <Img
                    className="absolute bottom-[0] h-[101px] left-[0] object-cover w-[101px]"
                    src="images/img_facebook.png"
                    alt="facebook"
                  />
                </div>
                <Img
                  className="absolute bottom-[23%] h-[51px] object-cover right-[31%] w-[27%]"
                  src="images/img_instagram.png"
                  alt="instagram"
                />
              </div>
            </div>
          </div>
        </footer>




      </div>
    </>
  );
};

export default LandingPageUIPage;

         

