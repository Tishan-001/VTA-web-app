import React,{useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Img, Heading, Text, Input, TextArea } from "components";
import Footer from "components/Footer";
import Img1 from "../../assets/images/ok.png" 
import Img2 from "../../assets/images/img_image_60.png" 
import Img3 from "../../assets/images/img_image_61.png" 
import Img4 from "../../assets/images/img_image_63.png" 
import Img15 from "../../assets/images/img_calendar_1.png" 
import Img16 from "../../assets/images/img_double_bed_1.png" 
import Header from "components/Navbar";
import { message } from "antd";
import { BASE_URL } from "config";

const FrameOne=()=> {
  const [room, setRoom] = useState(null);
  const { roomId } = useParams();
  const [value, setValue] = useState(0);
  const [bedCount, setBedCount] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  // Fetch hotel and room data based on roomId
  useEffect(() => {
    fetch(`${BASE_URL}/hotels/get/room/${roomId}`)
      .then((response) => response.json())
      .then((data) => {
        setRoom(data);
        setValue(data.price);
        setBedCount(data.bedCount);
      })
      .catch((error) => console.error(error));
  }, [roomId]);
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [special, setSpecial] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [departureTime, setDepartureTime] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSpecialChange = (e) => {
    setSpecial(e.target.value);
  };

  const handleArrivalDateChange = (e) => {
    setArrivalDate(e.target.value);
  };

  const handleArrivalTimeChange = (e) => {
    setArrivalTime(e.target.value);
  };

  const handleDepartureDateChange = (e) => {
    setDepartureDate(e.target.value);
  };

  const handleDepartureTimeChange = (e) => {
    setDepartureTime(e.target.value);
  };

  useEffect(() => {
    const calculateTotalCost = () => {
      if (arrivalDate && departureDate && value) {
        const arrival = new Date(arrivalDate);
        const departure = new Date(departureDate);
        const differenceInTime = departure.getTime() - arrival.getTime();
        const differenceInDays = differenceInTime / (1000 * 3600 * 24);
        if (differenceInDays > 0) {
          setTotalCost(differenceInDays * value);
        } else {
          setTotalCost(0);
        }
      }
    };

    calculateTotalCost();
  }, [arrivalDate, departureDate, value]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!firstName) {
      message.error("Please enter your first name");
    }

    if(!lastName) {
      message.error("Please enter your last name");
    }

    if(!email) {
      message.error("Please enter your email");
    }

    if(!phoneNumber) {
      message.error("Please enter your phone number");
    }

    if(!arrivalDate) {
      message.error("Please enter your arrival date");
    }

    if(!departureDate) {
      message.error("Please enter your departure date");
    }

    if(!totalCost) {
      message.error("Please enter your total cost");
    }

    if(!special) {
      message.error("Please enter your special request");
    }

    const requestBody = {
      roomId,
      arrivalDate,
      departureDate,
      userFirstName: firstName,
      userLastName: lastName,
      contactEmail: email,
      contactTelephone: phoneNumber,
      noOfBeds: bedCount.toString(),
      specialRequest: special,
      bookingPrice: totalCost.toString(),
    };

    try {
      const response = await fetch(`${BASE_URL}/hotel-booking/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        message.success("Booking successful");
        navigate("/hotelbookingpage");
        
      } else {
        const result = await response.json();
        console.error("Booking failed:", result);
        message.error("Booking failed: " + result.errorMessage);
      }
    } catch (error) {
      console.error("Booking failed:", error);
    }
  };

  const chunkArray = (arr, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, chunkSize + i));
    }
    return chunks;
  };

  return (
    <>
    <section className="hidden md:block">
    <Header />

    </section>
    
      <div className="flex flex-col items-center justify-start w-full">
        <div className="flex flex-col items-center justify-start w-full bg-white-A700">
          <div className="flex flex-col items-center justify-start w-full mt-[21px]">
            <div className="h-[123px] w-full bg-gray-600 max-w-[1418px] rounded-[30px] md:hidden  " />
            <div className="flex flex-row justify-start items-start w-full mt-[38px] md:flex md:flex-col gap-[35px] max-w-[1308px]">
              <Img
                src={room?.photo}
                alt={room?.type}
                className=" w-[700px] h-[500px] object-cover sm:mt-[-60px] md:px-[6px] md:w-[720px]  sm:px-[6px] sm:h-[300px] rounded-[30px]"
              />
              <div className="flex flex-col items-start justify-start w-[46%] md:w-[100%] sm:w-full">

                <Text className="md:text-4xl text-4xl sm:!text-[25px] md:ml-[10px]  text-black-900"
                size="txtInterBold40" >  Room Amenities
                </Text>
                
                
                <div className="flex flex-col justify-start w-full sm:w-[97%] md:ml-[30px] md:w-[95%] md:mt-[20px] sm:ml-[5px] sm:mt-[20px] mt-2.5 gap-4">
                  {chunkArray(room?.facilities || [], 3).map((facilityGroup, rowIndex) => (
                    <div key={rowIndex} className="flex flex-row justify-between items-center w-full">
                      {facilityGroup.map((facility, index) => (
                        <div key={index} className="flex flex-row justify-start items-start w-[30%] gap-3">
                          <Img src={Img1} alt="imagefiftynine" className="w-[40px] sm:w-[30px]  object-cover" />
                          <Text size="s" as="p" className=" !text-[20px] ">
                            {facility}
                          </Text>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>





                <Text 
                className="md:text-4xl text-4xl sm:!text-[25px] md:ml-[10px] text-black-900 mt-10"
                size="txtInterBold40">Bed Type
                </Text>

                <div className="flex flex-row justify-start w-[47%] md:ml-[50px] mt-1 ml-2.5">
                  <div className="flex flex-row justify-start items-center w-full gap-[30px]">
                    <Img src={Img4} alt="imagesixtythree" className="w-[81px] sm:ml-[20px] mb-px object-cover" />
                    <div className="flex flex-col items-start justify-start w-3/5 gap-1.5 " >
                      <Text size="s" as="p" className="sm:w-[200px]">
                        Queen Size Bed Comly
                      </Text>
                      <Text size="s" as="p" className="ml-px"   >
                        Fit for 2 people{" "}
                      </Text>
                      <Text size="s" as="p" className="ml-px !text-red-100 !font-normal !text-[18px]">
                        {room?.bedCount} beds
                      </Text>
                    </div>
                  </div>
                </div>
                <Text className="md:text-4xl text-4xl sm:!text-[25px] md:ml-[10px] text-black-900 mt-10"
                size="txtInterBold40" >
                  Cancellation Rules
                </Text>


                <Text size="xl" as="p" className="mt-4 sm:ml-[20px] md:ml-[50px] sm:!text-[20px]">
                  Free Cancellation before 5 days{" "}
                </Text>


                <Text size="xl" as="p" className="mt-[23px] sm:mt-[10px] md:ml-[50px] text-red-500 sm:ml-[20px] sm:!text-[20px]">
                  50% Cut of for booking Cancellation before 3 days
                </Text>
                <Text size="xl" as="p" className="mt-[22px] sm:ml-[20px] md:ml-[50px] sm:mt-[10px] sm:!text-[20px] !text-red-A700">
                  No Refund before 1 days{" "}
                </Text>


              </div>
            </div>
            <div className="flex flex-col items-end justify-start w-full sm:w-[96%] md:w-[95%] mt-[84px] gap-[31px] max-w-[1141px]">


              <div className="flex flex-row justify-start w-full p-[30px] border-blue_gray-100 border-2 border-solid rounded-[30px]">
                <div className="flex flex-col items-start justify-start w-[93%] sm:ml-[-10px] mt-1 ml-[38px] gap-8">
                <Text className="text-2xl sm:ml-[50px]  text-black-900  " size="txtInterBold60">Hotel Booking Now</Text>



                  <div className="flex flex-col items-start justify-start w-full">
                   
                   
                  <div className="h-[72px] w-full ml-1 relative rounded  mb-2">
                         <Text size="xl" as="p" className="w-max m-auto !text-[20px] text-black-900 absolute">
                              Enter your first name
                         </Text>
                         <input type="textbox" placeholder="Enter your first name" className="w-full h-[40px] ml-[5px] mt-[-10px] !text-[18px] border-2 border-black-900 top-[50px] m-auto absolute rounded-md" size="md" value={firstName} onChange={handleFirstNameChange} />
                      </div>

                      <div className="h-[72px] w-full ml-1 mt-[20px] relative rounded  mb-2">
                           <Text size="xl" as="p" className="w-max bottom-0 !text-[20px] top-0 m-auto !font-light absolute">
                                Enter your Last name
                           </Text>
                          <input type="textbox" placeholder="Enter your last name" className="w-full ml-[5px] top-[40px] m-auto absolute !text-[18px] h-[50px] border-2 border-black-900 rounded-md" size="md" value={lastName} onChange={handleLastNameChange} />
                      </div>

                      <div className="h-[72px] w-full ml-1 relative rounded mt-[20px]  mb-2">
                              <Text size="xl" as="p" className="w-max bottom-0 top-0 !text-[20px] m-auto !font-light absolute">
                              Enter your Email address
                              </Text>
                            <input type="textbox" placeholder="Enter your email address" className="w-full ml-[5px] top-[50px] m-auto absolute !text-[18px] h-[50px] border-2 border-black-900 rounded-md" size="md" value={email} onChange={handleEmailChange} />
                        </div>


                      <div className="h-[72px] w-full ml-1 mt-[20px] mb-[40px] relative rounded  ">
                            <Text size="xl" as="p" className="w-max bottom-0 !text-[20px] top-0 m-auto !font-light absolute">
                            Enter your Telephone number
                             </Text>
                           <input type="textbox" placeholder="Enter your email address" className="w-full ml-[5px] top-[50px] m-auto absolute  !text-[18px] h-[50px] border-2 border-black-900 rounded-md" size="md" value={phoneNumber} onChange={handlePhoneNumberChange} />
                      </div>
                    
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col items-start justify-start w-full  p-[25px] border-blue_gray-100 border-2 border-solid rounded-[30px]">
                <Text  className="text-2xl text-black-900 mt-[7px] ml-[55px]"   size="txtInterBold60">
                  Special requests
                </Text>


                <Text size="xl" as="p" className="mt-7 sm:ml-[-10px] sm:text-justfy ml-[55px] !font-normal">
                  Special requests cannot be guaranteed – but the property will do its best to meet your needs. You can
                  always make a special request after your booking is complete!
                </Text>

             

                <input name="textarea" placeholder="Please write your requests in English or Czech. (optional)" className="w-[90%] border border-gray-400 h-20 sm:h-[100px] rounded-[10px] sm:ml-[1px]  mt-[21px] ml-[55px]" value={special} onChange={handleSpecialChange} />
              </div>


              <div className="flex flex-col w-full pb-[124px] gap-[23px]">
                <div className="flex flex-row justify-start w-full p-[29px] border-blue_gray-100 border-2 border-solid rounded-[30px]">
                  <div className="flex flex-col items-start justify-start w-[59%] mb-[11px] ml-12">
                   
                    <Text className="text-2xl text-black-900 sm:ml-[-20px] sm:text-center   ml-0.5"   size="txtInterBold60">
                      Your arrival Date & time{" "}
                    </Text>

                    <div className="flex flex-row justify-start items-center sm:w-[350px] sm:ml-[-60px] mt-[33px] gap-[17px]">
                      <Img src={Img15} alt="image" className="w-5 object-cover " />
                      <Text size="xl" as="p" className="!font-normal">
                        Your room will be ready for check-in between 16:00 and 20:00
                      </Text>
                    </div>
                    <Text as="h5" className="mt-[34px] sm:w-[350px] sm:ml-[-60px]">
                      Add your estimated arrival time
                    </Text>
                    <div className="flex flex-row justify-start items-center sm:w-[350px] sm:ml-[-60px] mt-[13px] gap-[22px]">
                      <Img src={Img16} alt="image_one" className="w-[26px] object-cover" />

                      <input type="date" id="arrivalDate" name="departureDate" className="border border-gray-300 rounded-md p-2" value={arrivalDate} onChange={handleArrivalDateChange} />

                                    {/* Time input field */}
                      <input type="time" id="arrivalTime" name="departureTime" className="border border-gray-300 rounded-md p-2" value={arrivalTime} onChange={handleArrivalTimeChange} />
                     
                    </div>
                  </div>
                </div>


                <div className="flex flex-row justify-start w-full p-[29px] border-blue_gray-100 border-2 border-solid rounded-[30px]">
                    <div className="flex flex-col items-start justify-start w-[59%] mb-[11px] ml-12">
        
                        <Text className="text-2xl text-black-900 ml-0.5 sm:text-center " size="txtInterBold60">
                            Your Departure Date & time{" "}
                        </Text>

                      <div className="flex flex-row justify-start items-center mt-[33px] gap-[17px] sm:w-[350px] sm:ml-[-60px]">
                            <Img src= {Img15}  alt="image" className="w-5 object-cover" />
                            <Text size="xl" as="p" className="!font-normal">
                                  Your room will be ready for check-in between 16:00 and 20:00
                            </Text>
                      </div>
        
                         <Text as="h5" className="mt-[34px] sm:w-[350px] sm:ml-[-60px]">
                           Add your estimated Departure time
                         </Text>

                      <div className="flex flex-row justify-start items-center mt-[13px] gap-[22px] sm:w-[350px] sm:ml-[-60px]">
                              <Img src={Img16} alt="image_one" className="w-[26px] object-cover" />
                                   {/* Date input field */}
                              <input type="date" id="departureDate" name="departureDate" className="border border-gray-300 rounded-md p-2" value={departureDate}  onChange={handleDepartureDateChange} />

                                    {/* Time input field */}
                             <input type="time" id="departureTime" name="departureTime" className="border border-gray-300 rounded-md p-2" value={departureTime} onChange={handleDepartureTimeChange}/>
                      </div>
                    </div>
                  </div>


              
                <div className="flex flex-row justify-start w-full p-[29px] border-blue_gray-100 border-2 border-solid rounded-[30px]">
                  <div className="flex flex-col items-start justify-start w-[59%] mb-[11px] ml-12 sm:w-[350px] sm:ml-[-10px]">
                   
                    <Text className="text-2xl text-black-900  ml-0.5 sm:text-center sm:ml-[50px] "   size="txtInterBold60">
                    Review house rules
                    </Text>

                    <Text size="xs" as="h6" className=" mt-[34px] md:!text-[20px]">
                      By continuing to the next step, you are agreeing to these house rules.
                    </Text>
                    <Text size="xl" as="p" className="!font-normal mt-[34px]">
                      Your host would like you to agree to the following house rules:
                    </Text>

                    <div className="flex flex-row justify-start items-center w-[30%] sm:w-[100%] md:w-[100%] ml-[5px] mt-[34px] gap-3">
                      <div className="h-[9px] w-[9px]  rotate-[180deg] bg-black-900_02 rounded " />
                      <Text size="md" as="p" className="sm:w-[200px] md:w-[200px]">
                        No smoking
                      </Text>
                    </div>

                    <div className="flex flex-row justify-start items-start w-[26%] sm:w-[100%] md:w-[100%]  ml-[5px] gap-3">
                      <div className="h-[9px] w-[9px] mt-1 rotate-[180deg] bg-black-900_02 rounded" />
                      <Text size="md" as="p"  className="md:w-[300px]">
                        No parties/events
                      </Text>
                    </div>

                    <div className="flex flex-row justify-start items-center w-[30%] sm:w-[100%] md:w-[100%]  ml-[5px] gap-3">
                      <div className="h-[9px] w-[9px] rotate-[180deg] bg-black-900_02 rounded" />
                      <Text size="md" as="p">
                        Pets are not allowed
                      </Text>
                    </div>

                  
                    
                  </div>
                </div>

              </div>

              <div className="flex flex-row md:flex md:flex-col  justify-between items-start w-[95%] ">
                <div className="flex flex-row sm:mt-[-100px]  md:mt-[-80px] justify-center w-[41%] md:w-[80%] sm:ml-[-10px] sm:w-[100%] md:ml-[50px] hover:bg-neutral-300 p-[11px] hover:text-black-900 bg-teal-A100_99">
                  <div className="flex flex-col items-end justify-start w-[91%]  mb-[29px] ml-5 md:ml-[120px] sm:ml-[20px] mr-4 gap-0.5">
                    <div className="flex flex-col justify-between w-full">
                      <Text className="text-black-900 pt-[20px] ml-0.5"   size="">
                        Price Per Night: LKR {value ? value : 0}.00
                      </Text>
                     <Text className="mt-[10px] text-2xl hover: text-red-100 bold" size="txtInterBold60" as="p" >
                      Total Cost: LKR {totalCost.toFixed(2)}
                    </Text>
                    <Text size="lg" as="p" className="mt-[10px] !text-black-900_99 !font-normal">
                      Includes taxes and charges
                    </Text>
                    </div>
                    
                  </div>
                </div>


                <div className="flex flex-col justify-center sm:ml-[80px] md:ml-[220px]  bg-black items-start">
                  <div className="mt-[70px] text-black-900">Continue Your Booking</div>
                  <button className="font-semibold bg-black-900 hover:bg-cyan-500 h-[50px] min-w-[191px] mt-[20px] ml-[-10px] rounded-[10px] text-white-A700"
                   onClick={handleSubmit}>
                    Pay Now
                  </button>
                </div>
              </div>
            </div>
            <Footer/>
          </div>
        </div>
      </div>
    </>
  );
}

export default FrameOne;
