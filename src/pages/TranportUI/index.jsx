import React, { useEffect, useState } from "react";
import { Button, Img, List, Text } from "components";
import Footer from "components/Footer";
import { Link } from "react-router-dom";
import Header from "../../components/Navbar.jsx";
import SearchBar from "./searchbar";
import VehicleCard from "./vehiclecard";

const TransportUIPage = () => {
  const [transports, setTransports] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/transports/");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setTransports(data);
      fetchVehicles(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchVehicles = (data) => {
    try {
      const allVehicles = data.reduce((acc, transport) => {
        return acc.concat(transport.vehicles.map(vehicle => ({ ...vehicle, transportId: transport.id })));
      }, []);
      setVehicles(allVehicles);
    } catch (error) {
      console.error("Error fetching vehicle:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="bg-bg1-20 flex flex-col font-inter items-center justify-end mx-auto pt-3 px-1 md:px-1 w-full">
        <div className="h-[723px] md:h-[600px] px-20 md:px-1 mx-auto relative w-full">
          <Img
            className="h-[723px] md:h-[600px] m-auto object-cover rounded-[30px] w-full"
            src="images/img_rectangle4_723x1418.png"
            alt="rectangleFour"
          />
          <section>
            <div className="absolute flex flex-col md:gap-10 gap-[402px] justify-start right-[1%] top-[80%] md:top-[28%] w-[85%]">
              <SearchBar />
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
                    src={`images/img_52_${index}.png`}
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

          <div className="md:gap-5 gap-[61px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] mt-[45px] w-[105%] md:ml-[10px] md:w-full">
            {vehicles.map((vehicle, index) => (
              <VehicleCard key={index} vehicle={vehicle} transportId={vehicle.transportId} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default TransportUIPage;
