import React, { useState, useEffect } from "react";
import { Button } from "components/Button_Second";
import { Heading } from "components/Heading1";
import { Text } from "components";
import { useNavigate } from "react-router-dom";

export default function ArticalPage(...props) {
  const [searchBarValue, setSearchBarValue] = React.useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 10;

  const [hotelData, setHotelData] = useState('');
  const [bookings, setBookings] = useState([]);
  const token = localStorage.getItem('token');
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  useEffect(() => {
    fetchHotelData();
    fetchBookingData();
  }, []);

  const fetchHotelData = async () => {
    try {
      const response = await fetch("http://localhost:5000/hotels/get", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
        }
      });
      const data = await response.json();
      setHotelData(data);
    } catch (error) {
      console.error("Error fetching hotel data:", error);
    }
  };

  const fetchBookingData = async () => {
    try {
      const response = await fetch("http://localhost:5000/hotel-booking/get-bookings", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
        }
      });
      const data = await response.json();
      setBookings(data);
    } catch (error) {
      console.error("Error fetching booking data:", error);
    }
  };

  const togglePopup = (booking) => {
    setSelectedBooking(booking);
    setShowPopup(!showPopup);
  };

  const handleSignout = () => {
    localStorage.clear(); // Clear localStorage or session-related data
    navigate("/login"); // Redirect to sign-in page
  };

  return (
    <>
      <div className="relative w-full bg-gray-300">
        {showPopup && selectedBooking && (
          <div className="fixed inset-0 z-50 flex items-center ml-[780px] bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg">
              <div className="w-[700px] h-[600px] p-[37px] sm:p-5 bg-white-A700_01 rounded-[30px] shadow-bs2">
                <div className="flex flex-col justify-center items-center gap-[20px] md:ml-0">
                  <svg
                    className="h-8 w-8 text-green-500 ml-auto cursor-pointer"
                    onClick={() => togglePopup(null)}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M0 0h24v24H0z" />
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                  <div>
                    <div className="flex flex-col items-center">
                      <div className="flex md:flex-col self-stretch justify-between items-start text-center gap-2">
                        <Heading size="2xl" as="h1" className="mt-[1px]">
                          Booking Summary
                        </Heading>
                      </div>
                    </div>
                  </div>

                  <div className="flex md:flex-col self-stretch justify-between items-start mt-[1px] gap-1">
                    <Heading size="1xl" as="h2" className="mt-2 ml-[100px]">
                      Full Name: {selectedBooking.userFirstName} {selectedBooking.userLastName}
                    </Heading>
                  </div>
                  <div className="flex md:flex-col self-stretch justify-between items-start mt-[1px] gap-1">
                    <Heading size="1xl" as="h2" className="mt-1 ml-[100px]">
                      Email Address: {selectedBooking.contactEmail}
                    </Heading>
                  </div>
                  <div className="flex md:flex-col self-stretch justify-between items-start mt-[1px] gap-1">
                    <Heading size="1xl" as="h2" className="mt-1 ml-[100px]">
                      Phone Number: {selectedBooking.contactTelephone}
                    </Heading>
                  </div>
                  <div className="flex md:flex-col self-stretch justify-between items-start mt-[1px] gap-1">
                    <Heading size="1xl" as="h2" className="mt-1 ml-[100px]">
                      Arrival Date and Time: {new Date(selectedBooking.arrivalDate).toLocaleString()}
                    </Heading>
                  </div>
                  <div className="flex md:flex-col self-stretch justify-between items-start mt-[1px] gap-1">
                    <Heading size="1xl" as="h2" className="mt-1 ml-[100px]">
                      Departure Date and Time: {new Date(selectedBooking.departureDate).toLocaleString()}
                    </Heading>
                  </div>
                  <div className="flex md:flex-col self-stretch justify-between items-start mt-[1px] gap-1">
                    <Heading size="1xl" as="h2" className="mt-1 ml-[100px]">
                      Notice: {selectedBooking.specialRequest}
                    </Heading>
                  </div>
                  <div className="flex flex-row justify-center w-[41%] p-[11px] bg-teal-A100_99">
                    <div className="flex flex-col items-end justify-start w-[91%]  ml-5 mr-4 gap-0.5">
                      <div className="flex flex-row justify-between w-full">
                        <Text className="text-2xl text-black-900  ml-0.5 mt-2" size="txtInterBold60">
                          Paid LKR {selectedBooking.bookingPrice}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex md:flex-col justify-center items-start">
          <div className="flex flex-col gap-[18px] flex-1">
            <header {...props}>
              <div className="flex sm:flex-col self-end h-[100px] justify-between items-center w-full gap-10 mx-auto md:p-5 max-w-full bg-white-A700">
                <Heading size="2xl" as="h4" className="ml-[100px]">
                  Hotel Dashboard
                </Heading>
                <div className="flex justify-between items-center w-[25%] sm:w-full gap-5">
                  <Heading size="xl1" as="h5" className="mr-[20]">
                    {hotelData.name ? hotelData.name : "Hotel"}
                  </Heading>
                  <button
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 mr-20"
                    id="user-menu-button"
                    aria-expanded="true"
                    data-dropdown-toggle="user-dropdown"
                    data-dropdown-placement="bottom"
                    onClick={toggleDropdown}
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-12 h-12 rounded-full"
                      src={hotelData.photo ? hotelData.photo : "/images/profile-picture-3.jpg"}
                      alt="user photo"
                    />
                  </button>

                  {dropdownVisible && (
                    <div className="absolute top-16 right-0 w-48 bg-white shadow-lg rounded-lg mr-20">
                      <ul className="py-2" aria-labelledby="user-menu-button">
                        <li>
                          <a
                            href="/new-hotel-add"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Create Profile
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Edit Profile
                          </a>
                        </li>
                        <li>
                          <a
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={handleSignout}
                          >
                            Sign out
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </header>

            <div className="flex justify-center  w-[98%] md:w-full ml-[9px] h-[780px]">
              <div className="flex flex-col items-center justify-center w-[95%]  gap-[18px] p-[11px] bg-gray-100 rounded-[20px] ">
                <div className="flex flex-col w-[96%] md:w-full mt-[5px] gap-[23px]">
                  <div className="flex sm:flex-col justify-between gap-5"></div>

                  <div>
                    <div className="w-[100%] ml-[20px] h-px bg-blue_gray-200" />

                    <table className="flex sm:flex-col justify-between items-start gap-5 p-[7px]">
                      <thead>
                        <tr>
                          <div className="flex md:flex-col items-center mb-[5px]">
                            <div className="flex self-start items-center ml-[210px] gap-[11px]">
                              <th>First Name</th>
                            </div>

                            <div className="flex self-start items-center ml-[230px] gap-[20px]">
                              <th>Last Name</th>
                            </div>

                            <div className="flex self-start items-center ml-[210px] gap-[20px]">
                              <th>Room Name</th>
                            </div>

                            <div className="flex self-start items-center ml-[210px] gap-[20px]">
                              <th>Action</th>
                            </div>

                            <div className="flex self-start items-center ml-[140px] gap-[11px]">
                              <th></th>
                            </div>
                          </div>
                        </tr>
                      </thead>
                    </table>

                    <div className="w-[100%] ml-[20px] h-px bg-blue_gray-200" />

                    <div className="w-full h-[470px] overflow-y-auto">
                      <table>
                        <tbody>
                          {bookings && bookings.length > 0 ? (
                            bookings.map((booking, index) => (
                              <tr key={index}>
                                <div className="flex flex-col gap-[15px] p-2.5">
                                  <div className="flex md:flex-col items-end  mr-[20px] flex-1">
                                    <td className="ml-[220px]">
                                      {booking.userFirstName}
                                    </td>
  
                                    <td className="ml-[260px]">
                                      {booking.userLastName}
                                    </td>
                                    <td className="ml-[210px]">
                                      {booking.roomName}
                                    </td>
  
                                    <div className="flex justify-center  gap-2">
                                      <td>
                                        <div className="flex justify-center ml-[180px] gap-3">
                                          <Button
                                            onClick={() => togglePopup(booking)}
                                            className="flex items-center justify-center w-[100px] h-[40px] bg-green-500 rounded-[5px]"
                                          >
                                            View
                                          </Button>
                                        </div>
                                      </td>
                                    </div>
                                  </div>
                                </div>
                              </tr>
                            ))
                          ): (
                            <tr>
                              <td colSpan="6" className="text-center">No Booking available</td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="w-[100%] mt-[180px] mb-[30px] ml-[20px] h-px bg-blue_gray-200" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
