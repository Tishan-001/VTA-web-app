import React, { useState, useEffect } from "react";
import { Button, Img, List, Text } from "components";
import Footer from "components/Footer";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Facility from "./facility";
import Image1 from "../../assets/images/img_12129860mapl.png"

const HotelBookingDescriptionPageUIPage = () => {
  const { id } = useParams();
  const [hotels, setHotels] = useState([]);
  const [mainImage, setMainImage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/hotels/");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setHotels(data);
        const hotel = data.find(hotel => hotel.id.toString() === id); // Ensure matching string to string or number to number
        if (hotel && hotel.media && hotel.media.length > 0) {
          setMainImage(hotel.media[0]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]); // Ensure useEffect is called when id changes

  const hotel = hotels.find(hotel => hotel.id.toString() === id);

  if (!hotel) {
    return <div>Loading...</div>; // Or any other loading or error placeholder
  }

  const handleClick = (newImage) => {
    setMainImage(newImage);
  };

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-end mx-auto pt-[22px] w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-gray-600 flex flex-col items-start justify-start max-w-[1418px] mx-auto p-[106px] md:px-5 rounded-[30px] w-full">
            <div className="flex flex-col gap-9 items-start justify-start mb-[22px] mt-[5px]">
              <Text
                className="md:text-5xl text-[80px] text-white-A700"
                size="txtInterBold80"
              >
                Book Your Stay
              </Text>
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                size="txtInterMedium30"
              >
                Embark on Your Journey Where Dreams Meet Destinations - Book
                Your Adventure with Seamless Ease
              </Text>
            </div>
          </div>

          <div className="flex md:flex-col flex-row gap-[53px] items-start justify-start max-w-[1233px] mt-[83px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start w-[43%] md:w-full">
              <Text
                className="md:text-5xl text-6xl text-black-900"
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
                <a href="link_to_map" className="text-black-900_b2 underline-on-hover">
                  <Text size="xl" as="p">
                    {hotel.address}
                  </Text>
                </a>
              </div>

              <Text
                className="mt-[54px] text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                size="txtInterLight30"
              >
                <span className="text-black-900 font-inter text-left font-light">
                  <br />
                </span>
                <span className="text-black-900 font-inter text-left font-bold">
                  Description:
                  <br />
                </span>
                <span className="text-black-900 font-inter text-left font-light">
                  <br />
                  {hotel.description}
                </span>
              </Text>

              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[190px] mt-11 rounded-[10px] text-center text-xl"
                color="gray_600_99"
                size="md"
              >
                view more
              </Button>
            </div>

            <div className="flex flex-col items-center justify-start w-[54%] gap-3.5">
              <img src={mainImage} alt="Main Image" className="w-full object-cover rounded-[20px]" />
              <div className="flex flex-row w-[85%] gap-3">
                {hotel?.media?.map((image, index) => (
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
          </div>

          <Text
            className="mt-[49px] sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center"
            size="txtInterBold40"
          >
            Our Rooms Category
          </Text>

          <div className="flex md:h-[1127px] sm:h-[1787px] h-[500px] justify-end max-w-[1340px] mt-[87px] mx-auto md:px-5 relative w-full">
            <List
              className="absolute sm:flex-col flex-row md:gap-10 gap-[100px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 inset-[0] justify-start m-auto w-auto"
              orientation="horizontal"
            >
              {hotel.rooms.map((room) => (
                <div key={room.id} className="h-[500px] relative w-full">
                  <Img
                    className="h-[500px] m-auto object-cover rounded-[20px] w-[380px]"
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
                          Availability
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
                      >
                        <Link to={`/frameOne/${room.id}`}>Book Now</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </List>
          </div>

          <div className="flex flex-col items-center justify-start mt-[127px] w-full">
            <div className="bg-blue_gray-100 h-200 flex flex-col items-center justify-start p-4 w-full h-[454px] ">
              <div className="flex flex-col gap-1 items-center justify-start max-w-[1245px] mb-4 mx-auto md:px-5 w-full">
                <Text
                  className="sm:text-[40px] md:text-[46px] text-[50px] text-black-900 text-center mb-1"
                  size="txtInterBold50"
                >
                  Our Facilities
                </Text>
                <section>
                  <Facility />
                </section>
              </div>
            </div>

            <Text
              className="mt-[116px] md:text-5xl text-[50px] text-black-900"
              size="txtInterBold70"
            >
              What Our Fantastic Clients Say
            </Text>

            <Footer className="bg-black-900_01 flex items-center justify-center mt-[707px] md:px-5 w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelBookingDescriptionPageUIPage;
