import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Img, Heading, Text, Input, TextArea } from "components";
import Footer from "components/Footer";
import Img15 from "../../assets/images/img_calendar_1.png";
import Img16 from "../../assets/images/img_double_bed_1.png";
import { message } from "antd";

const TransportBooking = () => {
  const { transportid, vehicleid } = useParams();
  const [value, setValue] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  // Fetch transport and vehicle data based on transportId and vehicleId
  useEffect(() => {
    fetch(`http://localhost:5000/transports/transport-id/${transportid}`, {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(transportid);
        console.log(transportid);

        const vehicle = data.vehicles.find(v => v.id === vehicleid);
        if (vehicle) {
          setValue(vehicle.price);
        } else {
          message.error("Vehicle not found");
        }
        setValue(data.price);
        console.log(data); // Log the fetched transport details
      })
      .catch((error) => {
        message.error(error.message);
      });
  }, [transportid, vehicleid]);

  const [pickUpLocation, setPickUpLocation] = useState("");
  const [dropOffLocation, setDropOffLocation] = useState("");
  const [bookingStartDate, setBookingStartDate] = useState("");
  const [bookingEndDate, setBookingEndDate] = useState("");

  const handlePickUpLocationChange = (e) => {
    setPickUpLocation(e.target.value);
  };

  const handleDropOffLocationChange = (e) => {
    setDropOffLocation(e.target.value);
  };

  const handleBookingStartDateChange = (e) => {
    setBookingStartDate(e.target.value);
  };

  const handleBookingEndDateChange = (e) => {
    setBookingEndDate(e.target.value);
  };

  useEffect(() => {
    const calculateTotalCost = () => {
      if (bookingStartDate && bookingEndDate && value) {
        const start = new Date(bookingStartDate);
        const end = new Date(bookingEndDate);
        const differenceInTime = end.getTime() - start.getTime();
        const differenceInDays = differenceInTime / (1000 * 3600 * 24);
        if (differenceInDays > 0) {
          setTotalCost(differenceInDays * value);
        } else {
          setTotalCost(0);
        }
      }
    };

    calculateTotalCost();
  }, [bookingStartDate, bookingEndDate, value]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestBody = {
      pickUpLocation,
      dropOffLocation,
      bookingStartDate,
      bookingEndDate,
      bookingPrice: totalCost.toString(),
      serviceProviderId: transportid,
      vehicleID: vehicleid
    };

    try {
      const response = await fetch("http://localhost:5000/transport-booking/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        message.success("Booking successful");
        navigate("/transport-bookings");
      } else {
        const result = await response.json();
        console.error("Booking failed:", result);
        message.error("Booking failed: " + result.errorMessage);
      }
    } catch (error) {
      console.error("Booking failed:", error);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-start w-full">
        <div className="flex flex-col items-center justify-start w-full bg-white-A700">
          <div className="flex flex-col items-center justify-start w-full mt-[21px]">
            <div className="flex flex-col items-end justify-start w-full mt-[84px] gap-[31px] max-w-[1141px]">
              <div className="flex flex-row justify-start w-full p-[30px] border-blue_gray-100 border-2 border-solid rounded-[30px]">
                <div className="flex flex-col items-start justify-start w-[93%] mt-1 ml-[38px] gap-8">
                  <Text className="text-2xl text-black-900" size="txtInterBold60">Transport Booking Now</Text>
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="h-[72px] w-full ml-1 relative rounded  mb-2">
                      <Text size="xl" as="p" className="w-max m-auto !font-light absolute">
                        Enter Pick-Up Location
                      </Text>
                      <input type="text" placeholder="Enter pick-up location" className="w-full top-[50px] m-auto absolute rounded-md" size="md" value={pickUpLocation} onChange={handlePickUpLocationChange} />
                    </div>
                    <div className="h-[72px] w-full ml-1 relative rounded  mb-2">
                      <Text size="xl" as="p" className="w-max bottom-0 top-0 m-auto !font-light absolute">
                        Enter Drop-Off Location
                      </Text>
                      <input type="text" placeholder="Enter drop-off location" className="w-full top-[50px] m-auto absolute rounded-md" size="md" value={dropOffLocation} onChange={handleDropOffLocationChange} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full pb-[124px] gap-[23px]">
                <div className="flex flex-row justify-start w-full p-[29px] border-blue_gray-100 border-2 border-solid rounded-[30px]">
                  <div className="flex flex-col items-start justify-start w-[59%] mb-[11px] ml-12">
                    <Text className="text-2xl text-black-900  ml-0.5" size="txtInterBold60">
                      Your Start Date & Time
                    </Text>
                    <div className="flex flex-row justify-start items-center mt-[33px] gap-[17px]">
                      <Img src={Img15} alt="image" className="w-5 object-cover" />
                      <Text size="xl" as="p" className="!font-normal">
                        Enter your start date
                      </Text>
                    </div>
                    <div className="flex flex-row justify-start items-center mt-[13px] gap-[22px]">
                      <Img src={Img16} alt="image_one" className="w-[26px] object-cover" />
                      <input type="date" id="bookingStartDate" name="bookingStartDate" className="border border-gray-300 rounded-md p-2" value={bookingStartDate} onChange={handleBookingStartDateChange} />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-start w-full p-[29px] border-blue_gray-100 border-2 border-solid rounded-[30px]">
                  <div className="flex flex-col items-start justify-start w-[59%] mb-[11px] ml-12">
                    <Text className="text-2xl text-black-900 ml-0.5" size="txtInterBold60">
                      Your End Date & Time
                    </Text>
                    <div className="flex flex-row justify-start items-center mt-[33px] gap-[17px]">
                      <Img src={Img15} alt="image" className="w-5 object-cover" />
                      <Text size="xl" as="p" className="!font-normal">
                        Enter your end date
                      </Text>
                    </div>
                    <div className="flex flex-row justify-start items-center mt-[13px] gap-[22px]">
                      <Img src={Img16} alt="image_one" className="w-[26px] object-cover" />
                      <input type="date" id="bookingEndDate" name="bookingEndDate" className="border border-gray-300 rounded-md p-2" value={bookingEndDate} onChange={handleBookingEndDateChange} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between items-start w-[95%]">
                <div className="flex flex-row justify-center w-[41%] p-[11px] bg-teal-A100_99">
                  <div className="flex flex-col items-end justify-start w-[91%] mb-[29px] ml-5 mr-4 gap-0.5">
                    <div className="flex flex-col justify-between w-full">
                      <Text className="text-black-900 pt-[20px] ml-0.5" size="">
                        Price Per Day: LKR {value ? value : 0}.00
                      </Text>
                      <div className="flex flex-row justify-between items-start w-full">
                        <div className="w-[88%]">
                          <Text className="text-black-900 pt-[20px]" size="">
                            Total Cost: LKR {totalCost ? totalCost : 0}.00
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-center w-[41%] p-[11px] bg-teal-A100_99">
                  <Button className="cursor-pointer font-semibold h-12 mb-10 ml-5 mt-7 text-center w-[26%] border-2 border-black-900" size="md" onClick={handleSubmit}>
                    Submit
                  </Button>
                </div>
              </div>
              <Footer className="bg-gray-900 mt-[42px] text-center text-white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransportBooking;
 