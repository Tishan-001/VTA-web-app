import React from "react";

import { Button, Img, Line, List, Text } from "components";

import { Heading } from "components/Heading1";
import { Input } from "components/Input";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { BASE_URL } from "config";

export default function EmailComformation() {

  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const location = useLocation();
  const { email } = location.state || {};
  const [otp, setOtp] = useState('');

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = async () => { 
    try {
      const response = await fetch(`${BASE_URL}/auth/register/email/verify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          source: email,
          otp: otp
        })
      });
  
      try {
        const data = await response.json();
        if (response.ok) {
          console.log("Verfication successful", data);
          navigate('/login');
        } else {
          console.error("Verification failed:", data);
          alert(data.error || "An error occurred during verification.");
        }
      } catch (e) {
        // Handle JSON parsing error
        console.error("Error parsing JSON:", e);
        alert("An error occurred, please try again.");
      }
    } catch (error) {
      console.error("Error during verification:", error);
      alert("An error occurred, please check your network and try again.");
    }
  };

  return (
    <>
      
      
      <div className="flex flex-row md:flex-col justify-center  bg-white-A700_01 items-center h-[700px] w-[70%] md:h-[600px]  md:w-[95%] md:px-[10px] gap-[33px] left-0 bottom-0 right-0 top-0 m-auto md:gap-5 shadow-bs absolute rounded-[10px]">
        <div className="relative w-[52%]  h-[700px] md:w-full md:h-[600px] rounded-bl-[10px] rounded-tl-[10px] overflow-hidden">
          <div className="absolute inset-0 bg-opacity-50 bg-[#854a9bcc]"></div>
          <Img
            src="images/img_signup_1.png"
            alt="signupone_one"
            className="w-full h-full object-cover"
          />
        </div>

          <div className="flex flex-col items-center justify-start w-[50%] md:w-full">
            
            <Heading size="xl" as="h1" className="tracking-[3.00px] mb-[250px]">
              Sign Up Now
            </Heading>

            <Text className="mb-5 mt-[-200px]">An OTP has been send to your Email please verify it below</Text>
            <textarea
                id="message"
                name="message"
                rows="4"  // Specify the number of visible text lines
                className="border border-gray-300 mb-5 rounded-md px-3 py-2 mt-4 h-10 w-[200px]"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
            />
            <Button onClick={handleSubmit} size="xl" color="bg-deep_purple-400" as="h2" className="!text-white-A700 mt-5 w-[150px] bg-[#854a9bcc] p-3 rounded-[5px] tracking-[3.60px]">
              Verify
            </Button>
            <Text size="lg" as="p" className="mt-5 !text-black-900">
              <span className="text-black-900_66 md:!text-[18px] mb:[-30px]">Didn't Recieve OTP ?</span>
              <span className="text-black-900"></span>
              <a href=""><span className="text-[#854a9bcc] "> Sign Up</span></a>
            </Text>
            
          </div>
          
        </div>

        
       
        <div className="w-[80%] h-[250px] hidden"> 
        <div className="flex flex-col items-center justify-start w-[36%] h-max left-[15%] bottom-0 top-0 p-[31px] m-auto sm:p-5 rounded-tl-[10px] rounded-bl-[10px] absolute">
          <Text size="2xl" as="p" className="!text-white-A700">
            Virtual Travel Assistant
          </Text>
          <div className="h-[5px] w-[13%] mt-3.5 bg-white-A700" />
          <div className="flex flex-col items-start justify-start w-full mt-[42px] mb-[38px] gap-[45px] md:px-5 max-w-[420px]">
            
            <div className="flex flex-row sm:flex-col justify-start items-start gap-5 sm:gap-5">
              <Img src="images/img_check_mark_1.png" alt="checkmarkone" className="w-[51px] md:h-auto object-cover" />
              <Text size="xl" as="p" className="!text-white-A700">
                Customize Your Journey with our Travel Plan.
              </Text>
            </div>
            <div className="flex flex-row sm:flex-col justify-start items-start gap-5 sm:gap-5">
              <Img src="images/img_check_mark_1.png" alt="checkmarkone" className="w-[51px] md:h-auto object-cover" />
              <Text size="xl" as="p" className="mt-[3px] sm:mt-0 !text-white-A700">
                Stay with best view location with our hotels
              </Text>
            </div>
            <div className="flex flex-row justify-start items-start gap-5">
              <Img src="images/img_check_mark_1.png" alt="checkmarkone" className="w-[51px] md:h-auto object-cover" />
              <Text size="xl" as="p" className="!text-white-A700">
                Get best experience with our Guiders
              </Text>
            </div>
            <div className="flex flex-row justify-start items-start gap-5">
              <Img src="images/img_check_mark_1.png" alt="checkmarkone" className="w-[51px] md:h-auto object-cover" />
              <Text size="xl" as="p" className="mt-[3px] !text-white-A700">
                Comfortable journey with Our Vehicles
              </Text>
            </div>
          </div>
        </div>

        </div>
      
    </>
  );
}
