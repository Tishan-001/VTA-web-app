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

export default function ArticalPage(...props) {
  const [searchBarValue, setSearchBarValue] = React.useState("");
  const [showPopup, setShowPopup] = useState(false); 
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 10;
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      const response = await fetch("http://localhost:5000/hotels/get/rooms", {
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
      const response = await fetch(`http://localhost:5000/hotels/delete/room/${roomId}`, {
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

  const clickRoomAdd = () => {
    navigate("/add-new-room");
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
                    Nuwani Thushari
                  </Heading>
                  <Img
                    src="images/img_image_75.png"
                    alt="imageseventyfiv"
                    className="h-[55px] w-[56px] rounded-[50%] mr-[30px]"
                  />
                </div>
              </div>
            </header>

            <div className="flex justify-center w-[98%] md:w-full ml-[9px]">
              <div className="flex flex-col items-center justify-center w-[1140px] gap-[18px] p-[11px] bg-gray-100 rounded-[20px]">
                <div className="flex flex-col w-[96%] md:w-full mt-[5px] gap-[23px]">
                  <div className="flex sm:flex-col justify-between gap-5">
                    <Button
                      leftIcon={
                        <Img
                          src="images/img_plus_1.png"
                          alt="plus 1"
                          className="w-[17px] h-[17px]"
                        />
                      }
                      className="flex items-center justify-center h-[53px] pl-[17px] pr-[22px] gap-4 sm:pr-5 text-white-A700 text-center text-xl font-bold bg-blue_gray-200 min-w-[138px] rounded-[10px]"
                      onClick={clickRoomAdd}
                    >
                      Create
                    </Button>
                  </div>

                  <div>
                    <div className="w-full h-px bg-blue_gray-200" />

                    <table className="flex sm:flex-col justify-between items-start gap-1 p-[7px]">
                      <thead>
                        <tr>
                          <div className="flex md:flex-col justify-center items-center mb-[5px] mr-[120px]">
                            <div className="flex self-start justify-center items-center ml-[32px] gap-[11px]">
                              <th>Hotel Rooms</th>
                            </div>

                            <div className="flex self-start justify-center items-center ml-[100px] gap-[20px]">
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
                        <tbody>
                          {rooms.map((room) => (
                            <tr key={room.id}>
                              <div className="flex flex-col gap-[2px] p-2.5">
                                <div className="flex md:flex-col justify-center items-end mr-[20px] flex-1">
                                  <td style={{ width: "180px" }}>{room.type}</td>
                                  <td style={{ width: "200px" }}>
                                    <img
                                      src={room.photo}
                                      alt="room"
                                      className="w-[37px] object-cover rounded-[5px]"
                                    />
                                  </td>
                                  <td style={{ width: "190px" }}>{room.price}</td>
                                  <td style={{ width: "190px" }}>{room.bedCount}</td>
                                  <td style={{ width: "100px" }}>
                                    {room.isAvailable ? (
                                      <span
                                        style={{
                                          display: "block",
                                          backgroundColor: "green",
                                          padding: "3px",
                                          borderRadius: "5px",
                                          color: "white",
                                          width: "100%",
                                        }}
                                      >
                                        Available
                                      </span>
                                    ) : (
                                      <span
                                        style={{
                                          display: "block",
                                          backgroundColor: "red",
                                          padding: "3px",
                                          borderRadius: "5px",
                                          color: "white",
                                          width: "100%",
                                        }}
                                      >
                                        UnAvailable
                                      </span>
                                    )}
                                  </td>
                                  <div className="flex justify-center gap-2">
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
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="w-full h-[2px] bg-blue_gray-200" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
