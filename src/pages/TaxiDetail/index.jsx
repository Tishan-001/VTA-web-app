import React from "react";

import { Button, Img, Text , Input } from "../../components";
import { RatingBar } from "components/RatingBar";
import { Heading } from "components/Heading";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

export default function TaxiDetail() {
  return (
    <>


      <Navbar/>
      <div className="flex flex-col items-center justify-start w-full pt-4 gap-[1px] bg-bg1-20 ">
        <div className="flex flex-col items-center justify-start w-full gap-[254px] md:px-5 max-w-[1400px]">
         
          <div className="flex flex-col items-start justify-start w-full h-[320px] md:h-auto pl-[59px] pr-14 py-[59px] md:p-5 bg-teal1-400 rounded-[30px]">
           
           
              <div className="flex flex-col items-start justify-center mt-[1px] mb-[61px] gap-[45px]">
                 <Text
                      className="md:text-5xl text-[80px] md:text-[30px] text-white-A700"
                      size="txtInterBold80"
                 >
                  Book Your Transport
                </Text>
                <Text
                className="text-3xl sm:text-[16px] md:text-[28px] text-white-A700"
                size="txtInterMedium30">
                  Embark on Your Journey Where Dreams Meet Destinations - Book Your Adventure with Seamless Ease
                </Text>
              </div>


          </div>


          <div className="flex flex-col items-start justify-start w-[84%] md:w-full mt-[-150px]">
            
            <div className="flex flex-row md:flex-col justify-between items-start w-[98%] md:w-full md:gap-10">
              <Img
                src="images/img_image_69.png"
                alt="imagesixtynine"
                className="w-[49%] md:w-full sm:h-[200px] md:h-[300px] mt-[15px] md:mt-0 object-cover rounded-[20px]"
              />


              <div className="flex flex-col items-center justify-start w-[47%] md:w-full mt-[35px] ">
                <div className="flex flex-col items-center justify-start w-full gap-[52px]">
                  <div className="flex flex-col items-center justify-start w-[98%] md:w-full gap-[52px]">
                   
                   
                  <div className="flex flex-row sm:flex-row  justify-between items-center w-full md:w-[80%] sm:w-full sm:gap-5">
                      <Img
                        src="images/img_image_56.png"
                        alt="imagefiftysix"
                        className="w-[59px]   object-cover"
                      />
                       <div className="flex flex-row justify-start w-[82%] sm:w-full p-7 sm:p-5 bg-gray-600_99 rounded-[20px]">
                        <Text size="md" as="p" className="w-[85%] ml-3.5 !text-black-900_02 !font-medium">
                          <>
                            Jame Parise
                          
                          </>
                        </Text>
                      </div>
                    </div>
                   
                   
                    <div className="flex flex-row sm:flex-row justify-between items-center w-full  md:w-[80%] sm:w-full sm:gap-5 sm:mt-[-20px]">
                      <Img
                        src="images/img_12_129860_map_l.png"
                        alt="imagefiftysix"
                        className="w-[59px] md:h-auto object-cover"
                      />
                     
                      <div className="flex flex-row justify-start w-[82%] sm:w-full p-7 sm:p-5 bg-gray-600_99 rounded-[20px]">
                        <Text size="md" as="p" className="w-[85%] ml-3.5 !text-black-900_02 !font-medium">
                          <>
                            No.2, Wackwella Road,
                            <br />
                            Galle, Sri Lanka
                          </>
                        </Text>
                      </div>

                    </div>
                    <div className="flex flex-row sm:flex-row justify-start items-center w-full md:w-[80%] sm:w-full gap-[40px] sm:gap-5 sm:mt-[-20px]">
                     

                      <Img
                        src="images/img_depositphotos_8.png"
                        alt="imagefiftysix"
                        className="w-[59px] md:h-auto object-cover"
                      />
                     
                        <div className="flex flex-row  gap-[40px] md:ml-[20px] sm:ml-[0px] justify-start w-[82%] sm:w-full p-7 sm:p-5 bg-gray-600_99 rounded-[20px]">
                        <Text size="md" as="p" className="w-[85%] ml-3.5 !text-black-900_02 !font-medium">
                          <>
                            150$
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>




                  <div className="flex flex-row sm:flex-row justify-start items-center w-full md:w-[80%] sm:w-full gap-11 sm:gap-5 sm:mt-[-20px]">
                   
                      
                      <Img
                        src="images/img_download_removebg_preview.png"
                        alt="imagefiftysix"
                        className="w-[59px] md:h-auto object-cover"
                      />
                     
                      
                    
                     <div className="flex flex-row justify-start md:ml-[20px] sm:ml-[0px]  w-[82%] sm:w-full p-7 sm:p-5 bg-gray-600_99 rounded-[20px]">
                        <Text size="md" as="p" className="w-[85%] ml-3.5 !text-black-900_02 !font-medium">
                          <>
                            user@gmail.com
                          </>
                        </Text>
                      </div>
                  </div>


                </div>
              </div>
            </div>
            

            <Heading size="md" as="h2" className="mt-16 !text-black-900_02 sm:text-3xl">
              Available Features
            </Heading>


            
            <div className="w-[80%] ml-[100px] sm:w-full mt-[50px] gap-[62px] grid-cols-2 md:grid-cols-1 md:gap-5 md:ml-[140px] sm:ml-[0px] grid">
             
              <div className="flex flex-row justify-start items-center w-full md:w-[80%] sm:w-full gap-9 p-[23px] sm:gap-9 sm:p-5 bg-blue_gray-100 rounded-[20px]">
                <Img
                  src="images/img_th_removebg_preview.png"
                  alt="without_driver"
                  className="w-[17%] md:h-[50px] md:w-[50px] sm:w-[50px] sm:h-[50px] ml-2.5 object-cover"
                />
                <Heading size="s" as="h3" className="!text-black-900_02">
                  Without Driver
                </Heading>
              </div>


              <div className="flex flex-row sm:flex-row justify-start items-center w-full md:w-[80%] sm:w-full gap-[33px] p-[23px] sm:gap-[33px] sm:p-5 bg-blue_gray-100 rounded-[20px]">
                <Img
                  src="images/img_285_2857331_gas.png"
                  alt="2852857331gas"
                  className="w-[18%] md:h-[50px] md:w-[50px] sm:w-[50px] sm:h-[50px] ml-2.5 sm:ml-2.5 object-cover"
                />
                <Heading size="s" as="h4" className="!text-black-900_02">
                  300km available fuel
                </Heading>
              </div>

              <div className="flex flex-row justify-start items-center w-full md:w-[80%] sm:w-full gap-9 p-[23px] sm:gap-9 sm:p-5 bg-blue_gray-100 rounded-[20px]">
                <Img
                  src="images/img_th_removebg_preview_119x103.png"
                  alt="without_driver"
                  className="w-[17%] md:h-[50px] md:w-[50px] sm:w-[50px] sm:h-[50px] ml-2.5 object-cover"
                />
                <Heading size="s" as="h3" className="!text-black-900_02">
                 4 Seat Available
                </Heading>
              </div>


              <div className="flex flex-row sm:flex-row justify-start items-center w-full md:w-[80%] sm:w-full gap-[33px] p-[23px] sm:gap-[33px] sm:p-5 bg-blue_gray-100 rounded-[20px]">
                <Img
                  src="images/img_6881962_removebg_preview.png"
                  alt="2852857331gas"
                  className="w-[18%] md:h-[50px] md:w-[50px] sm:w-[50px] sm:h-[50px] ml-2.5 sm:ml-2.5  object-cover"
                />
                <Heading size="s" as="h4" className="!text-black-900_02">
                      Vehicle Tracking{" "}
                </Heading>
              </div>
              <div className="flex flex-row justify-start items-center w-full md:w-[80%] sm:w-full gap-9 p-[23px] sm:gap-9 sm:p-5 bg-blue_gray-100 rounded-[20px]">
                <Img
                  src="images/img_th_removebg_preview_111x114.png"
                  alt="without_driver"
                  className="w-[17%] md:h-[50px] md:w-[50px] sm:w-[50px] sm:h-[50px] ml-2.5 object-cover"
                />
                <Heading size="s" as="h3" className="!text-black-900_02">
                  400L Space Available
                </Heading>
              </div>


              <div className="flex flex-row sm:flex-row justify-start items-center w-full md:w-[80%] sm:w-full gap-[33px] p-[23px] sm:gap-[33px] sm:p-5 bg-blue_gray-100 rounded-[20px]">
                <Img
                  src="images/img_285_2857331_gas.png"
                  alt="2852857331gas"
                  className="w-[18%] md:h-[50px] md:w-[50px] sm:w-[50px] sm:h-[50px] ml-2.5 sm:ml-2.5 object-cover"
                />
                <Heading size="s" as="h4" className="!text-black-900_02">
                  300km available fuel
                </Heading>
              </div>


            </div>



            <div className="flex flex-col mt-20 ml-[100px] md:ml-auto md:w-full  items-start justify-start w-[80%] pl-[79px] pr-14 py-[79px] md:p-5  bg-gray-600_99 rounded-[30px]">
             
             
             <div className="flex flex-col items-start justify-start mt-[11px] mb-[61px] gap-[45px]">
                <Text
                     className="md:text-3xl text-[20px] text-black-900 font-bold"
                     size="txtInterBold20"
                >
                 Description:
               </Text>
               <Text
               className="text-2xl sm:text-[20px]   md:text-[24px] text-justify text-black-900"
               size="txtInterMedium30">
                  Experience unmatched luxury at [Hotel Name], where refined elegance meets exceptional service.
                    Immerse yourself in a world of comfort and sophistication in the heart of [City or Location].
                  
               </Text>
             </div>


           </div>
          



            <Button
             className="cursor-pointer  hover:bg-[#5AB2FF] hover:text-black-900 font-medium leading-[normal] min-w-[190px] mt-[90px] ml-[480px] md:ml-[80px] rounded-[15px] text-center text-xl"

             color="black_900_01"
             size="lg1"
            >
              Book Now
            </Button>



          </div>
        </div>





       <Footer />





      </div>
    </>
  );
}
