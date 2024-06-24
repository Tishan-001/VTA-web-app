import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Img, Heading, Text, Input, TextArea } from "components";
import Footer from "components/Footer";
import Img15 from "../../assets/images/img_calendar_1.png";
import Img16 from "../../assets/images/img_double_bed_1.png";
import { message } from "antd";
import { useLocation } from "react-router-dom";

const TransportBooking = () => {
  const location = useLocation();
  const { vehicle} = location.state;
  const [totalCost, setTotalCost] = useState(0);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [value, setValue]=useState(vehicle.price||0);
  const [bookingStartDate, setBookingStartDate] = useState("");
  const [bookingEndDate, setBookingEndDate] = useState("");
  const [withDriver, setWithDriver]=useState(false);
  const [pickUpLocation, setPickUpLocation] = useState("");
  const [dropOffLocation, setDropOffLocation] = useState("");
  
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const handleContactNoChange = (e) => {
    setContactNo(e.target.value);
  };
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
  const handleWithDriverChange = (e) => {
    setWithDriver(e.target.checked);
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
  }, [bookingStartDate, bookingEndDate,value]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestBody = {
      userName: firstName + lastName,
      contactNo : contactNo,
      bookingStartDate: bookingStartDate,
      bookingEndDate: bookingEndDate,
      pickUpLocation: pickUpLocation,
      dropOffLocation: dropOffLocation,
      bookingPrice: totalCost.toString(),
      serviceProviderId: vehicle.transportId,
      vehicleID: vehicle.id,
      withDriver: withDriver
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
        navigate("/tranportui");
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
            <div className="flex flex-row justify-start w-full p-[29px] border-blue_gray-100 border-2 border-solid rounded-[30px]">
              <div className="flex flex-col items-start justify-start w-[59%] mb-[11px] ml-12">

            <Text className="text-2xl text-black-900 mb-2" size="txtInterBold60">Book Your Vehicle Now</Text>
            
              <div className="flex flex-col items-start justify-start w-full">
              <div className="h-[72px] w-full ml-1 relative rounded  mb-2">
                    <Text size="xl" as="p" className="w-max m-auto !font-light absolute mb-1">
                          Enter your first name
                    </Text>
                    <input type="text" placeholder="Enter your first name" className="w-full top-[50px] m-auto absolute rounded-md" size="md" value={firstName} onChange={handleFirstNameChange} />
                  </div>

                  <div className="h-[72px] w-full ml-1 relative rounded  mb-2">
                      <Text size="xl" as="p" className="w-max bottom-0 top-0 m-auto !font-light absolute mb-1">
                            Enter your Last name
                      </Text>
                      <input type="text" placeholder="Enter your last name" className="w-full top-[50px] m-auto absolute rounded-md" size="md" value={lastName} onChange={handleLastNameChange} />
                  </div>

                  <div className="h-[72px] w-full ml-1 relative rounded  mb-2">
                          <Text size="xl" as="p" className="w-max bottom-0 top-0 m-auto !font-light absolute mb-1">
                          Enter your contact number
                          </Text>
                        <input type="text" placeholder="Enter your contact number" className="w-full top-[50px] m-auto absolute rounded-md" size="md" value={contactNo} onChange={handleContactNoChange} />
                  </div>
                  <div className="h-[72px] w-full ml-1 relative rounded  mb-2">
                          <Text size="xl" as="p" className="w-max bottom-0 top-0 m-auto !font-light absolute mb-1">
                          Enter your pickup locaton
                          </Text>
                        <input type="text" placeholder="Enter your pickup locaton" className="w-full top-[50px] m-auto absolute rounded-md" size="md" value={pickUpLocation} onChange={handlePickUpLocationChange} />
                  </div>
                  <div className="h-[72px] w-full ml-1 relative rounded  mb-2">
                          <Text size="xl" as="p" className="w-max bottom-0 top-0 m-auto !font-light absolute mb-1">
                          Enter your drop off location
                          </Text>
                        <input type="text" placeholder="Enter your drop off location" className="w-full top-[50px] m-auto absolute rounded-md" size="md" value={dropOffLocation} onChange={handleDropOffLocationChange} />
                  </div>
                  <div className="flex items-center mt-4">
                        <input
                          type="checkbox"
                          id="withDriver"
                          className="mr-2"
                          checked={withDriver}
                          onChange={handleWithDriverChange}
                        />
                        <label htmlFor="withDriver" className="text-xl text-black-900">With Driver</label>
                      </div>
              </div>
              </div>
              </div>


<div className="flex flex-col w-full pb-[124px] gap-[23px]">
  <div className="flex flex-row justify-start w-full p-[29px] border-blue_gray-100 border-2 border-solid rounded-[30px]">
    <div className="flex flex-col items-start justify-start w-[59%] mb-[11px] ml-12">
     
      <Text className="text-2xl text-black-900  ml-0.5"   size="txtInterBold60">
        Your Booking Starting Date{" "}
      </Text>

      <div className="flex flex-row justify-start items-center mt-[33px] gap-[17px]">
        <Img src={Img15} alt="image" className="w-5 object-cover" />
        <Text size="xl" as="p" className="!font-normal">
          Your vehilce will be awailable for you!
        </Text>
      </div>
      <Text as="h5" className="mt-[34px]">
        Add your booking starting date
      </Text>
      <div className="flex flex-row justify-start items-center mt-[13px] gap-[22px]">
        <Img src={Img16} alt="image_one" className="w-[26px] object-cover" />
        <input type="date" id="arrivalDate" name="departureDate" className="border border-gray-300 rounded-md p-2" value={bookingStartDate} onChange={handleBookingStartDateChange} />
      </div>
    </div>
  </div>


  <div className="flex flex-row justify-start w-full p-[29px] border-blue_gray-100 border-2 border-solid rounded-[30px]">
      <div className="flex flex-col items-start justify-start w-[59%] mb-[11px] ml-12">

          <Text className="text-2xl text-black-900 ml-0.5" size="txtInterBold60">
              Your Booking End Date{" "}
          </Text>

           <Text as="h5" className="mt-[34px]">
             Add your booking end date
           </Text>

        <div className="flex flex-row justify-start items-center mt-[13px] gap-[22px]">
                <Img src={Img16} alt="image_one" className="w-[26px] object-cover" />
                     {/* Date input field */}
                <input type="date" id="departureDate" name="departureDate" className="border border-gray-300 rounded-md p-2" value={bookingEndDate}  onChange={handleBookingEndDateChange} />
                </div>
      </div>
    </div>



  <div className="flex flex-row justify-start w-full p-[29px] border-blue_gray-100 border-2 border-solid rounded-[30px]">
    <div className="flex flex-col items-start justify-start w-[59%] mb-[11px] ml-12">
     
      <Text className="text-2xl text-black-900  ml-0.5"   size="txtInterBold60">
      Review house rules
      </Text>

      <Text size="xs" as="h6" className=" mt-[34px]">
        By continuing to the next step, you are agreeing to these house rules.
      </Text>
      <Text size="xl" as="p" className="!font-normal mt-[34px]">
        Your host would like you to agree to the following house rules:
      </Text>

      <div className="flex flex-row justify-start items-center w-[30%] ml-[5px] mt-[34px] gap-3">
        <div className="h-[9px] w-[9px] rotate-[180deg] bg-black-900_02 rounded" />
        <Text size="md" as="p">
          No smoking
        </Text>
      </div>

      <div className="flex flex-row justify-start items-start w-[26%] ml-[5px] gap-3">
        <div className="h-[9px] w-[9px] mt-1 rotate-[180deg] bg-black-900_02 rounded" />
        <Text size="md" as="p">
          No parties/events
        </Text>
      </div>

      <div className="flex flex-row justify-start items-center w-[30%] ml-[5px] gap-3">
        <div className="h-[9px] w-[9px] rotate-[180deg] bg-black-900_02 rounded" />
        <Text size="md" as="p">
          Pets are not allowed
        </Text>
      </div>

    
      
    </div>
  </div>

</div>

<div className="flex flex-row justify-between items-start w-[95%]">
  <div className="flex flex-row justify-center w-[41%] p-[11px] bg-teal-A100_99">
    <div className="flex flex-col items-end justify-start w-[91%] mb-[29px] ml-5 mr-4 gap-0.5">
      <div className="flex flex-col justify-between w-full">
        <Text className="text-black-900 pt-[20px] ml-0.5"   size="">
          Price Per Night: LKR {value ? value : 0}.00
        </Text>
       <Text className="mt-[10px] text-2xl text-black-900 bold" size="txtInterBold60" as="p" >
        Total Cost: LKR {totalCost.toFixed(2)}
      </Text>
      <Text size="lg" as="p" className="mt-[10px] !text-black-900_99 !font-normal">
        Includes taxes and charges
      </Text>
      </div>
      
    </div>
  </div>


  <div className="flex flex-col justify-center bg-black items-start">
    <div className="mt-[70px] text-black-900">Countinue Your Booking</div>
    <Button className="font-semibold min-w-[191px] mt-[20px] ml-[-10px] rounded-[10px] bg-black text-white"
     onClick={handleSubmit}>
      Pay Now
    </Button>
  </div>
</div>
</div>
          </div>
        </div>
        </div>
          </div>
        </div>
    </>
  );
};

export default TransportBooking;
 