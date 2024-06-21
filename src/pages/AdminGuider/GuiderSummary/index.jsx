import React, { useState, useEffect } from "react";
import { CloseSVG } from "../../../assets/images";
import { Img } from "components/Img";
import { Button } from "components/Button_Second";
import { Heading } from "components/Heading1";
import { Text } from "components";
import Header from "components/Header";
import { Input } from "components/Input";
import Sidebar1 from "components/Sidebar1";
import { articleData } from "../../../assets/data/articleData";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

export default function ArticalPage(...props) {
  const [searchBarValue, setSearchBarValue] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [guiderDetails, setGuiderDetails] = useState(""); // State to store guider details
  const email = localStorage.getItem("email");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const filteredArticles = articleData.filter((article) => {
    const isTitleMatch =
      article.title.toLowerCase().includes(searchBarValue.toLowerCase()) ||
      searchBarValue === "";
    return isTitleMatch;
  });

  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/tourguides/guider/${email}`)
        .then((response) => response.json())
        .then((data) => {
          setGuiderDetails(data);
          console.log(guiderDetails); // Store fetched guider details
        })
        .catch((error) => {
          console.error("Error fetching guider details:", error);
        });
    }
  }, []);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleSignout = () => {
    localStorage.clear(); // Clear localStorage or session-related data
    navigate("/login"); // Redirect to sign-in page
  };

  return (
    <>
      <div className="w-full bg-gray-300">
        {showPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            {/* Popup content */}
            <div className="bg-white p-8 rounded-lg">
              <div className="w-[700px] h-[600px] p-[37px] sm:p-5 bg-white-A700_01 rounded-[30px] shadow-bs2">
                <div className="flex flex-col justify-center items-center gap-[20px] md:ml-0">
                  <svg
                    className="h-8 w-8 text-green-500 ml-auto cursor-pointer"
                    onClick={togglePopup}
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
                      Full Name :
                    </Heading>
                  </div>
                  <div className="flex md:flex-col self-stretch justify-between items-start mt-[1px] gap-1">
                    <Heading size="1xl" as="h2" className="mt-1 ml-[100px]">
                      Email Address :
                    </Heading>
                  </div>
                  <div className="flex md:flex-col self-stretch justify-between items-start mt-[1px] gap-1">
                    <Heading size="1xl" as="h2" className="mt-1 ml-[100px]">
                      Phone Number :
                    </Heading>
                  </div>
                  <div className="flex md:flex-col self-stretch justify-between items-start mt-[1px] gap-1">
                    <Heading size="1xl" as="h2" className="mt-1 ml-[100px]">
                      place :
                    </Heading>
                  </div>
                  <div className="flex md:flex-col self-stretch justify-between items-start mt-[1px] gap-1">
                    <Heading size="1xl" as="h2" className="mt-1 ml-[100px]">
                      Arrival Date and Time :
                    </Heading>
                  </div>
                  <div className="flex md:flex-col self-stretch justify-between items-start mt-[1px] gap-1">
                    <Heading size="1xl" as="h2" className="mt-1 ml-[100px]">
                      Depature Date and Time :
                    </Heading>
                  </div>

                  <div className="flex flex-row justify-center w-[41%] p-[11px] bg-teal-A100_99">
                    <div className="flex flex-col items-end justify-start w-[91%] ml-5 mr-4 gap-0.5">
                      <div className="flex flex-row justify-between w-full">
                        <Text
                          className="text-2xl text-black-900 ml-0.5 mt-2"
                          size="txtInterBold60"
                        >
                          Paid LKR 23000
                        </Text>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center gap-3">
                    <Button className="flex items-center justify-center w-[200px] h-[40px] bg-green-500 rounded-[5px]">
                      Cancel Booking
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex md:flex-col justify-center items-start">
          <div className="flex flex-col gap-[18px] flex-1">
            <header {...props}>
              <div className="flex sm:flex-col items-center w-full gap-4 p-5 mx-auto bg-white-A700 flex-1 max-w-[100%] ">
                <div className="flex justify-center w-[65%] p-[5px] h-[60px]">
                  <div className="flex flex-col items-center">
                    <Heading size="4xl" as="h1" className="mt-[-10px]">
                      VTA
                    </Heading>
                    <Heading
                      size="s1"
                      as="p"
                      className="mb-[25px] !text-black-900_99"
                    >
                      Virtual Travel Assistance
                    </Heading>
                  </div>
                </div>

                <Heading size="2xl" as="h4" className="ml-auto">
                  Guider Dashboard
                </Heading>

                <div className="relative flex items-center ml-auto gap-3">
                  <Heading size="2xl" as="h4">
                    {guiderDetails.name ? guiderDetails.name : "Tour Guide"}
                  </Heading>
                  <button
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300"
                    id="user-menu-button"
                    aria-expanded="true"
                    data-dropdown-toggle="user-dropdown"
                    data-dropdown-placement="bottom"
                    onClick={toggleDropdown}
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-12 h-12 rounded-full"
                      src={guiderDetails.media ? guiderDetails.media : "/images/profile-picture-3.jpg"}
                      alt="user photo"
                    />
                  </button>
                  {dropdownVisible && (
                    <div className="absolute top-16 right-0 w-48 bg-white shadow-lg rounded-lg">
                      <ul className="py-2" aria-labelledby="user-menu-button">
                        <li>
                          <a
                            href="/newtourguideserviceprovider"
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

            <div className="flex md:flex-col justify-between w-full gap-5 mx-auto md:p-5 overflow-auto max-w-[1400px]">
              <div className="flex justify-center w-[98%] md:w-full p-9 sm:p-5 bg-gray-100 shadow-xs rounded-[20px] h-[595px] md:h-full mb-[10px]">
                <div className="flex justify-center w-[97%] md:w-full mb-[45px]">
                  <div className="flex md:flex-col justify-between items-start w-full gap-5">
                    <div className="flex flex-col w-[26%] md:w-full mt-3 gap-[20px] sm:gap-[29px]">
                      <Img
                        src={guiderDetails.media ? guiderDetails.media : "/images/profile-picture-3.jpg"}
                        alt="image"
                        className="h-[325px] object-cover rounded-[20px]"
                      />
                      <div className="flex flex-col md:flex-row gap-[10px]">
                        <div className="flex p-[7px] bg-blue_gray-100 flex-1 rounded-[10px] h-[50px]">
                          <Img
                            src="images/img_eye_2.png"
                            alt="eyetwo_one"
                            className="w-[50px] ml-[31px] md:ml-0 object-cover"
                          />
                          <Heading
                            size="2xl"
                            as="h4"
                            className="w-[300px] mt-[10px] ml-[50px]"
                          >
                            145
                          </Heading>
                        </div>
                        <div className="flex p-[15px] bg-blue_gray-100 flex-1 rounded-[10px] h-[50px]">
                          <Img
                            src="images/img_star_6.svg"
                            alt="image"
                            className="h-[40px] w-[40px] ml-[31px] md:ml-0"
                          />
                          <Heading
                            size="2xl"
                            as="h4"
                            className="w-[300px] mt-[10px] ml-[50px]"
                          >
                            4.6
                          </Heading>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col w-[96%] md:w-full mt-[5px] gap-[23px]">
                      <div className="flex sm:flex-col justify-between gap-5">
                        <Heading
                          size="2xl"
                          as="h4"
                          className="w-[300px] ml-[120px]"
                        >
                          Booking Notifications
                        </Heading>
                      </div>

                      <div>
                        <div className="w-[80%] ml-[120px] h-px bg-blue_gray-200" />

                        <table className="flex sm:flex-col justify-between items-start gap-5 p-[7px]">
                          <thead>
                            <tr>
                              <div className="flex md:flex-col justify-center items-center mb-[5px] mr-[140px]">
                                <div className="flex self-start justify-center items-center ml-[120px] gap-[11px]">
                                  <th>Email</th>
                                </div>

                                <div className="flex self-start justify-center items-center ml-[240px] gap-[20px]">
                                  <th>From</th>
                                </div>

                                <div className="flex self-start justify-center items-center ml-[30px] gap-[11px]">
                                  <Heading as="h5" className="ml-[35px]">
                                    <th>To</th>
                                  </Heading>
                                </div>

                                <div className="flex self-start justify-center items-center ml-[140px] gap-[11px]">
                                  <th></th>
                                </div>
                              </div>
                            </tr>
                          </thead>
                        </table>

                        <div className="w-[80%] ml-[120px] h-px bg-blue_gray-200" />

                        <div className="w-full h-[420px] overflow-y-auto">
                          <table>
                            <tbody>
                              {filteredArticles.map((article, index) => (
                                <tr key={index}>
                                  <div className="flex flex-col gap-[15px] p-2.5">
                                    <div className="flex md:flex-col justify-center items-end flex-1">
                                      <td style={{ width: "300px" }}>
                                        {article.title}
                                      </td>

                                      <td style={{ width: "100px" }}>
                                        {article.views}
                                      </td>
                                      <td style={{ width: "100px" }}>
                                        {article.likes}
                                      </td>

                                      <div className="flex justify-center gap-2">
                                        <td>
                                          <div className="flex justify-center ml-[60px] gap-3">
                                            <Button
                                              onClick={togglePopup}
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
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div className="w-[80%] ml-[120px] h-px bg-blue_gray-200" />
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
}
