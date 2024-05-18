import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";
import { Heading } from "components/Heading1";
import { Input } from "components/Input";

export default function SignUpPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    if (location.state && location.state.role) {
      setRole(location.state.role);
    } else {
      setRole("USER");
    }
  }, [location.state]);

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5000/auth/register/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          name: name,
          password: password,
          role: role
        })
      });

      try {
        const data = await response.json();
        if (response.ok) {
          console.log("Signup successful", data);
          navigate('/emailConformation', { state: { email: email } });
        } else {
          console.error("Signup failed:", data);
          alert(data.error || "An error occurred during signup.");
        }
      } catch (e) {
        // Handle JSON parsing error
        console.error("Error parsing JSON:", e);
        alert("An error occurred, please try again.");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("An error occurred, please check your network and try again.");
    }
  };

  return (
    <>
      <div className="flex flex-row md:flex-col justify-center bg-white-A700_01 items-center h-[700px] w-[70%] gap-[33px] left-0 bottom-0 right-0 top-0 m-auto md:gap-5 shadow-bs absolute rounded-[10px]">
        <div className="relative w-[52%] h-[700px] md:w-full md:h-[544px] rounded-bl-[10px] rounded-tl-[10px] overflow-hidden">
          <div className="absolute inset-0 bg-opacity-50 bg-[#854a9bcc]"></div>
          <Img
            src="images/img_signup_1.png"
            alt="signupone_one"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col items-center justify-start w-[50%] md:w-full">
          <Heading size="xl" as="h1" className="tracking-[3.00px]">
            Sign Up Now
          </Heading>
          <div className="flex flex-col items-center justify-start w-[90%] md:w-full mt-11 gap-5">
            <Input
              color="deep_purple_400"
              shape="square"
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full sm:w-full mt-5 !text-deep_purple-400_01 pb-2 border-b-2 border-gray-300"
            />
            <Input
              color="deep_purple_400"
              shape="square"
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:w-full mt-5 !text-deep_purple-400_01 pb-2 border-b-2 border-gray-300"
            />
            <Input
              color="deep_purple_400"
              shape="square"
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full sm:w-full mt-5 !text-deep_purple-400_01 pb-2 border-b-2 border-gray-300"
            />
            <Input
              color="deep_purple_400"
              shape="square"
              type="password"
              name="conformPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full sm:w-full mt-5 !text-deep_purple-400_01 pb-2 border-b-2 border-gray-300"
            />
            <a
              href="#"
              className="flex justify-center items-center w-[200px] h-[38px] pt-2.5 pb-[5px] px-3.5 bg-deep_purple-400 text-shadow-ts rounded-[5px]"
            >
              <Button onClick={handleSubmit} size="xl" color="bg-deep_purple-400" as="h2" className="!text-white-A700 w-[150px] bg-[#854a9bcc] p-3 rounded-[5px] tracking-[3.60px]">
                Sign Up
              </Button>
            </a>
          </div>
          <div className="flex flex-row sm:flex-col justify-center items-center w-full mt-[11px] sm:gap-5">
            <div className="h-px w-[48%] bg-black-900_66" />
            <Heading as="h3" className="ml-1.5 sm:ml-0 mt-5 mb-5 !text-black-900_66">
              or
            </Heading>
            <div className="h-px w-[48%] ml-[3px] sm:ml-0 bg-black-900_66" />
          </div>
          <div className="flex flex-row justify-between items-center w-[47%] md:w-full">
            <button>
              <Img src="images/img_th_1.png" alt="thone_one" className="h-[35px] w-[35px] md:h-auto rounded-[50%]" />
            </button>
            <button>
              <Img
                src="images/img_png_transparent.png"
                alt="pngtransparent"
                className="h-[35px] w-[35px] md:h-auto rounded-[50%]"
              />
            </button>
            <button>
              <Img
                src="images/img_social_media_ic.png"
                alt="socialmediaic"
                className="h-[33px] w-[33px] md:h-auto rounded-[50%]"
              />
            </button>
          </div>
          <Text size="lg" as="p" className="mt-4 !text-black-900">
            <span className="text-black-900_66">Already have an Account ?</span>
            <span className="text-black-900"></span>
            <a href=""><span className="text-[#854a9bcc]"> Sign In</span></a>
          </Text>
        </div>
      </div>

      <div className="w-[80%] h-[250px]"> 
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
