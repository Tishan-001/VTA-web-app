import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CloseSVG } from "../../assets/images";
import { Img } from "components/Img";
import { Button } from "components/Button_Second";
import { Heading } from "components/Heading1";
import Header from "components/Header";
import { Input } from "components/Input";
import { Text } from "components";
import { TextArea } from "components/TextArea";
import Sidebar1 from "components/Sidebar1";
import { articleData } from "../../assets/data/articleData";
import { message } from "antd";
import { BASE_URL } from "config";

export default function ArticalPage(...props) {
  const [searchBarValue, setSearchBarValue] = React.useState("");
  const [showPopup, setShowPopup] = useState(false); 
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 10;
  const token = localStorage.getItem('token');
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [hotelData, setHotelData] = useState('');

  useEffect(() => {
    fetchRooms();
    fetchHotelData();
  }, []);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const fetchHotelData = async () => {
    try {
      const response = await fetch(`${BASE_URL}/hotels/get`, {
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

  const fetchRooms = async () => {
    try {
      const response = await fetch(`${BASE_URL}/hotels/get/rooms`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
        }
      });
      const data = await response.json();
      setRooms(data);
    } catch (error) {
      console.error("Error fetching rooms:", error);
    }
  };

  const deleteRoom = async (roomId) => {
    try {
      const response = await fetch(`${BASE_URL}/hotels/delete/room/${roomId}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`, 
        },
      });
      if (response.ok) {
        setRooms(rooms.filter((room) => room.id !== roomId));
        message.success("Room deleted successfully.");
      } else {
        message.error("Failed to delete the room.");
      }
    } catch (error) {
      console.error("Error deleting room:", error);
    }
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleSignout = () => {
    localStorage.clear(); // Clear localStorage or session-related data
    navigate("/login"); // Redirect to sign-in page
  };

  const filteredArticles = articleData.filter((article) => {
    // Filter based on search bar value
    const isTitleMatch =
      article.title.toLowerCase().includes(searchBarValue.toLowerCase()) ||
      searchBarValue === "";
    return isTitleMatch;
  });

  // Logic to get current articles based on currentPage

  return (
    <>
      <div className="w-[90%] bg-gray-300">
        <div className="flex md:flex-col justify-center items-start">
          <div className="flex flex-col gap-[18px] flex-1">
            <header {...props}>
              <div className="flex sm:flex-col self-end h-[100px] justify-between items-center w-full gap-10 mx-auto md:p-5 max-w-full bg-white-A700">
                <Heading size="2xl" as="h4" className="ml-[100px]">
                  Hotel Dashbord
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
                    <div className="absolute top-16 right-0 w-48 bg-white shadow-lg rounded-lg">
                      <ul className="py-2" aria-labelledby="user-menu-button">
                        <li>
                          <a
                            href="/new-hotel-add"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-600 hover:text-white-A700"
                          >
                            Create Profile
                          </a>
                        </li>
                        <li>
                          <a
                            href="/update-hotel"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-600 hover:text-white-A700"
                          >
                            Edit Profile
                          </a>
                        </li>
                        <li>
                          <a
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-600 hover:text-white-A700"
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

            <div className="flex justify-center  w-[98%] h-[780px] md:w-full ml-[9px] mb-[10px]">
              <div className="flex flex-col items-center justify-center w-[95%]  gap-[18px] p-[11px] bg-gray-100 rounded-[20px]">
                <div className="flex flex-col w-[96%] md:w-full mt-[5px] gap-[23px]">

                  <div>
                    <div className="w-full h-px bg-blue_gray-200" />

                    <table className="flex sm:flex-col justify-between items-start gap-1 p-[7px]">
                      <thead>
                        <tr>
                          <div className="flex md:flex-col justify-center items-center mb-[5px] mr-[120px]">
                            <div className="flex self-start justify-center items-center ml-[120px] gap-[20px]">
                              <th>Hotel Rooms</th>
                            </div>

                            <div className="flex self-start justify-center items-center ml-[150px] gap-[20px]">
                              <th>Image</th>
                            </div>

                            <div className="flex self-start justify-center items-center ml-[120px] gap-[11px]">
                              <Heading as="h5" className="ml-[13px]">
                                <th>Price</th>
                              </Heading>
                            </div>

                            <div className="flex self-start justify-center items-center ml-[110px] gap-[11px]">
                              <Heading as="h5" className="ml-[13px]">
                                <th>Bedroom</th>
                              </Heading>
                            </div>

                            <div className="flex self-start justify-center items-center ml-[150px] gap-[11px]">
                              <Heading as="h5" className="ml-[13px]">
                                <th>Status</th>
                              </Heading>
                            </div>

                            <div className="flex self-start justify-center items-center ml-[150px] gap-[11px]">
                              <Heading as="h5" className="ml-[13px]">
                                <th>Action</th>
                              </Heading>
                            </div>
                          </div>
                        </tr>
                      </thead>
                    </table>

                    <div className="w-full h-px bg-blue_gray-200" />

                    <div className="w-full h-[400px] overflow-y-auto">
                      <table>
                        <tbody>{rooms && rooms.length > 0 ? (
                            rooms.map((room) => (
                              <tr key={room.id}>
                                <div className="flex flex-col gap-[px] p-2.5">
                                  <div className="flex md:flex-col items-end ml-[80px]  flex-1">
                                    <div> 
                                    <td className="w-[200px]">{room.name}</td>
                                    </div>
                                    <div className="ml-[100px]"> 
                                    <td className="" >
                                      <img
                                        src={room.photo}
                                        alt="room"
                                        className="w-[37px] object-cover rounded-[5px]"
                                      />
                                    </td>
                                    </div>
                                    <td className="ml-[142px]">{room.price}</td>
                                    <td className="ml-[145px]">{room.bedCount}</td>
                                    <td className="w-[300px]">
                                      {room.isAvailable ? (
                                        <span
                                        className="ml-[190px] "
                                          style={{
                                            display: "block",
                                            backgroundColor: "green",
                                            padding: "3px",
                                            borderRadius: "5px",
                                            color: "white",
                                            width: "35%",
                                            textAlign: "center",
                                          }}
                                        >
                                          Available
                                        </span>
                                      ) : (
                                        <span
                                        className="ml-[190px]"
                                          style={{
                                            display: "block",
                                            backgroundColor: "red",
                                            padding: "3px",
                                            borderRadius: "5px",
                                            color: "white",
                                            width: "35%",
                                            textAlign: "center",
                                          }}
                                        >
                                          UnAvailable
                                        </span>
                                      )}
                                    </td>
                                    <div className="flex justify-center gap-2 ml-[10px]">
                                      <td>
                                        <div className="flex justify-center ml-[90px] gap-3">
                                          <Button className="flex items-center justify-center h-[28px] w-[28px] bg-green-500 rounded-[5px]">
                                            <Img
                                              src="images/img_group_34.png "
                                              className="w-[20px] h-[20px]"
                                            />
                                          </Button>
                                          <Button className="flex items-center justify-center h-[28px] w-[28px] bg-red-100 rounded-[5px]"
                                          onClick={() => deleteRoom(room.id)}>
                                            <Img
                                              src="images/img_group_33.png"
                                              className="w-[20px] h-[20px]"
                                            />
                                          </Button>
                                        </div>
                                      </td>
                                    </div>
                                  </div>
                                </div>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan="6" className="text-center">No rooms available</td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="w-full mt-[190px] h-[2px] bg-blue_gray-200" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
