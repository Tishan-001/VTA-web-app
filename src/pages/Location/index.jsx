import React from "react";

import { Button, Img, Text , Input } from "../../components";
import { RatingBar } from "components/RatingBar";
import { Heading } from "components/Heading";

import Navbar from "components/Navbar";

import Footer from "components/Footer";

import { Link } from "react-router-dom";

export default function Location() {
  return (
    <>

      <Navbar/>
      
      <div className="flex flex-col items-center justify-start w-full pt-4 gap-[1px] bg-bg1-20">
        
        
        
        <div className="flex flex-col items-center justify-start w-full gap-[254px] md:px-5 max-w-[1418px]">
         
          <div className="flex flex-col items-start justify-start w-full pl-[79px] pr-14 py-[79px] md:p-5 bg-teal2-400_01 rounded-[30px]">
           
           
              <div className="flex flex-col items-start justify-start mt-[11px] mb-[61px] gap-[45px]">
                 <Text
                      className="md:text-4xl text-[50px] text-white-A700 text-center"
                      size="txtInterBold80"
                 >
                  Tourism Locations
                </Text>
                <Text
                className="text-3xl sm:text-[20px] md:text-[24px] text-justify text-white-A700"
                size="txtInterMedium30">
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                  alteration in some form, by injected humour.
                </Text>
              </div>

          </div>

        </div>


         <div className="gap-[50px] flex flex-col mt-[150px] md:w-[90%] sm:mt-[50px]">
                       <div className="flex flex-col-3   w-[100%]  gap-[10px] ">
                          <div className="flex sm:flex-col justify-center gap-[20px] sm:gap-[20px] sm mt-[2px]">
                            <div className="h-[200px] relative  sm:h-[200px] sm:w-full  ">
                                    <Img
                                    src="images/images/img_image_73.png"
                                    alt="imageseventythr"
                                    className="h-[240px] w-[400px] object-cover rounded-[10px]  sm:h-[200px] sm:w-full "
                                  />
                                  <Button
                                    className="absolute bottom-[1%] cursor-pointer font-bold leading-[normal] left-[4%] min-w-[145px] rounded-[20px] text-center text-xl"
                                    shape="round"
                                    color="gray_600_99"
                                    
                                  >
                                    <Link to="/locationdetails"> Galle Fort{" "}</Link>
                                  
                                  </Button>
                            </div>


                            <div className="h-[200px] relative  sm:h-[200px] sm:w-full ">
                                  <Img
                                    src="images/images/img_image_72.png"
                                    alt="imageseventytwo"
                                    className="w-[200px] h-[240px]  sm:h-[200px] sm:w-full  object-cover rounded-[10px]"
                                  />
                                  <Button
                                    className="absolute bottom-[1%] cursor-pointer font-bold leading-[normal] left-[4%] min-w-[15px] rounded-[20px] text-center text-xl"
                                    shape="round"
                                    color="gray_600_99"
                                    
                                  >
                                    <Link to="/locationdetails"> Galle Fort{" "}</Link>
                                  
                                  </Button>
                            </div>

                            <div className="h-[200px] relative  sm:h-[200px] sm:w-full ">
                                 
                                  <Img
                                    src="images/images/img_image_73.png"
                                    alt="imageseventythr"
                                    className="h-[240px] w-[400px] object-cover rounded-[10px]  sm:h-[200px] sm:w-full "
                                  />
                                  <Button
                                    className="absolute bottom-[1%] cursor-pointer font-bold leading-[normal] left-[4%] min-w-[145px] rounded-[20px] text-center text-xl"
                                    shape="round"
                                    color="gray_600_99"
                                    
                                  >
                                    <Link to="/locationdetails"> Galle Fort{" "}</Link>
                                  
                                  </Button>
                            </div>

                          </div>
                        </div>






                        <div className="flex flex-col w-[100%] md:w-full gap-[10px]">
                          <div className="flex sm:flex-col justify-center gap-[20px] mt-[2px]">
                            <div className="h-[200px] relative   sm:h-[200px] sm:w-full ">
                                    <Img
                                    src="images/images/img_image_73.png"
                                    alt="imageseventythr"
                                    className="h-[240px] w-[400px]  sm:h-[200px] sm:w-full  object-cover rounded-[10px]"
                                  />
                                  <Button
                                    className="absolute bottom-[1%] cursor-pointer font-bold leading-[normal] left-[4%] min-w-[145px] rounded-[20px] text-center text-xl"
                                    shape="round"
                                    color="gray_600_99"
                                    
                                  >
                                    <Link to="/locationdetails"> Galle Fort{" "}</Link>
                                  
                                  </Button>
                            </div>

                            

                            <div className="h-[200px]  sm:h-[200px] sm:w-full  relative ">
                                 
                                  <Img
                                    src="images/images/img_image_73.png"
                                    alt="imageseventythr"
                                    className="h-[240px] w-[400px]  sm:h-[200px] sm:w-full  object-cover rounded-[10px]"
                                  />
                                  <Button
                                    className="absolute bottom-[1%] cursor-pointer font-bold leading-[normal] left-[4%] min-w-[145px] rounded-[20px] text-center text-xl"
                                    shape="round"
                                    color="gray_600_99"
                                    
                                  >
                                    <Link to="/locationdetails"> Galle Fort{" "}</Link>
                                  
                                  </Button>
                            </div>


                            <div className="h-[200px]   sm:h-[200px] sm:w-full  relative ">
                                  <Img
                                    src="images/images/img_image_72.png"
                                    alt="imageseventytwo"
                                    className="w-[200px] h-[240px]   sm:h-[200px] sm:w-full  object-cover rounded-[10px]"
                                  />
                                  <Button
                                    className="absolute bottom-[1%] cursor-pointer font-bold leading-[normal] left-[4%] min-w-[15px] rounded-[20px] text-center text-xl"
                                    shape="round"
                                    color="gray_600_99"
                                    
                                  >
                                    <Link to="/locationdetails"> Galle Fort{" "}</Link>
                                  
                                  </Button>
                            </div>
                            
                          </div>
                        </div>





                        <div className="flex flex-col w-[100%] md:w-full gap-[10px]">
                          <div className="flex sm:flex-col justify-center gap-[20px] mt-[2px]">
                            <div className="h-[200px]  sm:h-[200px] sm:w-full  relative ">
                                    <Img
                                    src="images/images/img_image_73.png"
                                    alt="imageseventythr"
                                    className="h-[240px] w-[400px]  sm:h-[200px]   object-cover rounded-[10px]"
                                  />
                                  <Button
                                    className="absolute bottom-[1%] cursor-pointer font-bold leading-[normal] left-[4%] min-w-[145px] rounded-[20px] text-center text-xl"
                                    shape="round"
                                    color="gray_600_99"
                                    
                                  >
                                    <Link to="/locationdetails"> Galle Fort{" "}</Link>
                                  
                                  </Button>
                            </div>

                            <div className="h-[200px]  sm:h-[200px] sm:w-full  relative ">
                                  <Img
                                    src="images/images/img_image_72.png"
                                    alt="imageseventytwo"
                                    className="w-[200px] h-[240px]  sm:h-[200px] sm:w-full  object-cover rounded-[10px]"
                                  />
                                  <Button
                                    className="absolute bottom-[1%] cursor-pointer font-bold leading-[normal] left-[4%] min-w-[15px] rounded-[20px] text-center text-xl"
                                    shape="round"
                                    color="gray_600_99"
                                    
                                  >
                                    <Link to="/locationdetails"> Galle Fort{" "}</Link>
                                  
                                  </Button>
                            </div>

                            <div className="h-[200px]  sm:h-[200px] sm:w-full  relative ">
                                 
                                  <Img
                                    src="images/images/img_image_73.png"
                                    alt="imageseventythr"
                                    className="h-[240px] w-[400px]   sm:h-[200px] sm:w-full  object-cover rounded-[10px]"
                                  />
                                  <Button
                                    className="absolute bottom-[1%] cursor-pointer font-bold leading-[normal] left-[4%] min-w-[145px] rounded-[20px] text-center text-xl"
                                    shape="round"
                                    color="gray_600_99"
                                    
                                  >
                                    <Link to="/locationdetails"> Galle Fort{" "}</Link>
                                  
                                  </Button>
                            </div>
                            
                          </div>
                        </div>

                  


                  </div> 

                  <Footer/>
     </div>
    



    </>
  );
}
