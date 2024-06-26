import React, { useState, useEffect } from "react";
import { Button, Img, Text } from "components";
import Footer from "components/Footer";
import { Link, useNavigate } from "react-router-dom";
import Header from '../../components/Navbar.jsx';
import SearchBar from "./searchbar";
import Navbar from "../../components/Navbar.jsx";
import { BASE_URL } from "config.js";

const TourGuidersUIPage = () => {
  const [tourGuides, setTourGuides] = useState([]);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchTourGuides();
    checkSignInStatus();
  }, []);

  const fetchTourGuides = async () => {
    try {
      const response = await fetch(`${BASE_URL}/tourguides/`);
      if (!response.ok) {
        throw new Error("Failed to fetch tour guides");
      }
      const data = await response.json();
      setTourGuides(data);
    } catch (error) {
      console.error("Error fetching tour guides:", error);
    }
  };

  const checkSignInStatus = () => {
    const token = localStorage.getItem('token');
    setIsSignedIn(!!token);
  };

  const handleBookNow = (tourGuideId) => {
    if (isSignedIn) {
      navigate(`/guidedetil/${tourGuideId}`);
    } else {
      setErrorMessage("You need to sign in to book a tour guider.");
      setTimeout(() => {
        navigate('/login');
      }, 5000); // Redirect after 2 seconds
    }
  };

  return (
    <>

    <Navbar/>
      
      <div className="bg-bg1-20 flex flex-col font-inter items-center justify-start mx-auto pt-3 w-full">
       
        <div className="h-[650px] mt-[10px] md:h-[500px] mx-auto md:px-5 relative  w-full">
         
          <div className="absolute h-[650px] md:h-[500px] inset-[0] justify-center px-10 md:px-2 m-auto w-full">

            <Img
              className="h-[650px] md:h-[500px] m-auto object-cover rounded-[30px] w-full"
              src="images/img_rectangle4_1.png"
              alt="rectangleFour"
            />
            <div className="absolute flex flex-col  md:gap-10 gap-[399px] justify-start right-[8%] top-[30%] w-[76%] mt-[280px] md:mt-[-20px]">
                  <section>
                    <SearchBar/>
                  </section>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start max-w-[1334px] mt-[120px] md:mt-[80px] mx-auto md:px-5 w-full">
          <Text className="text-black-900_b2 text-xl" size="txtInterMedium20">
            Tour Guiders
          </Text>
          <Text
            className="sm:text-3xl md:text-[38px] text-[40px] text-black-900"
            size="txtInterBold40"
          >
            Our Best Tour Guiders
          </Text>
          {errorMessage && (
            <div className="bg-red-300 items-center text-center py-2 px-4 mb-4 rounded">
              {errorMessage}
            </div>
          )}
          <div className="md:gap-5 gap-[70px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] mt-9 w-[105%] md:w-full md:ml-auto">
            {tourGuides.map((tourGuide, index) => (
              <div key={index} className="h-[450px] relative rounded-[20px] shadow-bs w-full">
                <Img
                  className="h-[450px] m-auto object-cover rounded-[20px] w-full"
                  src={tourGuide.media}
                  alt={tourGuide.name}
                />
                <div className="absolute flex flex-col md:gap-50 gap-[280px] h-max inset-[0] justify-center m-auto w-[93%]">
                  <div className="bg-gray-700_66_01 flex flex-row gap-2.5 items-center justify-end md:ml-[240px] sm:ml-[220px] ml-[188px] mr-1 p-[5px] rounded-[18px] w-[29%] md:w-[29%]">
                    <Img className="h-[21px] w-[22px]" src="images/img_star6.svg" alt="starSix" />
                    <Text className="mr-4 text-white-A700_01 text-xl" size="txtInterMedium20WhiteA70001">
                      {tourGuide.starRating}
                    </Text>
                  </div>
                  <div className="bg-gray-600_99 flex flex-col items-center justify-end p-6 rounded-[20px] w-full">
                    <div className="flex flex-row items-start justify-between mt-[5px] w-[98%] md:w-full">
                      <div className="flex flex-col items-start justify-start">
                        <Text className="text-white-A700 text-xl" size="txtInterSemiBold20">
                          {tourGuide.name}
                        </Text>
                        <Text className="text-white-A700 text-xl" size="txtInterMedium20WhiteA700">
                          ${tourGuide.price}
                        </Text>
                      </div>
                      <Button
                        className="absolute hover:bg-[#CAF4FF] hover:text-black-900 cursor-pointer font-bold h-max inset-y-[0] leading-[normal] min-w-[130px] my-auto right-[7%] rounded-[15px] text-center text-1xl mb-[10px]"
                        shape="round"
                        onClick={() => handleBookNow(tourGuide.id)}
                      >
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default TourGuidersUIPage;
