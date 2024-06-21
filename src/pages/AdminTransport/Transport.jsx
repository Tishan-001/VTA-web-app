import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {  Img} from "components/Img";
import {Button} from "components/Button_Second";
import { Heading } from "components/Heading1";
import { articleData } from "../../assets/data/articleData";


export default function ArticalPage(...props) {
  const [searchBarValue, setSearchBarValue] = React.useState("");
  const [showPopup, setShowPopup] = useState(false); 
  const [transportName, setTransportName] = useState('');
  const [transportImage, setTransportImage] = useState('');
  const [vehicles, setVehicles] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [createState,setCreateState]=useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 10;
  const navigate = useNavigate();

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  const token = localStorage.getItem('token');  
  useEffect(() => {
    if (token) {
      fetch(`http://localhost:5000/transports/transport`,{
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.text();
        
        })
        .then((text) => {
          if (text) {
            try {
              const data = JSON.parse(text);
              if (data != null) {
                setTransportName(data.name);
                setTransportImage(data.imageUrl);
                setCreateState(true);
                setVehicles(data.vehicles);
                console.log(transportName);
              }
            } catch (error) {
              console.error('Error parsing JSON:', error);
            }
          } else {
            console.log("Error fetching transport: Empty response received");
          }
        })
        .catch((error) => {
          console.error("Error fetching transport: ", error);
        });
    }
  }, [token]);

  const handleCreate= ()=>{
    navigate("/addVehical");
  }
  const handleView = (vehicle)=>{
    navigate("/taxidetil",{ state: { vehicle } });
  }
  const handleEdit = (vehicle)=>{
    navigate("/editVehical",{ state: { vehicle }});
  }
  const handleDelete = async (vehicle) => {
    try {


        const response = await fetch("http://localhost:5000/transports/delete/vehicle", {
            method: "DELETE",
            headers: {
              'Authorization': `Bearer ${token}`,
            },
            body: vehicle.id
        });

        const data =  await response.text();
        console.log("Delete Response:", data);
        if (response.ok) {
          setVehicles((prevVehicles) => prevVehicles.filter((v) => v.id !== vehicle.id));
          alert("Vehicle deleted successfully");
        } else {
                console.error("Error:", data.error);
        }
    } catch (error) {
        console.error("Upload Error:", error);
    }
};

  const filteredArticles = articleData.filter((article) => {
    // Filter based on search bar value
    const isTitleMatch =
      article.title.toLowerCase().includes(searchBarValue.toLowerCase()) ||
      searchBarValue === "";

    // Filter based on selected service
   
    return isTitleMatch ;
  });

  // Logic to get current articles based on currentPage


  return (
    <>
      
      <div className="w-[90%] bg-gray-300">
        <div className="flex md:flex-col justify-center items-start">

          <div className="flex flex-col gap-[18px] flex-1">
            
              <header {...props}>
                        <div className="flex sm:flex-col self-end h-[100px] justify-between items-center w-full  gap-10 mx-auto md:p-5 max-w-full bg-white-A700 ">
                        
                        <Heading size="2xl" as="h4" className="ml-[100px]">
                            Transport Dashbord
                        </Heading>
                        <div className="flex justify-between items-center w-[25%] sm:w-full gap-5 ">
                            <Heading size="xl1" as="h5" className=" mr-[20]">
                            {transportName}
                            </Heading>
                            <button
                              type="button"
                              className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 mr-[20px]"
                              id="user-menu-button"
                              aria-expanded="true"
                              data-dropdown-toggle="user-dropdown"
                              data-dropdown-placement="bottom"
                              onClick={toggleDropdown}
                            >
                              <span className="sr-only">Open user menu</span>
                              <img
                                className="w-12 h-12 rounded-full "
                                src={transportImage ? transportImage: "images/img_image_75.png"}
                                alt="user photo"
                              />
                            </button>
                        </div>
                       
                  {dropdownVisible && (
                    <div className="absolute top-16 right-0 w-48 bg-white shadow-lg rounded-lg">
                      <ul className="py-2" aria-labelledby="user-menu-button">
                        {!createState &&(<li>
                          <a
                            href="/addtranspotation"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Create Profile
                          </a>
                        </li>)}
                        <li>
                          <a
                            href="/addtranspotation"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Edit Profile
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Sign out
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                        </div>
              </header>
           
           

            <div className="flex justify-center  w-[98%] md:w-full ml-[9px]">
              <div className="flex flex-col items-center justify-center w-[1140px]  gap-[18px] p-[11px] bg-gray-100 rounded-[20px] ">
                
               
               
               
                <div className="flex flex-col w-[96%] md:w-full mt-[5px] gap-[23px]">
                  <div className="flex sm:flex-col justify-between gap-5">


                 
                    <Button
                      leftIcon={<Img src="images/img_plus_1.png" alt="plus 1" className="w-[17px] h-[17px]" />}
                      className="flex items-center justify-center h-[53px] pl-[17px] pr-[22px] gap-4 sm:pr-5 text-white-A700 text-center text-xl font-bold bg-blue_gray-200 min-w-[138px] rounded-[10px]"
                      onClick = {handleCreate}
                    >
                      Create
                    </Button>

                    
                  </div>
                  
                 
                 
                  <div >
                    <div className="w-full h-px bg-blue_gray-200" />
                   
                    <table className="flex sm:flex-col justify-between items-start gap-1 p-[7px]">
                      <thead>
                       <tr>
                         <div className="flex md:flex-col justify-center items-center mb-[5px] mr-[120px]">
                            <div className="flex self-start justify-center items-center ml-[32px] gap-[11px]">
                              
                              <th >Vehicles</th>
                            </div>

                            <div className="flex self-start justify-center items-center ml-[100px] gap-[20px]">
                              
                              <th >Image</th>
                            </div>
                            

                            {/* <div className="flex self-start justify-center items-center  ml-[120px] gap-[11px]">
                              <Img src="images/img_eye_1.png" alt="eyeone_one" className="w-[21px] object-cover" />
                              <Heading as="h5" className="ml-[13px]">
                              <th >Views</th>
                              </Heading>
                            </div> */}

                            <div className="flex self-start justify-center items-center ml-[110px] gap-[11px]">
                            <Img
                                src="images/img_like_1_1.png"
                                alt="like1one_one"
                                className="self-start w-[15px] object-cover"
                              />
                              <Heading as="h5" className="ml-[13px]">
                              <th >Rating</th>
                              </Heading>
                            </div>

                            <div className="flex self-start justify-center items-center ml-[150px] gap-[11px]">
                            <Img
                                src="images/img_share_1_1.png"
                                alt="share1one_one"
                                className="self-start w-[15px] object-cover"
                              />
                              <Heading as="h5" className="ml-[13px]">
                              <th >Status</th>
                              </Heading>
                              
                            </div>

                            <div className="flex self-start justify-center items-center ml-[150px] gap-[11px]">
                              
                              <th ></th>
                            </div>

                          </div>
                        </tr>
                      </thead>
                    </table>

                    <div className="w-full h-px bg-blue_gray-200" />

                    <div className="w-full h-[400px] overflow-y-auto">



                    <table>
                      <tbody>
                       {vehicles.map((vehicle, index) => (
                          <tr key={index}>

                          <div className="flex flex-col gap-[2px] p-2.5">
                              <div className="flex md:flex-col justify-center items-end  mr-[20px] flex-1">
                              
                              <td style={{ width: "180px" }}>{vehicle.type}</td>
                        <td style={{ width: "200px" }}>
                          <img src={vehicle.photo} alt="article" className="w-[37px] object-cover rounded-[5px]" />
                        </td>
                        <td style={{ width: "190px" }}>{vehicle.ratings}</td>
                        <td style={{ width: "100px" }}>
                          {/* {article.Status === "Availabel" ? (
                            <span style={{ display: "block", backgroundColor: "green", padding: "3px", borderRadius: "5px", color: "white",width:"100%" }}>
                              Available
                            </span>
                          ) : (
                            <span style={{  display: "block",backgroundColor: "red", padding: "3px", borderRadius: "5px", color: "white",width:"100%" }}>
                              UnAvailable
                            </span>
                          )} */}
                        </td>
                                
                                <div className="flex justify-center  gap-2">
                                  <td>
                                    <div className="flex justify-center ml-[90px] gap-3">
                                    <Button className="flex items-center justify-center h-[28px] w-[28px] bg-green-500 rounded-[5px]">
                                        <Img src="images/img_group_34.png " className="w-[20px] h-[20px]" onClick={() => handleView(vehicle)}/>
                                      </Button>
                                      <Button className="flex items-center justify-center h-[28px] w-[28px] bg-green-500 rounded-[5px]">
                                        <Img src="images/img_group_34.png " className="w-[20px] h-[20px]" onClick={()=>handleEdit(vehicle)}/>
                                      </Button>
                                      <Button className="flex items-center justify-center h-[28px] w-[28px] bg-red-100 rounded-[5px]">
                                        <Img src="images/img_group_33.png" className="w-[20px] h-[20px]" onClick={()=>handleDelete(vehicle)} />
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
