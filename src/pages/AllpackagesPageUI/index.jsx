import React, { useEffect, useState } from "react";
import { Button, Img, Text } from "components";
import Footer from "components/Footer";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Navbar.jsx";
import Searchbar from "./searchbar.jsx";
import { BASE_URL } from "config.js";

const AllpackagesPageUIPage = () => {
  const [tourPackages, setTourPackages] = useState([]);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchTourPackages();
    checkSignInStatus();
  }, []);

  const fetchTourPackages = async () => {
    try {
      const response = await fetch(`${BASE_URL}/tourpackage/`);
      if (!response.ok) {
        throw new Error("Failed to fetch tour packages");
      }
      const data = await response.json();
      setTourPackages(data);
    } catch (error) {
      console.error("Error fetching tour packages:", error);
    }
  };

  const checkSignInStatus = () => {
    const token = localStorage.getItem('token');
    setIsSignedIn(!!token);
  };

  const handleBookNow = (packageId) => {
    if (isSignedIn) {
      navigate(`/packagedetails/${packageId}`);
    } else {
      setErrorMessage("You need to sign in to book a tour package.");
      setTimeout(() => {
        navigate('/login');
      }, 5000); // Redirect after 5 seconds
    }
  };

  return (
    <>
      <Header />
      <div className="bg-bg1-20 flex flex-col font-inter items-center justify-start mx-auto pt-3 sm:px-3 w-full">
        <div className="md:h-[1024px] md:flex-col sm:h-[703px] h-[700px] w-full mx-auto md:px-5 relative ">
          {/* Search Bar */}
          <div className="absolute md:h-[1024px] h-[703px] inset-x-[0] mx-auto top-[0] w-full px-10">
            <Img
              className="h-[660px] m-auto object-cover rounded-[30px] w-full"
              src="images/travel4.jpg"
              alt="rectangleFour"
            />
            <div className="absolute flex flex-col md:gap-10 gap-[388px] justify-start right-[5%] top-[5%] w-[77%] mt-[450px] md:mt-[300px]">
              <section>
                <Searchbar/>
              </section>
            </div>
          </div>
        </div>

        {/* Tour Packages */}
        <div className="flex flex-col items-start justify-start max-w-[1271px] mt-[68px] mx-auto md:px-5 w-full">
          <Text className="text-black-900_b2 text-xl" size="txtInterMedium20Black900b2">
            Tour Packages
          </Text>
          <Text className="sm:text-4xl md:text-[38px] text-[40px] text-black-900" size="txtInterBold40">
            Our Best Package
          </Text>
          {errorMessage && (
            <div className="bg-red-300 items-center text-center py-2 px-4 mb-4 rounded">
              {errorMessage}
            </div>
          )}
          <div className="gap-16 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] mt-[49px] w-[105%]  md:w-full md:ml-auto">
            {tourPackages.map((tourPackage) => (
              <div key={tourPackage.id} className="hover:cursor-pointer h-[450px]  hover:relative relative rounded-[20px] hover:shadow-bs shadow-bs hover:w-full w-[100%]">
                <Img
                  className="h-[450px] m-auto object-cover rounded-[20px] w-full"
                  src={tourPackage.image}
                  alt={tourPackage.name}
                />
                <div className="absolute flex flex-col md:gap-90 gap-[300px] h-max inset-[0] items-center justify-center m-auto w-[93%]">
                  <div className="flex flex-row items-center justify-between w-[97%] md:w-full">
                    <Button
                      className="cursor-pointer font-medium leading-[normal] min-w-[100px] text-center text-xl"
                      shape="round"
                      color="gray_700_66"
                      size="xs"
                    >
                      {tourPackage.duration}
                    </Button>
                    <div className="bg-gray-700_66 flex flex-row gap-2.5 items-center justify-center p-[5px] rounded-[18px]">
                      <Img
                        className="h-[21px] ml-[9px] w-[22px]"
                        src="images/img_star6_2.svg"
                        alt="starSix"
                      />
                      <Text
                        className="mr-4 text-white-A700_01 text-xl"
                        size="txtInterMedium20WhiteA70001"
                      >
                        {tourPackage.ratting}
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gray-600_99 md:h-30 md:mb-[-10px] h-[87px] p-[5px] relative rounded-[20px] w-full">
                    <Text
                      className="absolute left-[6%] text-white-A700 text-xl top-[8%]"
                      size="txtInterSemiBold20"
                    >
                      {tourPackage.name}
                    </Text>
                    <Text
                      className="absolute bottom-[6%] left-[6%] text-white-A700 text-xl"
                      size="txtInterMedium20WhiteA700"
                    >
                      ${tourPackage.price}
                    </Text>
                    <Button
                      className="absolute hover:bg-[#CAF4FF] hover:text-black-900 cursor-pointer font-bold h-max inset-y-[0] leading-[normal] min-w-[130px] my-auto right-[7%] rounded-[15px] text-center text-1xl mb-[6px]"
                      onClick={() => handleBookNow(tourPackage.id)}
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer className="bg-black-900_02 flex items-center justify-center mt-[161px] md:px-5 w-[1870px]" />
      </div>
    </>
  );
};

export default AllpackagesPageUIPage;
