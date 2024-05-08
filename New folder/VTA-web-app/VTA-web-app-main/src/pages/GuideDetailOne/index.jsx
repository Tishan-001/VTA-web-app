import React from "react";



import { Button, Img, Line, List, Text } from "components";

import { RatingBar } from "components/RatingBar";
import { Heading } from "components/Heading";
import Footer from "components/Footer";


export default function GuideDetailOnePage() {
  return (
    <>
     
      <div className="flex flex-col items-center justify-start w-full pt-4 gap-[228px] bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full md:px-5 max-w-[1418px]">
          <div className="flex flex-col items-center justify-start w-full">
           
           
            <div className="flex flex-col items-start justify-start w-full pl-[79px] pr-14 py-[79px] md:p-5 bg-lime-800 rounded-[30px]">
             
             
              <div className="flex flex-col items-start justify-start mt-[11px] mb-[61px] gap-[45px]">
                 <Text
                      className="md:text-5xl text-[80px] text-white-A700"
                      size="txtInterBold80"
                 >
                  Book Your Guide
                </Text>
                <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                size="txtInterMedium30">
                  Embark on Your Journey Where Dreams Meet Destinations - Book Your Adventure with Seamless Ease
                </Text>
              </div>


            </div>
           
           
            <div className="flex flex-row md:flex-col justify-between items-center w-[83%] md:w-full mt-[254px] md:gap-10">
              
              
              <Img
                src="images/img_ellipse_6.png"
                alt="circleimage"
                className="h-[543px] w-[543px] md:h-auto rounded-[50%]"
              />

              
              <div className="flex flex-col items-center justify-start w-[47%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full gap-[52px]">
                  <div className="flex flex-col items-center justify-start w-[98%] md:w-full gap-[52px]">
                   
                   
                    <div className="flex flex-row sm:flex-col justify-between items-center w-full sm:gap-10">
                      <Img
                        src="images/img_image_56.png"
                        alt="imagefiftysix"
                        className="w-[59px] md:h-auto object-cover"
                      />
                       <div className="flex flex-row justify-start w-[82%] sm:w-full p-7 sm:p-5 bg-gray-600_99 rounded-[20px]">
                        <Text size="md" as="p" className="w-[85%] ml-3.5 !text-black-900_02 !font-medium">
                          <>
                            Jame Parise
                          
                          </>
                        </Text>
                      </div>
                    </div>
                   
                   
                    <div className="flex flex-row sm:flex-col justify-between items-center w-full sm:gap-10">
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
                    <div className="flex flex-row sm:flex-col justify-start items-center w-full gap-[40px] sm:gap-5">
                     

                      <Img
                        src="images/img_depositphotos_8.png"
                        alt="imagefiftysix"
                        className="w-[59px] md:h-auto object-cover"
                      />
                     
                        <div className="flex flex-row  gap-[40px] justify-start w-[82%] sm:w-full p-7 sm:p-5 bg-gray-600_99 rounded-[20px]">
                        <Text size="md" as="p" className="w-[85%] ml-3.5 !text-black-900_02 !font-medium">
                          <>
                            150$
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>




                  <div className="flex flex-row sm:flex-col justify-start items-center w-full gap-11 sm:gap-5">
                   
                      
                      <Img
                        src="images/img_download_removebg_preview.png"
                        alt="imagefiftysix"
                        className="w-[59px] md:h-auto object-cover"
                      />
                     
                      
                    
                     <div className="flex flex-row justify-start w-[82%] sm:w-full p-7 sm:p-5 bg-gray-600_99 rounded-[20px]">
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




           


          



            <div className="flex flex-col mt-20 items-start justify-start w-[80%] pl-[79px] pr-14 py-[79px] md:p-5  bg-gray-600_99 rounded-[30px]">
             
             
             <div className="flex flex-col items-start justify-start mt-[11px] mb-[61px] gap-[45px]">
                <Text
                     className="md:text-5xl text-[20px] text-black-900 font-bold"
                     size="txtInterBold20"
                >
                 Description:
               </Text>
               <Text
               className="text-2xl sm:text-[26px] md:text-[28px] text-black-900"
               size="txtInterMedium30">
                  Experience unmatched luxury at [Hotel Name], where refined elegance meets exceptional service.
                    Immerse yourself in a world of comfort and sophistication in the heart of [City or Location].
                  
               </Text>
             </div>


           </div>
          



            <Button
              color="bg-gray-600_99"
              size="xl"
              className="mt-[52px] h-14 bg-gray-600_99 sm:px-5 text-black-900 font-light shadow-xs min-w-[188px] rounded-[37px] sm:min-w-full"
            >
              Book Now
            </Button>
          </div>
        </div>
        <Footer className="bg-black-900_01 flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
}
