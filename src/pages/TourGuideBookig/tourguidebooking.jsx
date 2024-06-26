import React,{useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Img, Heading, Text, Input, TextArea } from "components";
import Footer from "components/Footer";
import Img15 from "../../assets/images/img_calendar_1.png" 
import Img16 from "../../assets/images/img_double_bed_1.png" 
import { message } from "antd";
import Navbar from "components/Navbar";
import TBook1 from "../../assets/images/GBBooking.jpg"
import { BASE_URL } from "config";


const TourGuideBooking=()=> {
  const { id } = useParams();
  const [value, setValue] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  // Fetch hotel and room data based on roomId
  useEffect(() => {
    fetch(`${BASE_URL}/tourguides/tourguide/${id}`, {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((data) => {
        setValue(data.price);
        console.log(data); // Log the fetched guider details
      })
      .catch((error) => {
        message.error(error)
      });
  },[]);
  
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
      return;
    }
    if(!lastName) {
      message.error("Please enter your last name");
      return;
    }
    if(!email) {
      message.error("Please enter your email");
      return;
    }
    if(!phoneNumber) {
      message.error("Please enter your phone number");
      return;
    }
    if(!arrivalDate) {
      message.error("Please enter your arrival date");
      return;
    }
    if(!departureDate) {
      message.error("Please enter your departure date");
      return;
    }
    if(!totalCost) {
      message.error("Please enter your total cost");
      return;
    }
    if(!special) {
      message.error("Please enter your special request");
      return;
    }
    if(!arrivalTime) {
      message.error("Please enter your arrival time");
      return;
    }
    if(!departureTime) {
      message.error("Please enter your departure time");
      return;
    }

    const requestBody = {
      tourGuideId: id,
      startDate: arrivalDate,
      startTime: arrivalTime,
      endDate: departureDate,
      endTime: departureTime,
      firstName,
      lastName,
      email,
      phoneNumber,
      specialRequest: special,
      bookingPrice: totalCost.toString(),
    };

    try {
      const response = await fetch(`${BASE_URL}/tour-guide-booking/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        message.success("Booking successful");
        navigate("/tourguidersui");
        
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
    <Navbar/>
      <div className="flex flex-col items-center justify-start w-full">
        <div className="flex flex-col items-center justify-start w-full bg-white-A700">
          <div className="flex flex-col items-center justify-start w-full mt-[21px]">

             <div >

            <Img
              src={TBook1}
              
              className=" w-[700px] h-[400px] object-cover ml-[-20px] sm:ml-[0px] sm:mt-[10px] md:ml-[40px] md:px-[6px] md:w-[650px] sm:w-full  sm:px-[6px] sm:h-[300px] rounded-[30px]"
            />

            </div>   
            
            <div className="flex flex-col items-end justify-start w-full mt-[84px] gap-[31px] max-w-[1141px]">

            

              <div className="flex flex-row justify-start w-full md:w-[98%] sm:mr-[2px] p-[30px] border-blue_gray-100 border-2 border-solid rounded-[30px]">
                <div className="flex flex-col items-start justify-start w-[93%] mt-1 ml-[38px] sm:ml-[10px] gap-8">
                <Text className="text-2xl text-black-900" size="txtInterBold60">Tour Guide Booking Now</Text>



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
                          <input type="textbox" placeholder="Enter your last name" className="w-full h-[40px] ml-[5px] mt-[-10px] !text-[18px] border-2 border-blue_gray-100 top-[50px] m-auto absolute rounded-md"size="md" value={lastName} onChange={handleLastNameChange} />
                      </div>

                      <div className="h-[72px] w-full ml-1 relative rounded  mb-2">
                              <Text size="xl" as="p" className="w-max bottom-0 top-0 m-auto !text-[20px] text-black-900 absolute">
                              Enter your Email address
                              </Text>
                            <input type="textbox" placeholder="Enter your email address" className="w-full h-[40px] ml-[5px] mt-[-10px] !text-[18px] border-2 border-blue_gray-100 top-[50px] m-auto absolute rounded-md" size="md" value={email} onChange={handleEmailChange} />
                        </div>


                      <div className="h-[72px] w-full ml-1 relative rounded  mb-2">
                            <Text size="xl" as="p" className="w-max bottom-0 top-0 m-auto !text-[20px] text-black-900 absolute">
                            Enter your Telephone number
                             </Text>
                           <input type="textbox" placeholder="Enter your email address" className="w-full h-[40px] ml-[5px] mt-[-10px] !text-[18px] border-2 border-blue_gray-100 top-[50px] m-auto absolute rounded-md" size="md" value={phoneNumber} onChange={handlePhoneNumberChange} />
                      </div>
                    
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col items-start justify-start w-full p-[25px] border-blue_gray-100 border-2 border-solid rounded-[30px]">
                <Text  className="text-2xl text-black-900 mt-[7px] ml-[55px] sm:ml-[10px]"   size="txtInterBold60">
                  Special requests
                </Text>


                <Text size="xl" as="p" className="mt-7 ml-[55px] !font-normal sm:ml-[10px]">
                  Special requests cannot be guaranteed – but the property will do its best to meet your needs. You can
                  always make a special request after your booking is complete!
                </Text>

             

                <input name="textarea" placeholder="Please  write your requests in English or Czech. (optional)" className="w-[90%] border sm:ml-[10px] border-gray-400 h-20 rounded-[10px]  mt-[21px] ml-[55px]" value={special} onChange={handleSpecialChange} />
              </div>


              <div className="flex flex-col w-full pb-[124px] gap-[23px]">
                <div className="flex flex-row justify-start w-full p-[29px] border-blue_gray-100 border-2 border-solid rounded-[30px]">
                  <div className="flex flex-col items-start justify-start w-[59%] sm:w-[80%] sm:ml-[10px] mb-[11px] ml-12">
                   
                    <Text className="text-2xl text-black-900  ml-0.5"   size="txtInterBold60">
                      Your Start Date & time{" "}
                    </Text>

                    <div className="flex flex-row justify-start items-center mt-[33px] gap-[17px]">
                      <Img src={Img15} alt="image" className="w-5 object-cover" />
                      <Text size="xl" as="p" className="!font-normal">
                        I will be available for you from 8.00 AM
                      </Text>
                    </div>
                    <Text as="h5" className="mt-[34px]">
                      Add your estimated arrival time
                    </Text>
                    <div className="flex flex-row justify-start items-center mt-[13px] gap-[22px]">
                      <Img src={Img16} alt="image_one" className="w-[26px] object-cover" />

                      <input type="date" id="arrivalDate" name="departureDate" className="border border-gray-300 rounded-md p-2" value={arrivalDate} onChange={handleArrivalDateChange} />

                                    {/* Time input field */}
                      <input type="time" id="arrivalTime" name="departureTime" className="border border-gray-300 rounded-md p-2" value={arrivalTime} onChange={handleArrivalTimeChange} />
                     
                    </div>
                  </div>
                </div>


                <div className="flex flex-row justify-start w-full p-[29px] border-blue_gray-100 border-2 border-solid rounded-[30px]">
                    <div className="flex flex-col items-start justify-start w-[59%] sm:ml-[10px] sm:w-[100%] mb-[11px] ml-12">
        
                        <Text className="text-2xl text-black-900 ml-0.5" size="txtInterBold60">
                            Your End Date & time{" "}
                        </Text>

                      <div className="flex flex-row justify-start items-center mt-[33px] gap-[17px]">
                            <Img src= {Img15}  alt="image" className="w-5 object-cover" />
                            <Text size="xl" as="p" className="!font-normal">
                                I will be available for you until 6.00 PM
                            </Text>
                      </div>
        
                         <Text as="h5" className="mt-[34px]">
                           Add your estimated Departure time
                         </Text>

                      <div className="flex flex-row justify-start items-center mt-[13px] gap-[22px]">
                              <Img src={Img16} alt="image_one" className="w-[26px] object-cover" />
                                   {/* Date input field */}
                              <input type="date" id="departureDate" name="departureDate" className="border border-gray-300 rounded-md p-2" value={departureDate}  onChange={handleDepartureDateChange} />

                                    {/* Time input field */}
                             <input type="time" id="departureTime" name="departureTime" className="border border-gray-300 rounded-md p-2" value={departureTime} onChange={handleDepartureTimeChange}/>
                      </div>
                    </div>
                  </div>
              </div>

              <div className="flex flex-row sm:flex sm:flex-col  sm:mt-[-100px]  justify-between items-start w-[95%]">
                <div className="flex flex-row justify-center w-[41%] md:w-full md:ml-[-10px] p-[11px] bg-teal-A100_99">
                  <div className="flex flex-col items-end justify-start w-[91%] mb-[29px] ml-5 mr-4 gap-0.5">
                    <div className="flex flex-col justify-between w-full">
                      <Text className="text-black-900 pt-[20px] ml-0.5"   size="">
                        Price Per Day: $ {value ? value : 0}.00
                      </Text>
                     <Text className="mt-[10px] text-2xl text-red-100 bold" size="txtInterBold60" as="p" >
                      Total Cost: $ {totalCost.toFixed(2)}
                    </Text>
                    <Text size="lg" as="p" className="mt-[10px] !text-black-900_99 !font-normal">
                      Includes taxes and charges
                    </Text>
                    </div>
                    
                  </div>
                </div>


                <div className="flex flex-col mt-[-20px] sm:ml-[80px] justify-center bg-black items-start">
                  <div className="mt-[70px] text-black-900">Countinue Your Booking</div>
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

export default TourGuideBooking;
