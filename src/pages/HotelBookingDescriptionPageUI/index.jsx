  import React, { useState, useEffect } from "react";
import { Button, Img, List, Text } from "components";
import Footer from "components/Footer";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Facility from "./facility";
import Image1 from "../../assets/images/img_12129860mapl.png";

import Img1 from "../../assets/images/wifi.jpg"

const HotelBookingDescriptionPageUIPage = () => {
  const { id } = useParams();
  const [hotels, setHotels] = useState([]);
  const [mainImage, setMainImage] = useState('');
  const [isSignedIn, setIsSignedIn] = useState(false);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const checkSignInStatus = () => {
    const token = localStorage.getItem('token');
    setIsSignedIn(!!token);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/hotels/");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setHotels(data);
        const hotel = data.find(hotel => hotel.id.toString() === id);
        if (hotel && hotel.media && hotel.media.length > 0) {
          setMainImage(hotel.media[0]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    checkSignInStatus();
  }, [id]);

  const hotel = hotels.find(hotel => hotel.id.toString() === id);

  useEffect(() => {
    if (hotel && hotel.media && hotel.media.length > 1) {
      const intervalId = setInterval(() => {
        setMainImage(prevImage => {
          const currentIndex = hotel.media.indexOf(prevImage);
          const nextIndex = (currentIndex + 1) % hotel.media.length;
          return hotel.media[nextIndex];
        });
      }, 3000); // Change image every 3 seconds

      return () => clearInterval(intervalId); // Cleanup on unmount
    }
  }, [hotel]);

  if (!hotel) {
    return <div>Loading...</div>;
  }

  const handleClick = (newImage) => {
    setMainImage(newImage);
  };

  const handleBookNow = (roomId) => {
    if (isSignedIn) {
      navigate(`/room/${roomId}`);
    } else {
      alert("You need to sign in to book a room.");
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    }
  };

  return (
    <>
      <div className="bg-bg1-20 flex flex-col font-inter items-center justify-end mx-auto pt-[22px] w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-gray-600 flex flex-col items-start justify-start max-w-[1500px] sm:w-[98%] md:w-[98%]  h-[300px] sm:h-[250px]  mx-auto p-[106px] md:px-[10px] rounded-[30px] w-full">
            <div className="flex flex-col gap-9 items-start justify-start mb-[22px] mt-[5px]">
              <Text
                className="md:!text-[40px] sm:!text-[30px] mt-[-50px] sm:mt-[-80px]  text-[60px]  text-white-A700"
                size="txtInterBold80"
              >
                Book Your Stay
              </Text>
              <Text
                className="text-3xl sm:text-[18px] md:text-[20px] text-white-A700"
                size="txtInterMedium30"
              >
                Embark on Your Journey Where Dreams Meet Destinations - Book
                Your Adventure with Seamless Ease
              </Text>
            </div>
          </div>

          <div className="flex md:flex-col flex-row gap-[53px] items-start justify-start max-w-[1400px] mt-[83px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start w-[70%] md:w-full">
              <Text
                className="md:text-5xl sm:!text-[35px] sm:mt-[-30px] sm:w-full text-5xl text-black-900"
                size="txtInterBold60"
              >
                {hotel.name}
              </Text>
              <div className="flex flex-row gap-[18px] items-start justify-start ml-0.5 md:ml-[0] mt-[19px] w-[56%] md:w-full">
                <Img
                  className="h-[26px] md:h-auto object-cover w-[7%]"
                  src={Image1}
                  alt="12129860mapl"
                />
                <a href="link_to_map" className="text-black-900_b2 underline-on-hover ">
                  <Text size="xl" as="p" className="sm:!text-[15px]">
                    {hotel.address}
                  </Text>
                </a>
              </div>

              <Text
                className="mt-[54px] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                size="txtInterLight30"
              >
                <span className="text-black-900 font-inter text-left font-light">
                 
                </span>
                <span className="text-black-900 font-inter  text-left font-bold sm:hidden">
                  Description:
              
                </span>
                <span className="text-black-900 font-inter mt-[-50px] text-justify  !text-[25px]  font-light sm:hidden">
                  <br />
                  {hotel.description}
                </span>
              </Text>

              
            </div>

            <div className="flex flex-col items-center justify-start w-[54%] sm:w-[100%] md:w-[100%] sm:mt-[-60px] gap-3.5">
              <img src={mainImage} alt="Main Image" className="w-full h-[350px] object-cover rounded-[20px]" />
              <div className="flex flex-row w-[85%] gap-3">
                {hotel?.media?.slice(0, 5).map((image, index) => (
                  <img 
                    key={index} 
                    src={image} 
                    alt={`Thumbnail ${index + 1}`}
                    className="w-[19%] object-cover rounded-[5px]" 
                    onClick={() => handleClick(image)} 
                  />
                ))}
              </div>
            </div>

            <Text
                className="mt-[54px] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                size="txtInterLight30"
              >
                <span className="text-black-900 font-inter text-left font-light">
                 
                </span>
                <span className="text-black-900 font-inter sm:mt-[-40px] text-left font-bold hidden sm:block">
                  Description:
              
                </span>
                <span className="text-black-900 font-inter mt-[-50px] text-justify sm:mt-[20px]  !text-[25px] sm:!text-[18px]  font-light hidden sm:block">
                  <br />
                  {hotel.description}
                </span>
              </Text>
              <Text
            className="text-black-900 !text-[25px] sm:mt-[20px] font-bold hidden"
          >
            Our Rooms Category :
          </Text>
          </div>

          <Text
            className="mt-[100px] md:ml-[0px] sm:mt-[40px]  sm:text-2xl sm:ml-[-100px]  md:text-[38px] text-[40px] text-black-900 ml-[-1000px] "
            size="txtInterBold40"
          >
            Our Rooms Category:
          </Text>

          <div className="flex md:h-[1127px] sm:h-[1787px] sm:mt-[10px]  justify-end max-w-[1340px] mt-[50px] mx-auto md:px-5 relative w-full">
          <div className="md:gap-5 gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] mt-9 w-[105%] md:w-full md:ml-auto ">
              {hotel.rooms.map((room) => (
                <div key={room.id} className="h-[450px] relative w-full hover:scale-105 cursor-pointer">
                  <Img
                    className="h-[450px] m-auto object-cover rounded-[20px] w-[380px]"
                    src={room.photo}
                    alt={room.type}
                  />
                  <div className="absolute bg-gray-600_99 bottom-[3%] flex flex-col inset-x-[0] items-center justify-start mx-auto p-[11px] rounded-[20px] w-[93%]">
                    <div className="flex flex-row items-center justify-between mb-0.5 w-[92%] md:w-full">
                      <div className="flex flex-col gap-2.5 items-start justify-start">
                        <Text
                          className="text-white-A700 text-xl"
                          size="txtInterBold20WhiteA700_1"
                        >
                          {room.type}
                        </Text>
                        <Text
                          className="text-white-A700 text-xl"
                          size="txtInterBold20WhiteA700_1"
                        >
                          {room.isAvailable ? (
                                        <span
                                          style={{
                                            display: "block",
                                            backgroundColor: "green",
                                            padding: "3px",
                                            borderRadius: "5px",
                                            color: "white",
                                            width: "100%",
                                          }}
                                        >
                                          Available
                                        </span>
                                      ) : (
                                        <span
                                          style={{
                                            display: "block",
                                            backgroundColor: "red",
                                            padding: "3px",
                                            borderRadius: "5px",
                                            color: "white",
                                            width: "100%",
                                          }}
                                        >
                                          UnAvailable
                                        </span>
                                      )}
                        </Text>
                        <Text
                          className="text-white-A700 text-xl"
                          size="txtInterMedium20WhiteA700"
                        >
                          ${room.price}
                        </Text>
                      </div>
                      <Button
                        className="cursor-pointer font-light leading-[normal] mb-[5px] min-w-[130px] mt-[9px] text-center text-xl"
                        shape="round"
                        onClick={() => handleBookNow(room.id)}
                      >
                      Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center justify-start mt-[127px] w-full">
            <div className=" h-200 flex flex-col items-center justify-start p-4 w-full h-[454px] ">
              <div className="flex flex-col gap-1 items-center justify-start max-w-[1245px] mb-4 mx-auto md:px-5 w-full">
                <Text
                  className=" md:text-[46px] text-[40px] text-black-900 ml-[-1000px] sm:ml-[-80px] sm:mt-[25px] sm:!text-[25px] mb-1"
                  size="txtInterBold40"
                >
                  Our Popular Facilities
                </Text>
                <section>
                <div className="flex flex-row justify-start w-full md:w-[70%] sm:mt-[50px] mt-2.5">
                  <div className="flex flex-row sm:flex-col md:gap-[80px] justify-between items-center w-full gap-[200px] sm:gap-[10px] ">
                    <div className="flex flex-col sm:flex-row items-center justify-start w-[90%] gap-[15px] sm:ml-[-30px]  sm:gap-[80px]">
                     
                      <div className="flex flex-row justify-start items-start w-full gap-3">
                        <Img src={Img1} alt="imagefiftynine" className="w-[55px] sm:w-[30px] object-cover" />
                        <Text size="s" as="p" className="mt-4">
                        Free WiFi
                        </Text>
                      </div>


                      <div className="flex flex-row justify-start items-start w-full gap-3">
                        <Img src={Img1} alt="imagefiftynine" className="w-[55px] sm:w-[30px]  object-cover" />
                        <Text size="s" as="p" className="mt-4">
                        Pool
                       
                        </Text>
                      </div>
                      <div className="flex flex-row justify-start items-start w-full gap-3">
                        <Img src={Img1} alt="imagefiftynine" className="w-[55px] sm:w-[30px]  object-cover" />
                        <Text size="s" as="p" className="mt-4">
                        Gym
                        </Text>
                      </div>

                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-start w-[100%] gap-[15px] sm:ml-[-10px] sm:gap-[60px]">
                     
                      <div className="flex flex-row justify-start items-start w-full gap-3">
                        <Img src={Img1} alt="imagefiftynine" className="w-[55px] sm:w-[30px]  object-cover" />
                        <Text size="s" as="p" className="mt-4">
                        Room service
                        </Text>
                      </div>


                      <div className="flex flex-row justify-start items-start w-full gap-3">
                        <Img src={Img1} alt="imagefiftynine" className="w-[55px] sm:w-[30px]  object-cover" />
                        <Text size="s" as="p" className="mt-4">
                           Resturent
                        </Text>
                      </div>
                      <div className="flex flex-row justify-start items-start w-full gap-3">
                        <Img src={Img1} alt="imagefiftynine" className="w-[55px] sm:w-[30px]  object-cover" />
                        <Text size="s" as="p" className="mt-4">
                        Spa
                        </Text>
                      </div>

                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-start w-[100%] gap-[15px] sm:ml-[-10px] sm:gap-[50px]">
                     
                      <div className="flex flex-row justify-start items-start w-full gap-3">
                        <Img src={Img1} alt="imagefiftynine" className="w-[55px] sm:w-[30px]  object-cover" />
                        <Text size="s" as="p" className="mt-4">
                        Air conditioning
                        </Text>
                      </div>


                      <div className="flex flex-row justify-start items-start w-full gap-3">
                        <Img src={Img1} alt="imagefiftynine" className="w-[55px] sm:w-[30px]  object-cover" />
                        <Text size="s" as="p" className="mt-4">
                        Pool
                        </Text>
                      </div>
                      <div className="flex flex-row justify-start items-start w-full gap-3">
                        <Img src={Img1} alt="imagefiftynine" className="w-[55px] sm:w-[30px]  object-cover" />
                        <Text size="s" as="p" className="mt-4">
                        Bar
                        </Text>
                      </div>

                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-start w-[100%] gap-[15px] sm:gap-[50px]">
                     
                     <div className="flex flex-row justify-start items-start w-full gap-3">
                       <Img src={Img1} alt="imagefiftynine" className="w-[55px] sm:w-[30px]  object-cover" />
                       <Text size="s" as="p" className="mt-4">
                       Hot Water
                       </Text>
                     </div>


                     <div className="flex flex-row justify-start items-start w-full gap-3">
                       <Img src={Img1} alt="imagefiftynine" className="w-[55px] sm:w-[30px]  object-cover" />
                       <Text size="s" as="p" className="mt-4">
                       Gym
                       </Text>
                     </div>
                     <div className="flex flex-row justify-start items-start w-full gap-3">
                       <Img src={Img1} alt="imagefiftynine" className="w-[55px] sm:w-[30px]  object-cover" />
                       <Text size="s" as="p" className="mt-4">
                       Cafe
                       </Text>
                     </div>

                   </div>
                  </div>

                </div>

                
                </section>
              </div>
            </div>

            

            <Footer/>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelBookingDescriptionPageUIPage;
