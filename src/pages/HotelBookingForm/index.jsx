import React,{useState, useEffect} from "react";
import { useParams } from "react-router-dom";


import { Button, Img, Heading, Text, Input, TextArea } from "components";

import HotelData from "../../assets/data/HotelData";
import Footer from "components/Footer";

import Img1 from "../../assets/images/img_image_59.png" 
import Img2 from "../../assets/images/img_image_60.png" 
import Img3 from "../../assets/images/img_image_61.png" 
import Img4 from "../../assets/images/img_image_63.png" 
import img05 from "../../assets/images/img_image_64.png"
import Img5 from "../../assets/images/img_image_65.png"
import Img6 from "../../assets/images/img_image_66.png"  
import Img7 from "../../assets/images/img_image_67.png" 
import Img8 from "../../assets/images/img_city_1.png" 
import Img9 from "../../assets/images/img_shower_1.png" 
import Img10 from "../../assets/images/img_soundproof_1.png" 
import Img11 from "../../assets/images/img_electric_car_1.png" 
import Img12 from "../../assets/images/img_taxi_1.png" 
import Img13 from "../../assets/images/img_sofa_bed_1.png" 
import Img14 from "../../assets/images/img_double_bed_1.png" 
import Img15 from "../../assets/images/img_calendar_1.png" 
import Img16 from "../../assets/images/img_double_bed_1.png" 



const FrameOne=()=> {




  const [hotel, setHotel] = useState(null);
  const [roomType, setRoomType] = useState(null);

  const { roomId } = useParams();

  // Fetch hotel and room data based on roomId
  useEffect(() => {
    console.log("Room ID:", roomId);
  
    const hotelRoom = HotelData.find((hotel) =>
      hotel.rooms.some((room) => room.id === roomId)
    );
  
    console.log("Hotel Room Data:", hotelRoom);
  
    if (hotelRoom) {
      const room = hotelRoom.rooms.find((room) => room.id === roomId);
      console.log("Selected Room Data:", room);
      setHotel(hotelRoom);
      setRoomType(room);
    }
  }, [roomId]);
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [special, setSpecial] = useState("");
  const [carRent, setCarRent] = useState(false);
  const [taxiBook, setTaxiBook] = useState(false);
  const [arrivalDate, setArrivalDate] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [selected, setSelected] = useState(false);
  const [selected1, setSelected1] = useState(false);
  const [selected2, setSelected2] = useState(false);
  const [saveWishList, setSaveWishList] = useState(false);

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

  const toggleSelected = () => {
    setSelected(!selected);
  };

  const toggleSelected1 = () => {
    setSelected1(!selected1);
  };

  const toggleSelected2 = () => {
    setSelected2(!selected2);
  };

  const toggleCarRent = () => {
    setCarRent(!carRent);
  };

  const toggleTaxiBook = () => {
    setTaxiBook(!taxiBook);
  };

  const handleSaveWishList = () => {
    setSaveWishList(true);
    console.log("Form data saved:", {
      firstName,
      lastName,
      email,
      phoneNumber,
      special,
      selected,
      selected1,
      selected2,
      carRent,
      taxiBook,
      arrivalDate,
      arrivalTime,
      departureDate,
      departureTime,
    });
  };




  return (
    <>

<div>
  
    
      <div className="flex flex-col items-center justify-start w-full">
        <div className="flex flex-col items-center justify-start w-full bg-white-A700">
          <div className="flex flex-col items-center justify-start w-full mt-[21px]">
            <div className="h-[123px] w-full bg-gray-600 max-w-[1418px] rounded-[30px]" />
            <div className="flex flex-row justify-start items-start w-full mt-[38px] gap-[35px] max-w-[1308px]">
              <Img
                // src={roomType.photo}
                // alt={roomType.type}
                className="w-[52%] object-cover rounded-[30px]"
              />


              <div className="flex flex-col items-start justify-start w-[46%]">

                <Text className="md:text-4xl text-4xl text-black-900"
                size="txtInterBold40" >  Room Amenities
                </Text>





                <div className="flex flex-row justify-start w-full mt-2.5">
                  <div className="flex flex-row justify-between items-center w-full">
                    <div className="flex flex-col items-center justify-start w-[17%] gap-[15px]">
                     
                      <div className="flex flex-row justify-start items-start w-full gap-3">
                        <Img src={Img1} alt="imagefiftynine" className="w-[55px] object-cover" />
                        <Text size="s" as="p" className="mt-4">
                          Safe
                        </Text>
                      </div>


                      <div className="flex flex-row justify-start items-start w-full gap-3">
                        <Img src={Img1} alt="imagefiftynine" className="w-[55px] object-cover" />
                        <Text size="s" as="p" className="mt-4">
                          Safe
                        </Text>
                      </div>

                    </div>

                    <div className="flex flex-col items-center justify-start w-[17%] gap-[15px]">
                     
                      <div className="flex flex-row justify-start items-start w-full gap-3">
                        <Img src={Img2} alt="imagefiftynine" className="w-[55px] object-cover" />
                        <Text size="s" as="p" className="mt-4">
                        Service
                        </Text>
                      </div>


                      <div className="flex flex-row justify-start items-start w-full gap-3">
                        <Img src={Img2} alt="imagefiftynine" className="w-[55px] object-cover" />
                        <Text size="s" as="p" className="mt-4">
                        Service
                        </Text>
                      </div>

                    </div>

                    <div className="flex flex-col items-center justify-start w-[17%] gap-[15px]">
                     
                      <div className="flex flex-row justify-start items-start w-full gap-3">
                        <Img src={Img3} alt="imagefiftynine" className="w-[55px] object-cover" />
                        <Text size="s" as="p" className="mt-4">
                        Luggage
                        </Text>
                      </div>


                      <div className="flex flex-row justify-start items-start w-full gap-3">
                        <Img src={Img3} alt="imagefiftynine" className="w-[55px] object-cover" />
                        <Text size="s" as="p" className="mt-4">
                        Luggage
                        </Text>
                      </div>

                    </div>
                  </div>

                </div>







                <Text 
                className="md:text-4xl text-4xl text-black-900 mt-10"
                size="txtInterBold40">Bed Type
                </Text>



                
                <div className="flex flex-row justify-start w-[47%] mt-1 ml-2.5">
                  <div className="flex flex-row justify-start items-center w-full gap-[30px]">
                    <Img src={Img4} alt="imagesixtythree" className="w-[81px] mb-px object-cover" />
                    <div className="flex flex-col items-start justify-start w-3/5 gap-1.5">
                      <Text size="s" as="p">
                        Queen Size Bed Comly
                      </Text>
                      <Text size="s" as="p" className="ml-px"   >
                        Fit for 2 people{" "}
                      </Text>
                      <Text size="s" as="p" className="ml-px !text-black-900_cc !font-normal">
                        able to spread out
                      </Text>
                    </div>
                  </div>
                </div>



                <Text className="md:text-4xl text-4xl text-black-900 mt-10"
                size="txtInterBold40" >
                  Cancellation Rules
                </Text>


                <Text size="xl" as="p" className="mt-4">
                  Free Cancellation before 5 days{" "}
                </Text>


                <Text size="xl" as="p" className="mt-[23px] text-red-500">
                  50% Cut of for booking Cancellation before 3 days
                </Text>



                <Text size="xl" as="p" className="mt-[22px] !text-red-A700">
                  No Refund before 1 days{" "}
                </Text>


              </div>
            </div>




            <div className="flex flex-col items-end justify-start w-full mt-[84px] gap-[31px] max-w-[1141px]">


              <div className="flex flex-row justify-start w-full p-[30px] border-blue_gray-100 border-2 border-solid rounded-[30px]">
                <div className="flex flex-col items-start justify-start w-[93%] mt-1 ml-[38px] gap-8">
                <Text className="text-2xl text-black-900" size="txtInterBold60">Hotel Booking Now</Text>



                  <div className="flex flex-col items-start justify-start w-full">
                   
                   
                      <div className="h-[72px] w-full ml-1 relative rounded  mb-2">
                         <Text size="xl" as="p" className="w-max m-auto !font-light absolute">
                              Enter your first name
                         </Text>
                         <input type="text" placeholder="Enter your first name" className="w-full top-[50px] m-auto absolute rounded-md" size="md" value={firstName} onChange={handleFirstNameChange} />
                      </div>

                      <div className="h-[72px] w-full ml-1 relative rounded  mb-2">
                           <Text size="xl" as="p" className="w-max bottom-0 top-0 m-auto !font-light absolute">
                                Enter your Last name
                           </Text>
                          <input type="text" placeholder="Enter your last name" className="w-full top-[50px] m-auto absolute rounded-md" size="md" value={lastName} onChange={handleLastNameChange} />
                      </div>

                      <div className="h-[72px] w-full ml-1 relative rounded  mb-2">
                              <Text size="xl" as="p" className="w-max bottom-0 top-0 m-auto !font-light absolute">
                              Enter your Email address
                              </Text>
                            <input type="text" placeholder="Enter your email address" className="w-full top-[50px] m-auto absolute rounded-md" size="md" value={email} onChange={handleEmailChange} />
                        </div>


                      <div className="h-[72px] w-full ml-1 relative rounded  mb-2">
                            <Text size="xl" as="p" className="w-max bottom-0 top-0 m-auto !font-light absolute">
                            Enter your Telephone number
                             </Text>
                           <input type="text" placeholder="Enter your email address" className="w-full top-[50px] m-auto absolute rounded-md" size="md" value={phoneNumber} onChange={handlePhoneNumberChange} />
                      </div>
                    
                  </div>
                </div>
              </div>




              <div className="flex flex-col items-start justify-start w-full p-[22px] border-blue_gray-100 border-2 border-solid rounded-[30px]">
                <div className="flex flex-row justify-start w-[71%] mt-[25px] ml-[58px]">
                  <div className="flex flex-col items-start justify-start w-full">
                   
                    <Text className="text-2xl text-black-900"   size="txtInterBold60">
                      Comfort Triple Room
                   
                    </Text>


                    <div className="flex flex-row justify-start items-center mt-[17px] gap-[18px]">
                      <Img src={img05} alt="imagesixtyfour" className="w-5 object-cover" />
                      <Text size="xl" as="p" className="w-[95%] !font-light">
                        <span className="text-black-900_02">
                          <br />
                        </span>
                        <span className="text-green_900 font-bold">Free cancellation</span>
                        <span className="text-black-900_02"></span>
                        <span className="text-black-900_02 font-normal">  before 19 January 2024</span>
                      </Text>
                    </div>



                    <div className="flex flex-row justify-start items-center gap-[13px]">
                      <Img src={Img5} alt="imagesixtyfive" className="w-[25px] object-cover" />
                      <Text as="h5" className="w-[95%] !font-bold">
                        <span className="text-black-900_02">
                          <br />
                          Guests :{" "}
                        </span>
                        <span className="text-black-900_02 font-normal">2 adults</span>
                      </Text>
                    </div>

                    <div className="flex flex-row justify-start items-center mt-[13px] gap-3.5">
                      <Img src={Img6} alt="imagesixtysix" className="w-[23px] object-cover" />
                      <Text size="xl" as="p" className="!font-normal">
                        No smoking
                      </Text>
                    </div>

                    <div className="flex flex-row justify-start w-full mt-[15px] gap-[7px]">
                      <div className="flex flex-row justify-evenly items-start w-[26%] gap-[7px] py-1 border-green-900_cc border border-solid bg-green-900_33 rounded-[10px]">
                        <Img
                          src={Img7}
                          alt="imagesixtyseven"
                          className="w-7 mb-[3px] object-cover"
                        />
                        <Text size="xl" as="p" className="mt-0.5 !font-normal">
                          Landmark view
                        </Text>
                      </div>

                      <div className="flex flex-row justify-evenly items-center w-[19%] gap-2.5 py-[5px] border-green-900_cc border border-solid bg-green-900_33 rounded-[10px]">
                        <Img src={Img8} alt="cityone_one" className="w-[19px] object-cover" />
                        <Text size="xl" as="p" className="mt-0.5 !font-normal">
                          City view
                        </Text>
                      </div>

                      <div className="flex flex-row justify-evenly items-center w-[28%] gap-[9px] py-1.5 border-green-900_cc border border-solid bg-green-900_33 rounded-[10px]">
                        <Img src={Img10} alt="showerone_one" className="w-[22px] object-cover" />
                        <Text size="xl" as="p" className="!font-normal">
                          Attach Bathroom{" "}
                        </Text>
                      </div>

                      <div className="flex flex-row justify-center items-center w-1/4 p-[5px] border-green-900_cc border border-solid bg-green-900_33 rounded-[10px]">
                        <Img
                          src={Img9}
                          alt="soundproofone"
                          className="w-6 ml-1.5 object-cover"
                        />
                        <Text size="xl" as="p" className="mt-0.5 ml-[5px] mr-1 !font-normal">
                          Soundproofing
                        </Text>
                      </div>
                    </div>


                  </div>
                </div>




                  <div className="h-0.5 w-full mt-[52px] bg-blue_gray-100" />
                     
                      <Text as="h5" className="mt-[26px] ml-[57px]">
                        Choose your bed
                      </Text>

                    <div className="flex flex-col w-[34%] mt-4 mb-[35px] ml-[66px] pb-1 gap-px">





                      <div className="flex flex-row gap-[13px] items-start justify-start mt-[15px] w-[79%] md:w-full">
                             <div
                                id="clickableBox"
                                className={`h-5 w-5 border border-gray-400 rounded-[50%] cursor-pointer ${selected ? 'bg-gray-500' : ''}`}
                                onClick={toggleSelected} >  
                             </div>
                             <div className="flex flex-row justify-start items-center mt-[13px] gap-3.5   ">
                       
                                 <Text size="xl" as="p" className="!font-normal">1 sofa bed</Text>
                                 <Img src={Img13} alt="imagesixtysix" className="w-[23px] object-cover" />
                             </div>

                      </div>


                      <div className="flex flex-row gap-[13px] items-start justify-start mt-[15px] w-[79%] md:w-full">
                             <div
                                id="clickableBox"
                                className={`h-5 w-5 border border-gray-400 rounded-[50%] cursor-pointer ${selected1 ? 'bg-gray-500' : ''}`}
                                onClick={toggleSelected1} >  
                             </div>
                             <div className="flex flex-row justify-start items-center mt-[13px] gap-3.5   ">
                       
                                 <Text size="xl" as="p" className="!font-normal">1 large double bed</Text>
                                 <Img src={Img14} alt="imagesixtysix" className="w-[23px] object-cover" />
                             </div>

                      </div>



                   
                      <div className="flex flex-row gap-[13px] items-start justify-start mt-[15px] w-[79%] md:w-full">
                             <div
                                id="clickableBox"
                                className={`h-5 w-5 border border-gray-400 rounded-[50%] cursor-pointer ${selected2 ? 'bg-gray-500' : ''}`}
                                onClick={toggleSelected2} >  
                             </div>
                            <div className="flex flex-row justify-start items-center mt-[13px] gap-3.5   ">
                       
                              <Text size="xl" as="p" className="!font-normal">1 large double bed</Text>

                                
                              <Img src={Img14} alt="imagesixtysix" className="w-[23px] object-cover" />
                              <Img src={Img14} alt="imagesixtysix" className="w-[23px] object-cover" />
                           
                            </div>

                      </div>
                         
                    </div>
                  </div>




              <div className="flex flex-row justify-center w-full p-5 border-blue_gray-100 border-2 border-solid rounded-[30px]">
                <div className="flex flex-col items-center justify-start w-[99%] mt-[23px] mr-[5px] gap-6">
                  <div className="flex flex-row justify-between items-start w-[92%]">
                    
                    
                    <div className="flex flex-col items-start justify-start w-[81%] mb-3">
                      <Text className="text-2xl text-black-900"   size="txtInterBold60">
                        Add to your stay
                      </Text>


                      <div className="flex flex-row justify-start items-center w-[42%] mt-[29px] gap-5">
                       <input type="checkbox" className="h-[25px] w-[25px]  border-gray-400 border-4 border-solid text-left rounded-[50%]" checked={carRent} onChange={toggleCarRent} />
                        <Text size="xl" as="p">
                          I&#39;m interested in renting a car
                        </Text>
                      </div>
                      <Text size="lg" as="p" className="mt-3.5 ml-[54px] !text-black-900_99">

                        Make the most out of your trip and check car hire options in your booking confirmation.
                      </Text>
                    </div>


                                  
                    <Img
                      src={Img11}
                      alt="electriccarone"
                      className="w-[98px] mt-[51px] object-cover"
                    />


                  </div>


                  <div className="h-0.5 w-full bg-blue_gray-100" />
                  <div className="flex flex-row justify-between items-start w-[92%]">

                    <div className="flex flex-col items-start justify-start w-[81%] gap-3">
                      <div className="flex flex-row justify-start items-center w-[62%] gap-5">
                         <input type="checkbox" className="h-[25px] w-[25px] border border-gray-400 border-4 border-solid text-left rounded-[50%]" checked={taxiBook} onChange={toggleTaxiBook} />
                           <Text size="xl" as="p">
                             Want to book a taxi or shuttle ride in advance?
                           </Text>
                      </div>
                            <Text size="lg" as="p" className="ml-[54px] !text-black-900_99">
                              Avoid surprises - get from the airport to your accommodation without a hitch. We&#39;ll add taxi
                              options to your booking confirmation.
                            </Text>
                    </div>

                    <Img src={Img12} alt="taxione_one" className="w-[110px] object-cover" />
                  </div>
                </div>

              </div>


              
              <div className="flex flex-col items-start justify-start w-full p-[25px] border-blue_gray-100 border-2 border-solid rounded-[30px]">
                <Text  className="text-2xl text-black-900 mt-[7px] ml-[55px]"   size="txtInterBold60">
                  Special requests
                </Text>


                <Text size="xl" as="p" className="mt-7 ml-[55px] !font-normal">
                  Special requests cannot be guaranteed – but the property will do its best to meet your needs. You can
                  always make a special request after your booking is complete!
                </Text>

             

                <input name="textarea" placeholder="Please write your requests in English or Czech. (optional)" className="w-[90%] border border-gray-400 h-20 rounded-[10px]  mt-[21px] ml-[55px]" value={special} onChange={handleSpecialChange} />
              </div>


              <div className="flex flex-col w-full pb-[124px] gap-[23px]">
                <div className="flex flex-row justify-start w-full p-[29px] border-blue_gray-100 border-2 border-solid rounded-[30px]">
                  <div className="flex flex-col items-start justify-start w-[59%] mb-[11px] ml-12">
                   
                    <Text className="text-2xl text-black-900  ml-0.5"   size="txtInterBold60">
                      Your arrival Date & time{" "}
                    </Text>

                    <div className="flex flex-row justify-start items-center mt-[33px] gap-[17px]">
                      <Img src={Img15} alt="image" className="w-5 object-cover" />
                      <Text size="xl" as="p" className="!font-normal">
                        Your room will be ready for check-in between 16:00 and 20:00
                      </Text>
                    </div>
                    <Text as="h5" className="mt-[34px]">
                      Add your estimated arrival time
                    </Text>
                    <div className="flex flex-row justify-start items-center mt-[13px] gap-[22px]">
                      <Img src={Img16} alt="image_one" className="w-[26px] object-cover" />

                      <input type="date" id="departureDate" name="departureDate" className="border border-gray-300 rounded-md p-2" value={arrivalDate} onChange={handleArrivalDateChange} />

                                    {/* Time input field */}
                      <input type="time" id="departureTime" name="departureTime" className="border border-gray-300 rounded-md p-2" value={arrivalTime} onChange={handleArrivalTimeChange} />
                     
                    </div>
                  </div>
                </div>


                <div className="flex flex-row justify-start w-full p-[29px] border-blue_gray-100 border-2 border-solid rounded-[30px]">
                    <div className="flex flex-col items-start justify-start w-[59%] mb-[11px] ml-12">
        
                        <Text className="text-2xl text-black-900 ml-0.5" size="txtInterBold60">
                            Your Departure Date & time{" "}
                        </Text>

                      <div className="flex flex-row justify-start items-center mt-[33px] gap-[17px]">
                            <Img src= {Img15}  alt="image" className="w-5 object-cover" />
                            <Text size="xl" as="p" className="!font-normal">
                                  Your room will be ready for check-in between 16:00 and 20:00
                            </Text>
                      </div>
        
                         <Text as="h5" className="mt-[34px]">
                           Add your estimated Departure time
                         </Text>

                      <div className="flex flex-row justify-start items-center mt-[13px] gap-[22px]">
                              <Img src={Img16} alt="image_one" className="w-[26px] object-cover" />
                                   {/* Date input field */}
                              <input type="date" id="departureDate" name="departureDate" className="border border-gray-300 rounded-md p-2"  onChange={handleDepartureDateChange} />

                                    {/* Time input field */}
                             <input type="time" id="departureTime" name="departureTime" className="border border-gray-300 rounded-md p-2" onChange={handleDepartureTimeChange}/>
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
                    <div className="flex flex-row justify-between w-full">
                      <Text className="text-2xl text-black-900  ml-0.5"   size="txtInterBold60">
                        Total
                      </Text>
                      <Text className="text-2xl text-black-900  ml-0.5"   size="txtInterBold60">
                          LKR 23000
                     </Text>
                    </div>
                    <Text size="lg" as="p" className="mr-0.5 !text-black-900_99 !font-normal">
                      Includes taxes and charges
                    </Text>
                  </div>
                </div>


                <div className="flex flex-row justify-center items-center">
                  <Img src="images/img_heart_1.png" alt="heartone_one" className="w-[31px] object-cover" />



                      <button className="text-xl ml-3 font-normal text-black-900 hover:text-red-600 focus:outline-none" type="button" onClick={handleSaveWishList}>
                          Save to wishlist
                     </button>


                     <Button className="ml-3 font-semibold min-w-[191px] rounded-[10px] bg-black text-white">
                            Pay Now
                     </Button>

                </div>
              </div>


            </div>




















            <Footer/>
          </div>
        </div>
      </div>


</div>
    </>
  );
}

export default FrameOne;
