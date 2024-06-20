import React from "react";

import { Button, Img, Text , Input } from "../../components";
import { RatingBar } from "components/RatingBar";
import { Heading } from "components/Heading";
import Searchbar from "./searchbar.jsx";
import { Link } from "react-router-dom";
import Footer from "components/Footer";

export default function TaxiDetail() {
  return (
    <>
      
      <div className="bg-bg1-20">
      <div className="flex flex-col items-center justify-start w-full pt-4 gap-[664px]">
        
        
        
        <div className="flex flex-col items-center justify-start w-full gap-[254px] md:px-5">
         
          <div className="flex flex-col items-start justify-start w-full pl-[79px] pr-14 py-[79px] md:p-5 bg-teal2-400_01 rounded-[30px]">
           
           
              <div className="flex flex-col items-center justify-center mt-[11px] mb-[61px] gap-[45px]">
                 <Text
                      className="md:text-5xl text-[80px] text-white-A700"
                      size="txtInterBold80"
                 >
                  Find Your Best Doctor
                </Text>
                <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700 text-center" 
                size="txtInterMedium30">
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration in some form, by injected humour.
                </Text>
              </div>

          </div>

        </div>
      </div>

      <section className="flex justify-center items-center h-screen mt-[-400px] mb-[-400px]">
        <Searchbar/>
      </section>


      <Heading size="3xl" as="h2" className="mt-[103px] ml-[200px] md:ml-5 !text-black-900_02">
          Doctors
        </Heading>
        <div className="md:gap-5 gap-[91px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-items-center mx-auto min-h-[auto] mt-9 w-[76%] md:w-full md:ml-auto">
           
         
           
            <div className="h-[500px] relative rounded-[20px] shadow-bs w-full">
              <Img
                className="h-[500px] m-auto object-cover rounded-[20px] w-full"
                src="images/img_5_2_01.png"
                alt="FiftyTwo"
              />
              <div className="absolute flex flex-col md:gap-10 gap-[352px] h-max inset-[0] justify-center m-auto w-[93%]">
                <div className="bg-gray-700_66_01 flex flex-row gap-2.5 items-center justify-end md:ml-[0] ml-[220px] mr-8 p-[5px] rounded-[18px] w-[29%] md:w-full">
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
                <div className="bg-gray-600_99 flex flex-col items-center justify-end p-3.5 rounded-[20px] w-full">
                  <div className="flex flex-row items-start justify-between mt-[5px] w-[94%] md:w-full">
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-white-A700 text-xl"
                        size="txtInterSemiBold20"
                      >
                        Dr. Pandula Kumara
                      </Text>
                      <Text
                        className="text-white-A700 text-xl"
                        size="txtInterMedium20WhiteA700"
                      >
                         Hart Specialist
                      </Text>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>



            <div className="h-[500px] relative rounded-[20px] shadow-bs w-full">
              <Img
                className="h-[500px] m-auto object-cover rounded-[20px] w-full"
                src="images/img_5_2_1.png"
                alt="image"
              />
              <div className="absolute flex flex-col md:gap-10 gap-[352px] h-max inset-[0] justify-center m-auto w-[93%]">
                <div className="bg-gray-700_66_01 flex flex-row gap-2.5 items-center justify-end md:ml-[0] ml-[220px] mr-2 p-[5px] rounded-[18px] w-[29%] md:w-full">
                  <Img
                    className="h-[21px] w-[22px]"
                    src="images/img_star6_21x22.svg"
                    alt="starSix"
                  />
                  <Text
                    className="mr-4 text-white-A700_01 text-xl"
                    size="txtInterMedium20WhiteA70001"
                  >
                    4.9
                  </Text>
                </div>
                <div className="bg-gray-600_99 flex flex-col items-center justify-end p-3.5 rounded-[20px] w-full">
                  <div className="flex flex-row items-start justify-between mt-[5px] w-[94%] md:w-full">
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-white-A700 text-xl"
                        size="txtInterSemiBold20"
                      >
                        Dr. Ishani Devindi
                      </Text>
                      <Text
                        className="text-white-A700 text-xl"
                        size="txtInterMedium20WhiteA700"
                      >
                        Skin Specialist
                      </Text>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>




            <div className="h-[500px] relative rounded-[20px] shadow-bs w-full">
              <Img
                className="h-[500px] m-auto object-cover rounded-[20px] w-full"
                src="images/img_5_2_500x380.png"
                alt="image"
              />
              <div className="absolute flex flex-col md:gap-10 gap-[352px] h-max inset-[0] justify-center m-auto w-[93%]">
                <div className="bg-gray-700_66_01 flex flex-row gap-2.5 items-center justify-end md:ml-[0] ml-[220px] mr-2 p-[5px] rounded-[18px] w-[29%] md:w-full">
                  <Img
                    className="h-[21px] w-[22px]"
                    src="images/img_star6_1.svg"
                    alt="starSix"
                  />
                  <Text
                    className="mr-4 text-white-A700_01 text-xl"
                    size="txtInterMedium20WhiteA70001"
                  >
                    4.9
                  </Text>
                </div>
                <div className="bg-gray-600_99 flex flex-col items-center justify-end p-3.5 rounded-[20px] w-full">
                  <div className="flex flex-row items-start justify-between mt-[5px] w-[94%] md:w-full">
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-white-A700 text-xl"
                        size="txtInterSemiBold20"
                      >
                          Dr. Priyanath Jayasuriya
                      </Text>
                      <Text
                        className="text-white-A700 text-xl"
                        size="txtInterMedium20WhiteA700"
                      >
                         Dentist Specialist
                      </Text>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>


            <div className="h-[500px] relative rounded-[20px] shadow-bs w-full">
              <Img
                className="h-[500px] m-auto object-cover rounded-[20px] w-full"
                src="images/img_5_2_01.png"
                alt="FiftyTwo"
              />
              <div className="absolute flex flex-col md:gap-10 gap-[352px] h-max inset-[0] justify-center m-auto w-[93%]">
                <div className="bg-gray-700_66_01 flex flex-row gap-2.5 items-center justify-end md:ml-[0] ml-[220px] mr-8 p-[5px] rounded-[18px] w-[29%] md:w-full">
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
                <div className="bg-gray-600_99 flex flex-col items-center justify-end p-3.5 rounded-[20px] w-full">
                  <div className="flex flex-row items-start justify-between mt-[5px] w-[94%] md:w-full">
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-white-A700 text-xl"
                        size="txtInterSemiBold20"
                      >
                        Dr. Pandula Kumara
                      </Text>
                      <Text
                        className="text-white-A700 text-xl"
                        size="txtInterMedium20WhiteA700"
                      >
                         Hart Specialist
                      </Text>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>



            <div className="h-[500px] relative rounded-[20px] shadow-bs w-full">
              <Img
                className="h-[500px] m-auto object-cover rounded-[20px] w-full"
                src="images/img_5_2_1.png"
                alt="image"
              />
              <div className="absolute flex flex-col md:gap-10 gap-[352px] h-max inset-[0] justify-center m-auto w-[93%]">
                <div className="bg-gray-700_66_01 flex flex-row gap-2.5 items-center justify-end md:ml-[0] ml-[220px] mr-2 p-[5px] rounded-[18px] w-[29%] md:w-full">
                  <Img
                    className="h-[21px] w-[22px]"
                    src="images/img_star6_21x22.svg"
                    alt="starSix"
                  />
                  <Text
                    className="mr-4 text-white-A700_01 text-xl"
                    size="txtInterMedium20WhiteA70001"
                  >
                    4.9
                  </Text>
                </div>
                <div className="bg-gray-600_99 flex flex-col items-center justify-end p-3.5 rounded-[20px] w-full">
                  <div className="flex flex-row items-start justify-between mt-[5px] w-[94%] md:w-full">
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-white-A700 text-xl"
                        size="txtInterSemiBold20"
                      >
                        Dr. Ishani Devindi
                      </Text>
                      <Text
                        className="text-white-A700 text-xl"
                        size="txtInterMedium20WhiteA700"
                      >
                        Skin Specialist
                      </Text>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>




            <div className="h-[500px] relative rounded-[20px] shadow-bs w-full">
              <Img
                className="h-[500px] m-auto object-cover rounded-[20px] w-full"
                src="images/img_5_2_500x380.png"
                alt="image"
              />
              <div className="absolute flex flex-col md:gap-10 gap-[352px] h-max inset-[0] justify-center m-auto w-[93%]">
                <div className="bg-gray-700_66_01 flex flex-row gap-2.5 items-center justify-end md:ml-[0] ml-[220px] mr-2 p-[5px] rounded-[18px] w-[29%] md:w-full">
                  <Img
                    className="h-[21px] w-[22px]"
                    src="images/img_star6_1.svg"
                    alt="starSix"
                  />
                  <Text
                    className="mr-4 text-white-A700_01 text-xl"
                    size="txtInterMedium20WhiteA70001"
                  >
                    4.9
                  </Text>
                </div>
                <div className="bg-gray-600_99 flex flex-col items-center justify-end p-3.5 rounded-[20px] w-full">
                  <div className="flex flex-row items-start justify-between mt-[5px] w-[94%] md:w-full">
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-white-A700 text-xl"
                        size="txtInterSemiBold20"
                      >
                          Dr. Priyanath Jayasuriya
                      </Text>
                      <Text
                        className="text-white-A700 text-xl"
                        size="txtInterMedium20WhiteA700"
                      >
                         Dentist Specialist
                      </Text>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>


            

            


            
        </div>
        <Footer/>

      </div>

    </>
  );
}
