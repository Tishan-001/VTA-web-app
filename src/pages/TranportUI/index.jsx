import React, { useEffect, useState, useRef } from "react";
import { Button, Img, List, Text } from "components";
import Footer from "components/Footer";
import { Link } from "react-router-dom";
import Header from "../../components/Navbar.jsx";
import SearchBar from "./searchbar";
import VehicleCard from "./vehiclecard";
import Ui from "../../assets/images/transportUI_1.jpg"
import { BASE_URL } from "config.js";

const TransportUIPage = () => {
  const [transports, setTransports] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const [isSearchPerformed, setIsSearchPerformed] = useState(false);
  const hotelListRef = useRef(null);

  useEffect(() => {
    fetchData();
    
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`${BASE_URL}/vehicle/`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setFilteredVehicles(data);
      setVehicles(data) // Initially set filtered vehicles to all vehicles
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const filterHotelListBylocation = async (location, startDate, endDate, category) => {
    try {
      const response = await fetch(`${BASE_URL}/vehicle/available`, {
        method: 'POST', // Use POST instead of GET when sending a body
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          location: location,
          bookingStartDate: startDate,
          bookingEndDate: endDate,
          category: category
        })
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      setFilteredVehicles(data); // Update the state with the filtered vehicles
      setIsSearchPerformed(true); // Set search performed to true
      console.log('Filtered vehicles:', data); // Log the filtered vehicles for debugging
    } catch (error) {
      console.error('Failed to fetch filtered vehicles:', error);
    }
  };

  return (
    <>
      <Header />
      <div className="bg-bg1-20 flex flex-col font-inter items-center justify-end mx-auto pt-3 px-1 md:px-1 w-full">
        <div className="h-[723px] md:h-[600px] px-5 md:px-1 mx-auto relative w-full">
          <Img
            className="h-[723px] md:h-[600px] m-auto object-cover rounded-[30px] w-full"
            src={Ui}
            alt="rectangleFour"
          />
          <section>
            <div className="absolute flex flex-col md:gap-10 gap-[402px] justify-start right-[1%] top-[80%] md:top-[28%] w-[85%]">
              <SearchBar hotelListRef={hotelListRef} filterHotelListBylocation={filterHotelListBylocation} />
            </div>
          </section>
        </div>

        <div className="flex flex-col gap-[50px] items-start justify-start max-w-[1300px] md:ml-[0px] mt-[114px] mx-auto md:px-5 w-full">
          <Text className="text-black-900_b2 text-xl" size="txtInterMedium20">
            Categories
          </Text>
          <List
            className="sm:flex-col flex-row md:gap-10 gap-[66px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center w-[100%] md:w-[90%] md:ml-[20px]"
            orientation="horizontal"
          >
            {["Tuk Tuk", "Van", "Scooter", "Car", "Safari"].map((category, index) => (
              <div key={index} className="flex flex-1 flex-col items-center justify-start rounded-lg shadow-bs w-full cursor-pointer">
                <div className="h-72 relative w-full overflow-hidden rounded-lg transition-transform duration-300 transform hover:scale-105">
                  <Img
                    className="h-full w-full object-cover"
                    src={`images/img_520_${index}.png`}
                    alt={category}
                  />
                  <Button
                    className="absolute left-6 top-6 font-semibold leading-normal min-w-20 rounded-lg text-center text-xs text-gray-600 bg-gray-100 bg-opacity-50 px-2 py-1"
                  >
                    {category}
                  </Button>
                </div>
              </div>
            ))}
          </List>
        </div>

        <div className="flex flex-col items-start justify-start max-w-[1300px] md:ml-[0px] mt-[161px] mx-auto md:px-5 w-full">
          <Text className="text-black-900_b2 text-xl" size="txtInterMedium20">
            Transportation
          </Text>
          <Text
            className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
            size="txtInterBold40"
          >
            Our Best Transportation
          </Text>

          <div ref={hotelListRef} className="md:gap-5 gap-[61px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] mt-[45px] w-[105%] md:ml-[10px] md:w-full">
            {(isSearchPerformed ? filteredVehicles : vehicles).map((vehicle, index) => (
              <VehicleCard key={index} vehicle={vehicle} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default TransportUIPage;
