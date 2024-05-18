import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, Text } from "components"; // Ensure these are correctly imported
import { useState } from 'react';

export default function SignInPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5000/auth/login/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      });
  
      const data = await response.json();
      if (response.ok) {
        console.log("Login successful", data);
        localStorage.setItem('token', data.token); // Save the token in local storage
        navigate('/');
      } else {
        console.error("Login failed:", data);
        alert(data.error || "An error occurred during login.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred, please check your network and try again.");
    }
  };

  return (
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
        <h1 className="text-xl font-bold tracking-[3.00px]">Sign In Now</h1>
        <div className="flex flex-col items-center justify-start w-[90%] md:w-full mt-11 gap-5">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:w-full mt-5 text-deep_purple-400_01 pb-2 border-b-2 border-gray-300"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full sm:w-full mt-5 text-deep_purple-400_01 pb-2 border-b-2 border-gray-300"
          />
          <div className="flex flex-row items-center justify-between w-full">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                checked={isChecked}
                onChange={handleCheck}
                className="mr-2"
              />
              <label htmlFor="rememberMe" className="text-sm opacity-80 font-bold">
                Remember Me
              </label>
            </div>
            <a href="" className="ml-auto font-bold text-[#854a9bcc]">
              Forgot Password ?
            </a>
          </div>
          <Button onClick={handleSubmit} size="xl" color="bg-deep_purple-400" className="w-[150px] bg-[#854a9bcc] p-3 rounded-[5px] tracking-[3.60px] text-white-A700">
            Sign In
          </Button>
        </div>
        <div className="flex flex-row sm:flex-col justify-center items-center w-full mt-[11px] sm:gap-5">
          <div className="h-px w-[48%] bg-black-900_66" />
          <h3 className="ml-1.5 sm:ml-0 mt-5 mb-5 text-black-900_66">or</h3>
          <div className="h-px w-[48%] ml-[3px] sm:ml-0 bg-black-900_66" />
        </div>
        <div className="flex flex-row justify-between items-center w-[47%] md:w-full">
          <button>
            <Img src="images/img_th_1.png" alt="thone_one" className="h-[35px] w-[35px] md:h-auto rounded-[50%]" />
          </button>
          <button>
            <Img src="images/img_png_transparent.png" alt="pngtransparent" className="h-[35px] w-[35px] md:h-auto rounded-[50%]" />
          </button>
          <button>
            <Img src="images/img_social_media_ic.png" alt="socialmediaic" className="h-[33px] w-[33px] md:h-auto rounded-[50%]" />
          </button>
        </div>
        <Text size="lg" as="p" className="mt-4 text-black-900">
          <span className="text-black-900_66">Don’t you have an Account ?</span>
          <a href="/signup"><span className="text-[#854a9bcc]"> Sign Up</span></a>
        </Text>
      </div>
    </div>
  );
}
