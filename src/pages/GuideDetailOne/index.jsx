import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Img, Line, List, Text } from "components";
import { Heading } from "components/Heading";
import Footer from "components/Footer";
import { Link } from "react-router-dom";
import Navbar from "components/Navbar";


export default function GuideDetailOnePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [tourGuide, setTourGuide] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/tourguides/tourguide/${id}`);
        if(!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setTourGuide(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [id]);

  const handeleBook = () => {
    const guiderId = tourGuide.id;
    navigate(`/tourguidebooking/${guiderId}`);
  }

  

  if (!tourGuide) {
    return <div>Loading...</div>; // Render a loading state if data isn't yet available
  }
  
  return (
    <>

    <Navbar/>
     
      <div className="flex flex-col items-center justify-start w-full pt-4 gap-[200px]  bg-bg1-20">
        <div className="flex flex-col items-center justify-start w-full md:px-5 px-10">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-start justify-start w-[80%] md:w-full h-[300px] pl-[79px] pr-14 py-[79px] md:p-5 bg-lime-800 rounded-[30px]">
              <div className="flex flex-col items-start justify-center mt-[11px] mb-[61px] gap-[45px]">
                 <Text
                      className="md:text-5xl sm:text-4xl text-[50px] text-white-A700"
                      size="txtInterBold80"
                 >
                  Book Your Guide
                </Text>
                <Text
                className="text-2xl sm:text-2xl md:text-2xl text-white-A700"
                size="txtInterMedium30">
                  Embark on Your Journey Where Dreams Meet Destinations - Book Your Adventure with Seamless Ease
                </Text>
              </div>
            </div>
            <div className="flex flex-row md:flex-col justify-between items-center w-[63%] md:w-full mt-[100px] md:gap-10">
              <Img
                src={tourGuide.media}
                alt="circleimage"
                className="h-[543px] w-[543px] sm:h-[250px] sm:w-[250px] object-cover md:h-auto rounded-[50%]"
              />
              <div className="flex flex-col items-center justify-start w-[47%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full gap-[52px]">
                  <div className="flex flex-col items-center justify-start w-[98%] md:w-[80%] sm:w-full gap-[52px]">
                    <div className="flex flex-row sm:flex-row justify-between items-center w-full sm:gap-5">
                      <Img
                        src="../images/img_image_56.png"
                        alt="imagefiftysix"
                        className="w-[40px] md:h-auto object-cover"
                      />
                       <div className="flex flex-row justify-start w-[82%] sm:w-full p-7 sm:p-5 bg-gray-600_99 rounded-[20px]">
                        <Text size="md" as="p" className="w-[85%] ml-3.5 !text-black-900_02 !font-medium">
                          <>
                            {tourGuide.name}
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row sm:flex-row justify-between items-center w-full sm:gap-5 sm:mt-[-20px]">
                      <Img
                        src="../images/img_12_129860_map_l.png"
                        alt="imagefiftysix"
                        className="w-[40px] md:h-auto object-cover"
                      />
                     
                      <div className="flex flex-row justify-start w-[82%] sm:w-full p-7 sm:p-5 bg-gray-600_99 rounded-[20px]">
                        <Text size="md" as="p" className="w-[40%] ml-3.5 !text-black-900_02 !font-medium">
                          <>
                            {tourGuide.address}
                          </>
                        </Text>
                      </div>

                    </div>
                    <div className="flex flex-row sm:flex-row justify-between items-center w-full sm:gap-5 sm:mt-[-20px]">
                      <Img
                        src="../images/img_depositphotos_8.png"
                        alt="imagefiftysix"
                        className="w-[40px] md:h-auto object-cover"
                      />
                        <div className="flex flex-row  gap-[40px] justify-start w-[82%] sm:w-full p-7 sm:p-5 bg-gray-600_99 rounded-[20px]">
                        <Text size="md" as="p" className="w-[85%] ml-3.5 !text-black-900_02 !font-medium">
                          <>
                            {tourGuide.price}$
                          </>
                        </Text>
                      </div>
                    </div>

                    <div className="flex flex-row sm:flex-row justify-between items-center w-full sm:gap-5 sm:mt-[-20px]">
                      <Img
                        src="../images/img_download_removebg_preview.png"
                        alt="imagefiftysix"
                        className="w-[40px] md:h-auto object-cover"
                      />
                     <div className="flex flex-row justify-start w-[82%] sm:w-full p-7 sm:p-5 bg-gray-600_99 rounded-[20px]">
                        <Text size="md" as="p" className="w-[85%] ml-3.5 !text-black-900_02 !font-medium">
                          <>
                            {tourGuide.email}
                          </>
                        </Text>
                      </div>
                   </div>
                 </div>
                </div>
                 
              </div>
            </div>
            <div className="flex flex-col mt-20 items-start justify-start w-[80%] sm:w-[100%] pl-[40px] py-[20px] md:p-5  bg-gray-600_99 rounded-[30px]">
             <div className="flex flex-col items-start justify-start mt-[10px] mb-[61px] gap-[45px]">
                <Text
                     className="md:text-3xl sm:text-2xl text-[30px] text-black-900 font-bold"
                     size="txtInterBold20"
                >
                 Description:
               </Text>
               <Text
               className="text-2xl sm:text-[20px] md:text-[28px] text-black-900"
               size="txtInterMedium30">
                  {tourGuide.description}
               </Text>
             </div>
           </div>
              <Button
                  color="bg-gray-600_99"
                  size="xl"
                  className="mt-[52px] h-14 bg-gray-600_99 sm:px-5 text-black-900 font-light shadow-xs min-w-[188px] rounded-[10px] sm:min-w-full hover:bg-green-500"
                  onClick={() => handeleBook()}
                >
                  Book Now
                </Button>
            
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}
