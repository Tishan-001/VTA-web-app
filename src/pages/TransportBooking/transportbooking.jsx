import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Img, Heading, Text, Input, TextArea } from "components";
import Footer from "components/Footer";
import Img15 from "../../assets/images/img_calendar_1.png";
import Img16 from "../../assets/images/img_double_bed_1.png";
import { message } from "antd";
import { useLocation } from "react-router-dom";
import TBook1 from "../../assets/images/TB2.webp"
import Navbar from "components/Navbar";
import { BASE_URL } from "config";


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
      const response = await fetch(`${BASE_URL}/transport-booking/create`, {
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
      <section className="">
        <Navbar />
      </section>
      <div className="flex flex-col items-center justify-start w-full">
        <div className="flex flex-col items-center justify-start w-full bg-bg1-20">
          <div className="flex flex-col items-center justify-start w-full mt-[21px]">
          <div className="flex flex-col items-end justify-start w-full mt-[8px] gap-[31px] max-w-[1141px]">

          
 

          
            <div className="flex flex-col items-start justify-start w-[100%] mt-1 ml-[38px] gap-8">

              <div >

              <Img
                src={TBook1}
                
                className=" w-[700px] h-[400px] object-cover ml-[250px] sm:ml-[0px] sm:mt-[10px] md:ml-[40px] md:px-[6px] md:w-[650px] sm:w-full  sm:px-[6px] sm:h-[300px] rounded-[30px]"
              />

              </div>
            <div className="flex flex-row justify-start w-[100%] sm:w-[97%] md:w-[97%] sm:ml-[2px]  p-[29px] border-blue_gray-100 border-2 border-solid rounded-[30px]">
             
             
              <div className="flex flex-col items-start justify-start w-[100%] sm:ml-[-10px] mb-[11px] ml-12">

              

            <Text className="text-2xl text-black-900 mb-2" size="txtInterBold60">Book Your Vehicle Now</Text>
            
              <div className="flex flex-col items-start justify-start w-full">
              <div className="h-[72px] w-full ml-1 relative rounded  mb-2">
                    <Text size="xl" as="p" className="w-max m-auto !text-[20px] text-black-900 absolute">
                          Enter your first name
                    </Text>
                    <input type="textbox" placeholder="Enter your first name" className="w-full h-[40px] ml-[5px] mt-[-10px] !text-[18px] border-2 border-blue_gray-100 top-[50px] m-auto absolute rounded-md" size="md" value={firstName} onChange={handleFirstNameChange} />
                  </div>

                    

                  <div className="h-[72px] w-full ml-1 relative rounded  mb-2">
                      <Text size="xl" as="p" className="w-max bottom-0 top-0 m-auto !text-[20px] text-black-900 absolute">
                            Enter your Last name
                      </Text>
                      <input type="textbox" placeholder="Enter your last name" className="w-full h-[40px] ml-[5px] mt-[-10px] !text-[18px] border-2 border-blue_gray-100 top-[50px] m-auto absolute rounded-md" size="md" value={lastName} onChange={handleLastNameChange} />
                  </div>

                  <div className="h-[72px] w-full ml-1 relative rounded  mb-2">
                          <Text size="xl" as="p" className="w-max bottom-0 top-0 m-auto !text-[20px] text-black-900 absolute">
                          Enter your contact number
                          </Text>
                        <input type="textbox" placeholder="Enter your contact number" className="w-full h-[40px] ml-[5px] mt-[-10px] !text-[18px] border-2 border-blue_gray-100 top-[50px] m-auto absolute rounded-md" size="md" value={contactNo} onChange={handleContactNoChange} />
                  </div>
                  <div className="h-[72px] w-full ml-1 relative rounded  mb-2">
                          <Text size="xl" as="p" className="w-max bottom-0 top-0 m-auto !text-[20px] text-black-900 absolute">
                          Enter your pickup locaton
                          </Text>
                        <input type="textbox" placeholder="Enter your pickup locaton" className="w-full h-[40px] ml-[5px] mt-[-10px] !text-[18px] border-2 border-blue_gray-100 top-[50px] m-auto absolute rounded-md" size="md" value={pickUpLocation} onChange={handlePickUpLocationChange} />
                  </div>
                  <div className="h-[72px] w-full ml-1 relative rounded  mb-2">
                          <Text size="xl" as="p" className="w-max bottom-0 top-0 m-auto !text-[20px] text-black-900 absolute">
                          Enter your drop off location
                          </Text>
                        <input type="textbox" placeholder="Enter your drop off location" className="w-full h-[40px] ml-[5px] mt-[-10px] !text-[18px] border-2 border-blue_gray-100 top-[50px] m-auto absolute rounded-md" size="md" value={dropOffLocation} onChange={handleDropOffLocationChange} />
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


<div className="flex flex-col w-full pb-[124px] sm:w-[97%] md:w-[97%] sm:ml-[2px] gap-[23px]">
  <div className="flex flex-row justify-start w-full p-[29px] border-blue_gray-100 border-2 border-solid rounded-[30px]">
    <div className="flex flex-col items-start justify-start w-[59%] sm:ml-[-10px] sm:w-full mb-[11px] ml-12">
     
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


  <div className="flex flex-row justify-start w-full p-[29px]  border-blue_gray-100 border-2 border-solid rounded-[30px]">
      <div className="flex flex-col items-start justify-start w-[59%] md:w-[97%] sm:ml-[-10px] sm:w-full mb-[11px] ml-12">

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



  <div className="flex flex-row justify-start w-full p-[29px] sm:w-[97%] sm:ml-[2px] border-blue_gray-100 border-2 border-solid rounded-[30px]">
    <div className="flex flex-col items-start justify-start w-[59%] md:w-[90%] sm:ml-[-10px] sm:w-full mb-[11px] ml-12">
     
      <Text className="text-2xl text-black-900  ml-0.5"   size="txtInterBold60">
      Review Usage rules
      </Text>

      <Text size="xs" as="h6" className=" mt-[34px]">
        By continuing to the next step, you are agreeing to these vehicle rules.
      </Text>
      <Text size="xl" as="p" className="!font-normal mt-[34px]">
        Your host would like you to agree to the following vehicle usage rules:
      </Text>

      <div className="flex flex-row justify-start items-center w-[80%] ml-[5px] mt-[34px] gap-3">
        <div className="h-[9px] w-[9px] rotate-[180deg] bg-black-900_02 rounded" />
        <Text size="md" as="p">
        Adhere to all posted speed limits and traffic laws.
        </Text>
      </div>

      <div className="flex flex-row justify-start items-start w-[80%] ml-[5px] gap-3">
        <div className="h-[9px] w-[9px] mt-1 rotate-[180deg] bg-black-900_02 rounded" />
        <Text size="md" as="p">
        Do not exceed the vehicle's load capacity
        </Text>
      </div>

      <div className="flex flex-row justify-start items-center w-[100%] ml-[5px] gap-3">
        <div className="h-[9px] w-[9px] rotate-[180deg] bg-black-900_02 rounded" />
        <Text size="md" as="p">
        Follow all terms and conditions outlined in the rental agreement.
        </Text>
      </div>

    
      
    </div>
  </div>

</div>

<div className="flex flex-row sm:flex sm:flex-col  justify-between items-start mt-[-80px] mb-[100px] w-[95%]">
  <div className="flex flex-row justify-center w-[41%] sm:w-[100%] sm:ml-[10px] ml-[60px] p-[11px] bg-teal-A100_99">
    <div className="flex flex-col items-end justify-start w-[91%] mb-[29px] ml-5 mr-4 gap-0.5">
      <div className="flex flex-col justify-between w-full">
        <Text className="text-black-900 pt-[20px] ml-0.5"   size="">
          Price Per Night: LKR {value ? value : 0}.00
        </Text>
       <Text className="mt-[10px] text-2xl text-red-100 bold" size="txtInterBold60" as="p" >
        Total Cost: LKR {totalCost.toFixed(2)}
      </Text>
      <Text size="lg" as="p" className="mt-[10px] !text-black-900_99 !font-normal">
        Includes taxes and charges
      </Text>
      </div>
      
    </div>
  </div>


  <div className="flex flex-col sm:ml-[90px] justify-center bg-black items-start">
    <div className="mt-[30px]  text-black-900">Countinue Your Booking</div>
    <button className="font-semibold bg-black-900 hover:bg-cyan-500 h-[50px] min-w-[191px] mt-[20px] ml-[-10px] rounded-[10px] text-white-A700"
     onClick={handleSubmit}>
      Pay Now
    </button>
  </div>
</div>
</div>
          </div>
        </div>
        <Footer/>
        </div>

      
          </div>
      
    </>
  );
};

export default TransportBooking;
 