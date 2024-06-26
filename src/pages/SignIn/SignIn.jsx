import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Img, Text } from "components"; // Ensure these are correctly imported
import { Heading } from "components/Heading1";
import image2 from "../../../src/assets/images/eye2.png";
import useInterSection from './userInterSection';
import { message } from "antd";
import { BASE_URL } from "../../config";


export default function SignInPage() {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [contentRef, isContentVisible] = useInterSection({ threshold: 0.1 });

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await fetch(`${BASE_URL}/auth/login/email`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: values.email,
            password: values.password
          })
        });
    
        const data = await response.json();
  
        if (response.ok) {
          console.log("Login successful", data);
          message.success("Login successful")
          localStorage.setItem('token', data.token); // Save the token in local storage
          localStorage.setItem('email', values.email); // Save the email in local storage
          if(data.role === "USER") {
            navigate('/');
          }
          if(data.role === "TOURGUIDE") {
            navigate("/admin-guider");
          }
          if(data.role === "HOTEL") {
            navigate("/admin-hotel");
          }
          if(data.role === "ADMIN") {
            navigate("/admin");
          }
          if(data.role === "TRANSPORT") {
            navigate("/admintransport");
          }
        } else {
          console.error("Login failed:", data);
          console.log(data.errorMessage)
          message.error("Login failed: " + data.errorMessage)
          
        }
      } catch (error) {
        console.error("Error during login:", error);
        alert("An error occurred, please check your network and try again.");
      }
    },
  });

  useEffect(() => {
    return () => {
      message.destroy();
    };
  }, []);

  return (
    <>
      <div className="flex flex-row md:flex-col justify-center bg-white-A700_01 items-center h-[700px] sm:h-[800px] w-[70%] sm:w-[95%] md:w-[90%] md:mt-[20px] gap-[33px] left-0 bottom-0 right-0 top-0 m-auto md:gap-5 shadow-bs absolute rounded-[10px]">
        <div className="relative w-[52%] h-[700px] md:w-full md:h-[544px] sm:h-[1000px] rounded-bl-[10px] rounded-tl-[10px] md:rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-opacity-50 bg-[#854a9bcc]"></div>
          <Img
            src="images/img_signup_1.png"
            alt="signupone_one"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col items-center justify-start w-[50%] md:w-full">
          <Heading size="xl" as="h1" className="tracking-[3.00px] md:mt-[20px]">
            Sign In Now
          </Heading>

          <form onSubmit={formik.handleSubmit} className="flex flex-col items-center justify-start w-[90%] md:w-full mt-20 gap-5" autoComplete="off">
            <label className='relative cursor-pointer' autoComplete="new-password">
              <input
                type="text1"
                placeholder="Input"
                {...formik.getFieldProps('email')}
                className={`h-14 w-[550px] sm:w-[350px] md:w-[600px] px-6 !text-[20px] text-white bg-black border-black-900 border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200 ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''}`}
                autoComplete="new-email"
              />
              <span className=' !text-[20px] text-white text-opacity-10 text-black-900_b2 absolute left-5 top-4 px-1 transition duration-200 input-text'>Email</span>
              {formik.touched.email && formik.errors.email ? <div className="text-red-500 text-sm">{formik.errors.email}</div> : null}
            </label>

            <label className='relative cursor-pointer' autoComplete="new-password">
              <input
                type={passwordVisible ? 'text1' : 'password'}
                placeholder="Input"
                {...formik.getFieldProps('password')}
                className={`h-14 w-[550px] sm:w-[350px] md:w-[600px] px-6 !text-[20px] text-white bg-black border-black-900 border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200 ${formik.touched.password && formik.errors.password ? 'border-red-500' : ''}`}
                autoComplete="new-password"
              />
              <span className=' !text-[20px] text-white text-opacity-10 text-black-900_b2 absolute left-5 top-4 px-1 transition duration-200 input-text'>Password</span>
              {formik.touched.password && formik.errors.password ? <div className="text-red-500 text-sm">{formik.errors.password}</div> : null}
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-5 top-4 text-white"
              >
                {passwordVisible ? <Img src={image2} alt="hide" className="w-8 h-8" /> : '👁️'}
              </button>
            </label>

            <div className="flex flex-row items-center justify-between w-[95%] md:w-[65%] sm:w-[90%]">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={formik.values.rememberMe}
                  onChange={() => formik.setFieldValue('rememberMe', !formik.values.rememberMe)}
                  className="mr-2"
                />
                <label htmlFor="rememberMe" className="text-sm opacity-80 font-bold">
                  Remember Me
                </label>
              </div>
              <a href="/fogotpassword" className="ml-auto font-bold text-[#854a9bcc]">
                Forgot Password ?
              </a>
            </div>
            <Button type="submit" size="xl" color="bg-deep_purple-400" className="w-[150px] hover:bg-[#854a9bcc] bg-gray-500 p-3 rounded-[5px] tracking-[3.60px] text-white-A700">
              Sign In
            </Button>
          </form>
          
          <div className="flex flex-row sm:flex-col justify-center items-center w-full mt-[11px] sm:gap-1">
            <div className="h-px w-[48%] bg-black-900_66" />
            <h3 className="ml-1.5 sm:ml-0 mt-5 md:mt-[1px] mb-5 text-black-900_66">or</h3>
            <div className="h-px w-[48%] ml-[3px] sm:ml-0 bg-black-900_66" />
          </div>

          <Text size="lg" as="p" className="mt-[1px] md:mt-[-10px] md:mb-[30px] text-black-900 md:!text-[15px]">
            <span className="text-black-900_66">Don’t you have an Account ?</span>
            <a href="/signup"><span className="text-[#854a9bcc]"> Sign Up</span></a>
          </Text>
        </div>
      </div>

      <div className="w-[80%] h-[250px] sm:w-[100%] md:hidden">
        <div className="flex flex-col items-center justify-start w-[36%] sm:w-[60%] h-max left-[15%] bottom-0 top-0 p-[31px] m-auto sm:p-5 rounded-tl-[10px] rounded-bl-[10px] absolute">
          <Text size="2xl" as="p" className="!text-white-A700">
            Virtual Travel Assistant
          </Text>
          <div className="h-[5px] w-[13%] mt-3.5 bg-white-A700" />
          <div className="flex flex-col items-start justify-start w-full mt-[42px] mb-[38px] gap-[45px] md:px-5 max-w-[420px]">
            
            <div ref={contentRef} className={`flex flex-row sm:flex-col justify-start items-start gap-5 sm:gap-5 ${isContentVisible ? 'animate-moveLeftToRight' : ''}`}>
              <Img src="images/img_check_mark_1.png" alt="checkmarkone" className="w-[51px] md:h-auto object-cover" />
              <Text size="xl" as="p" className="!text-white-A700 ">
                Customize Your Journey with our Travel Plan.
              </Text>
            </div>
            <div ref={contentRef} className={`flex flex-row sm:flex-col justify-start items-start gap-5 sm:gap-5 ${isContentVisible ? 'animate-moveLeftToRight1' : ''}`}>
              <Img src="images/img_check_mark_1.png" alt="checkmarkone" className="w-[51px] md:h-auto object-cover" />
              <Text size="xl" as="p" className="mt-[3px] sm:mt-0 !text-white-A700">
                Stay with best view location with our hotels
              </Text>
            </div>
            <div className={`flex flex-row justify-start items-start gap-5 ${isContentVisible ? 'animate-moveLeftToRight2' : ''}`}>
              <Img src="images/img_check_mark_1.png" alt="checkmarkone" className="w-[51px] md:h-auto object-cover" />
              <Text size="xl" as="p" className="!text-white-A700">
                Get best experience with our Guiders
              </Text>
            </div>
            <div className={`flex flex-row justify-start items-start gap-5 ${isContentVisible ? 'animate-moveLeftToRight3' : ''}`}>
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
