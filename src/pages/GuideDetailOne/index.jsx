import React from "react";



import { Button, Img, Line, List, Text } from "components";

import { RatingBar } from "components/RatingBar";
import { Heading } from "components/Heading";


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





        <footer className="flex justify-center items-center w-full pl-14 pr-[97px] py-[97px] md:p-5 bg-black-900_01">
          <div className="flex flex-row justify-center w-full mx-auto max-w-[1048px]">
            <div className="flex flex-row md:flex-col justify-between items-center w-full md:gap-10">
              <div className="flex flex-col items-start justify-start mt-0.5 gap-[31px] md:mt-0">
                <a href="#">
                  <Heading as="h4">Company</Heading>
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
                    <Heading as="h4">Contact Us</Heading>
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
                    <Heading as="h4">Quick Link</Heading>
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
                <div className="h-[119px] w-[25%] sm:w-full relative">
                  <Img
                    src="images/img_facebook.png"
                    alt="facebook_one"
                    className="h-[101px] w-[101px] bottom-0 left-0 m-auto object-cover absolute"
                  />
                  <div className="flex flex-row justify-end w-[86%] right-0 top-0 m-auto absolute">
                    <div className="flex flex-col items-end justify-start w-full gap-1.5">
                      <Heading as="h4" className="mr-1">
                        Social Share
                      </Heading>
                      <div className="flex flex-row justify-end items-center w-[67%] md:w-full">
                        <Button size="sm" shape="square" className="w-[47%] z-[1]">
                          <Img src="images/img_instagram.png" />
                        </Button>
                        <Img
                          src="images/img_twitter.png"
                          alt="twitter_one"
                          className="w-[58px] md:h-auto sm:w-full ml-[-2px] object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
