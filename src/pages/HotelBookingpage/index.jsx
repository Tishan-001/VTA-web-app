import React, { useRef, useState, useEffect } from "react";
import { Button, Img, List, Text } from "components";
import Footer from "components/Footer";
import Nav12 from "./nav.jsx";
import Searchbar from "./searchbar.jsx";
import Filter from "./filter.jsx";
import HotelList from "./hotelList.jsx";

const HotelBookingpagePage = () => {
  const [hotels, setHotels] = useState([]);
  const [filteredHotelList, setFilteredHotelList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredHotelList(hotels);
  }, [hotels]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/hotels/");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setHotels(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const hotelListRef = useRef(null);

  const filterHotelListByDestination = (destination) => {
    const filteredList = hotels.filter((hotel) =>
      hotel.city.toLowerCase() === destination.toLowerCase()
    );
    setFilteredHotelList(filteredList);
  };
  
  return (
    <>
      <div className="bg-gray-100_01 flex flex-col font-inter items-center justify-end mx-auto pt-2.5 w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="h-[723px] max-w-[1418px] mx-auto md:px-5 relative w-full">
            <Img
              className="h-[723px] m-auto object-cover rounded-[30px] w-full"
              src="images/img_rectangle5.png"
              alt="rectangleFive"
            />

            <div className="absolute flex flex-col md:gap-10 gap-[385px] justify-start right-[6%] top-[6%] w-[77%]">
                <section>
                  <Nav12 />
                </section>
                <section>
                    {/* Pass hotelListRef to SearchBar component */}
                   <Searchbar hotelListRef={hotelListRef} filterHotelListByDestination={filterHotelListByDestination} />
               </section>
            </div>
          </div>

          <div className="flex flex-col items-start justify-start max-w-[1278px] mt-[109px] mx-auto md:px-5 w-full">
            <Text
              className="text-black-900_b2 text-xl"
              size="txtInterMedium20Black900b2"
            >
              Property Type
            </Text>

            <div className="flex md:flex-col flex-row md:gap-10 gap-[69px] items-start justify-start mt-[30px] w-auto md:w-full">
              <div className="h-[500px] relative rounded-[20px] shadow-bs w-[30%] md:w-full">
                <Img
                  className="h-[500px] m-auto object-cover rounded-[20px] w-full"
                  src="images/img_52_1.png"
                  alt="FiftyTwo"
                />

                <Button
                  className="!text-gray-50_01 absolute cursor-pointer font-bold leading-[normal] left-[4%] min-w-[192px] rounded-[20px] text-2xl md:text-[22px] text-center sm:text-xl top-[5%]"
                  shape="round"
                  color="gray_600_99"  > Hotel
                </Button>
               
              </div>

              <List
                className="sm:flex-col flex-row md:gap-10 gap-[69px] grid md:grid-cols-1 grid-cols-2 w-[65%] md:w-full"
                orientation="horizontal"
              >

                <div className="h-[500px] relative rounded-[20px] shadow-bs w-full">
                  <Img
                    className="h-[500px] m-auto object-cover rounded-[20px] w-full"
                    src="images/img_52_2.png"
                    alt="FiftyTwo"
                  />
                  <Button
                    className="!text-gray-50_01 absolute cursor-pointer font-bold leading-[normal] left-[4%] min-w-[192px] rounded-[20px] text-2xl md:text-[22px] text-center sm:text-xl top-[5%]"
                    shape="round"
                    color="gray_600_99"
                  >
                    Apartments
                  </Button>
                </div>

                <div className="h-[500px] relative rounded-[20px] shadow-bs w-full">
                  <Img
                    className="h-[500px] m-auto object-cover rounded-[20px] w-full"
                    src="images/img_52_3.png"
                    alt="FiftyTwo"
                  />
                  <Button
                    className="absolute cursor-pointer font-bold leading-[normal] left-[4%] min-w-[122px] rounded-[20px] text-2xl md:text-[22px] text-center sm:text-xl top-[5%]"
                    shape="round"
                    color="gray_600_99"
                  >
                    Villas
                  </Button>
                </div>

              </List>

            </div>

            <Text
              className="mt-44 text-black-900_b2 text-xl"
              size="txtInterMedium20Black900b2"
            >
              Accommodation
            </Text>

          </div>

          <div className="flex md:flex-col flex-row gap-[38px] items-start justify-start max-w-[1302px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col gap-[30px] justify-start w-[33%] md:w-full">
              <Text
                className="ml-6 md:ml-[0] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                size="txtInterBold40"
              >
                Our Best Hotels
              </Text>

              <section>
                <Filter />
              </section>
            </div>

            <List
              className="flex flex-col gap-[69px] md:mt-0 mt-[78px] w-full"
              orientation="vertical"
            >
                    <div ref={hotelListRef}>
                       <HotelList hotelList={filteredHotelList} />
                    </div>
            </List>

          </div>
          
          <Footer className="bg-black-900_02 flex items-center justify-center mt-[86px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default HotelBookingpagePage;
