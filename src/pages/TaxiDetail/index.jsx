import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Img, Text, Input } from "../../components";
import { RatingBar } from "components/RatingBar";
import { Heading } from "components/Heading";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { useNavigate, useLocation } from "react-router-dom";

const featureIcons = {
  "Without Driver": "/images/img_th_removebg_preview.png",
  "300km available fuel": "/images/img_285_2857331_gas.png",
  "200km available fuel": "/images/img_285_2857331_gas.png",
  "4 Seat Available": "/images/img_th_removebg_preview_119x103.png",
  "Vehicle Tracking": "/images/img_6881962_removebg_preview.png",
  "400L Space Available": "/images/img_th_removebg_preview_111x114.png",
  "2 Raincort": "/images/Raincoat.png",

};

export default function TaxiDetail() {
  const location = useLocation();
  const { vehicle } = location.state;
  const navigate = useNavigate();
  const [transport, setTransport] = useState("");

  useEffect(() => {
    if (vehicle) {
      fetch(`http://localhost:5000/transports/transport-id/${vehicle.transportId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.text();
        })
        .then((text) => {
          if (text) {
            try {
              const data = JSON.parse(text);
              if (data != null) {
                setTransport(data);
              }
            } catch (error) {
              console.error('Error parsing JSON:', error);
            }
          } else {
            console.log("Error fetching transport: Empty response received");
          }
        })
        .catch((error) => {
          console.error("Error fetching transport: ", error);
        });
    }
  }, [vehicle]);

  if (!vehicle) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-start w-full pt-4 gap-[1px] bg-bg1-20">
        <div className="flex flex-col items-center justify-start w-full gap-[254px] md:px-5 max-w-[1400px]">
          <div className="flex flex-col items-start justify-start w-full h-[250px] md:h-auto pl-[59px] pr-14 py-[59px] md:p-5 bg-teal1-400 rounded-[30px]">
            <div className="flex flex-col items-start justify-center mt-[1px] mb-[61px] gap-[30px]">
              <Text className="md:text-5xl text-[60px] md:text-[30px] text-white-A700" size="txtInterBold80">
                Book Your Transport
              </Text>
              <Text className="text-2xl sm:text-[16px] md:text-[28px] text-white-A700" size="txtInterMedium30">
                Embark on Your Journey Where Dreams Meet Destinations - Book Your Adventure with Seamless Ease
              </Text>
            </div>
          </div>

          <div className="flex flex-col items-start justify-start w-[84%] md:w-full mt-[-180px]">
            <div className="flex flex-row md:flex-col justify-between items-start w-[98%] md:w-full md:gap-10">
              <Img src={vehicle.photo} alt="Vehicle Image" className="w-[49%] md:w-full sm:h-[300px] h-[525px] md:h-[300px] mt-[15px] md:mt-0 object-cover rounded-[20px]" />

              <div className="flex flex-col items-center justify-start w-[47%] md:w-full mt-[35px]">
                <div className="flex flex-col items-center justify-start w-full gap-[52px]">
                  <div className="flex flex-col items-center justify-start w-[98%] md:w-full gap-[52px]">
                    <div className="flex flex-row sm:flex-row justify-start items-center w-full md:w-[80%] sm:w-full gap-[40px] sm:gap-5 sm:mt-[-20px]">
                      <Img src="/images/categry.png" alt="Price Icon" className="w-[40px] md:h-auto object-cover" />
                      <div className="flex flex-row gap-[40px] md:ml-[20px] sm:ml-[0px] justify-start w-[82%] h-[40px] md:h-[80px] sm:h-[80px] sm:w-full p-7 sm:p-5 bg-gray-600_99 rounded-[20px]">
                        <Text size="md" as="p" className="w-[85%] sm:mt-[8px]  ml-3.5 !text-black-900_02 !font-medium mt-[-15px]">
                          {vehicle.type}
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row sm:flex-row justify-start items-center w-full md:w-[80%] sm:w-full gap-[40px] sm:gap-5 sm:mt-[-20px]">
                      <Img src="/images/img_depositphotos_8.png" alt="Price Icon" className="w-[40px] md:h-auto object-cover" />
                      <div className="flex flex-row gap-[40px] md:ml-[20px] sm:ml-[0px] justify-start w-[82%] h-[40px] md:h-[80px] sm:h-[80px] sm:w-full p-7 sm:p-5 bg-gray-600_99 rounded-[20px]">
                        <Text size="md" as="p" className="w-[85%] sm:mt-[8px]  ml-3.5 !text-red-100 bold !font-medium mt-[-15px]">
                          ${vehicle.price} /day
                        </Text>
                      </div>
                    </div>

                    <div className="flex flex-row sm:flex-row justify-start items-center w-full md:w-[80%] sm:w-full gap-[40px] sm:gap-5 sm:mt-[-20px]">
                      <Img src="/images/img_12_129860_map_l.png" alt="Price Icon" className="w-[40px] md:h-auto object-cover" />
                      <div className="flex flex-row gap-[40px] md:ml-[20px] sm:ml-[0px] justify-start w-[82%] md:h-[80px] sm:h-[80px] h-[40px] sm:w-full p-7 sm:p-5 bg-gray-600_99 rounded-[20px]">
                        <Text size="md" as="p" className="w-[85%] ml-3.5 !text-black-900_02 !font-medium mt-[-15px]">
                          {transport.address}
                        </Text>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row sm:flex-row justify-start items-center w-full md:w-[80%] sm:ml-[-1px] sm:w-[350px] gap-11 sm:gap-5 sm:mt-[-20px]">
                    <Img src="/images/img_download_removebg_preview.png" alt="Other Icon" className="w-[40px] md:h-auto object-cover" />
                    <div className="flex flex-row justify-start md:ml-[20px] sm:ml-[0px] w-[82%] md:h-[80px] sm:h-[80px] h-[40px] sm:w-full p-7 sm:p-5 bg-gray-600_99 rounded-[20px]">
                      <Text size="md" as="p" className="w-[85%]  sm:mt-[8px] ml-3.5 sm:ml-[-10px] sm:!text-[15px]  !text-black-900_02 !font-medium mt-[-15px]">
                        {transport.email}
                      </Text>
                    </div>
                  </div>

                  <div className="flex flex-row sm:flex-row justify-start items-center w-full md:w-[80%] sm:w-full gap-11 sm:gap-5 sm:mt-[-20px]">
                    <Img src="/images/call.png" alt="Other Icon" className="w-[40px] md:h-auto object-cover" />
                    <div className="flex flex-row justify-start md:ml-[20px] sm:ml-[0px] w-[82%] md:h-[80px] sm:h-[80px] h-[40px] sm:w-full p-7 sm:p-5 bg-gray-600_99 rounded-[20px]">
                      <Text size="md" as="p" className="w-[85%] sm:w-[90%] sm:mt-[8px] ml-3.5 !text-black-900_02 !font-medium mt-[-15px]">
                        {transport.mobile}
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
            {vehicle.features.map((feature) => (
            <div key={feature} className="flex flex-row justify-start items-center w-full md:w-[80%] sm:w-full gap-9 p-[23px] sm:gap-9 sm:p-5 bg-blue_gray-100 rounded-[20px]">
                <Img src={featureIcons[feature]} alt={feature} className="w-[17%] md:h-[50px] md:w-[50px] sm:w-[50px] sm:h-[50px] ml-2.5 object-cover" />
                <Heading size="s" as="h3" className="!text-black-900_02">
                {feature}
                </Heading>
              </div>
            ))}

              
            </div>

            <div className="flex flex-col mt-20 ml-[100px] md:ml-auto md:w-full items-start justify-start w-[80%] pl-[79px] pr-14 py-[79px] md:p-5 bg-gray-600_99 rounded-[30px]">
              <div className="flex flex-col items-start justify-start mt-[11px] mb-[61px] gap-[45px]">
                <Text className="md:text-3xl text-[20px] text-black-900 font-bold" size="txtInterBold20">
                  Description:
                </Text>
                <Text className="text-2xl sm:text-[20px] md:text-[24px] text-justify text-black-900" size="txtInterMedium30">
                  {transport.description}
                </Text>
              </div>
            </div>
            <Button className="cursor-pointer  hover:bg-[#5AB2FF] hover:text-black-900 font-medium leading-[normal] min-w-[190px] sm:ml-[60px] mt-[90px] ml-[480px] md:ml-[220px] rounded-[15px] text-center text-xl" color="black_900_01" size="lg1"
            onClick={()=>{navigate("/transportbooking",{ state: {vehicle: vehicle}})}}>
              Book Now
            </Button>
          </div>
        </div>
        <Footer />
      </div>
      
    </>
  );
}
